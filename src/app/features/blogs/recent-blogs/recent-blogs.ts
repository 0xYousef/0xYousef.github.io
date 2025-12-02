import { Component } from '@angular/core';
import { BlogMeta } from '../../../models/blog.model';
import { Cards } from "../cards/cards";
import BLOGS_DATA from '../../../../assets/db/blogs.json';

import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-recent-blogs',
  imports: [Cards, FormsModule],
  templateUrl: './recent-blogs.html',
  styleUrl: './recent-blogs.css',
})
export class RecentBlogs {
  blogs!: BlogMeta[];
  
  ngOnInit(): void {
    this.blogs = BLOGS_DATA as BlogMeta[];
    this.filteredBlogs = this.blogs.slice(-3);
  }
  
  filteredBlogs: BlogMeta[] = [];
  
  activeFilter: string = 'All';
  searchTerm: string = '';
  
  get filters(): string[] {
    const categories = new Set<string>(['All']);
    this.blogs.forEach(a => categories.add(a.category));
    return Array.from(categories);
  }

  filterBlogs(): void {
    const searchTermLower = this.searchTerm.toLowerCase();

    let filtered = this.blogs.filter(blog => {
      const matchesSearch = this.searchTerm === '' ||
        blog.title.toLowerCase().includes(searchTermLower) ||
        (blog.description && blog.description.toLowerCase().includes(searchTermLower)) ||
        (blog.postType && blog.postType.toLowerCase().includes(searchTermLower));

      const matchesCategory = this.activeFilter === 'All' ||
        blog.category === this.activeFilter;

      return matchesSearch && matchesCategory;
    });

    this.filteredBlogs = filtered.slice(-3);
  }
}