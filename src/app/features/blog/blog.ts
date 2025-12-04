import { Component, ElementRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { readIcon, readImage } from '../../utils/read-assets.util';
import { BlogMeta, Content } from '../../models/blog.model';
import { BlogsService } from '../../services/blogs.service';
import { Navigator } from '../../services/navigator.service';

@Component({
  selector: 'app-blog',
  imports: [],
  templateUrl: './blog.html',
  styleUrl: './blog.css',
})
export class Blog {
  blog!: BlogMeta;
  content: Content | null = null;
  copied = false;

  readIcon = readIcon;
  readImage = readImage;

  constructor(
    private route: ActivatedRoute,
    private blogsService: BlogsService,
    private navigation: Navigator,
    private elRef: ElementRef
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    if (isNaN(id)) return;

    this.blogsService.getPostById(id).subscribe((post) => {
      if (!post) return;
      this.blog = post.meta;
      this.content = post.content;
    });
  }

  copyCode(snippet: string): void {
    navigator.clipboard.writeText(snippet);
    this.copied = true;
    setTimeout(() => (this.copied = false), 1200);
  }

  goToType(type: string): void {
    this.navigation.goToCategory(type);
  }

  goBack(): void {
    if (this.blog) {
      this.navigation.goToCategory(this.blog.postType);
    }
  }

  formatId(text: string): string {
    return text.toLowerCase().replace(/\s+/g, '-');
  }

  scrollTo(headingText: string): void {
    const id = this.formatId(headingText);
    const el = this.elRef.nativeElement.querySelector(`#${id}`);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      el.classList.add('highlight');
      setTimeout(() => el.classList.remove('highlight'), 800);
    }
  }


  onImageLoad(event: Event): void {
    const img = event.target as HTMLImageElement;
    const naturalRatio = img.naturalWidth / img.naturalHeight;

    if (naturalRatio > 1.2) {
      img.classList.add('wide-image');
    } else if (naturalRatio < 0.8) {
      img.classList.add('tall-image');
    } else {
      img.classList.add('square-image');
    }
  }
}
