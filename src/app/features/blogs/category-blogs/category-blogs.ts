import { Component, inject, OnInit } from '@angular/core';
import { Cards } from "../../../shared/cards/cards";
import { BlogMeta } from '../../../models/blog.model';
import { SectionLayout } from "../../../shared/section-layout/section-layout";
import { PageLayout } from "../../../shared/page-layout/page-layout";
import { BlogsService } from '../../../services/blogs.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-category-blogs',
  standalone: true,
  imports: [Cards, SectionLayout, PageLayout, FormsModule],
  templateUrl: './category-blogs.html',
  styleUrls: ['./category-blogs.css','../recent-blogs/recent-blogs.css'],
})
export class CategoryBlogs implements OnInit  {

  blogs!: BlogMeta[];
  filteredBlogs: BlogMeta[] = [];
  
  activeFilter: string = 'All';
  searchTerm: string = '';

  private blogServices = inject(BlogsService);
  
  ngOnInit(): void {
    this.blogs = this.blogServices.posts;
    this.filteredBlogs = [...this.blogs];
  }
  
  get filters(): string[] {
    const categories = new Set<string>(['All']);
    this.blogs.forEach(blog => categories.add(blog.category));
    return Array.from(categories);
  }

  filterBlogs(): void {
    const searchTermLower = this.searchTerm.toLowerCase();

    const filtered = this.blogs.filter(blog => {
      const matchesSearch =
        this.searchTerm === '' ||
        blog.title.toLowerCase().includes(searchTermLower) ||
        blog.description?.toLowerCase().includes(searchTermLower) ||
        blog.postType?.toLowerCase().includes(searchTermLower);

      const matchesCategory =
        this.activeFilter === 'All' || blog.category === this.activeFilter;

      return matchesSearch && matchesCategory;
    });

    this.filteredBlogs = filtered;
  }
}
