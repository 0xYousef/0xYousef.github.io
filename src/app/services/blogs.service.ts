import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { BehaviorSubject, Observable, of } from "rxjs";
import { catchError, map } from "rxjs/operators";
import BLOGS_META from "../../assets/db/blogs.json";
import { Blog, BlogMeta, Content } from "../models/blog.model";

@Injectable({
  providedIn: 'root'
})
export class BlogsService {


  private blogs: BlogMeta[] = BLOGS_META as BlogMeta[];

  
  private typeSubject = new BehaviorSubject<string>('all');
  readonly type$ = this.typeSubject.asObservable();

  constructor(private http: HttpClient) {}

  get posts(): BlogMeta[] {
    return this.blogs;
  }

  
  setType(type: string): void {
    this.typeSubject.next(type);
  }

  
  getCurrentType(): string {
    return this.typeSubject.getValue();
  }

 
  blogsByType(type: string): BlogMeta[] {
    if (type === 'all') return this.blogs;
    return this.blogs.filter(b => b.postType === type);
  }

  
  getPostMetaById(id: number): BlogMeta | undefined {
    return this.blogs.find(b => b.id === id);
  }

  
  get getPostById(): (id: number) => Observable<Blog | undefined> {
    return (id: number): Observable<Blog | undefined> => {
      const meta = this.getPostMetaById(id);
      if (!meta) return of(undefined);

      const url = `assets/db/blogs/${meta.file}`;

      return this.http.get<Content>(url).pipe(
        map((content: Content) => ({ meta, content } as Blog)),
        catchError((error) => {
          console.error("Blog file not found or failed to load:", meta.file, error);
          return of(undefined);
        })
      );
    };
  }
}