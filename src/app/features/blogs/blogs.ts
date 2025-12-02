import { Component } from '@angular/core';
import { PageLayout } from "../../shared/page-layout/page-layout";
import { SectionLayout } from "../../shared/section-layout/section-layout";
import { ExploreBlogs } from "../../shared/explore-blogs/explore-blogs";
import { RecentBlogs } from "./recent-blogs/recent-blogs";

@Component({
  selector: 'app-blogs',
  imports: [PageLayout, SectionLayout, ExploreBlogs, RecentBlogs],
  templateUrl: './blogs.html',
  styleUrl: './blogs.css',
})
export class Blogs {

}
