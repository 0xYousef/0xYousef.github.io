import { Component } from '@angular/core';
import { Cards } from "../cards/cards";
import { BlogMeta } from '../../../models/blog.model';
import { SectionLayout } from "../../../shared/section-layout/section-layout";
import { PageLayout } from "../../../shared/page-layout/page-layout";

@Component({
  selector: 'app-category-blogs',
  imports: [Cards, SectionLayout, PageLayout],
  templateUrl: './category-blogs.html',
  styleUrls: ['./category-blogs.css','../recent-blogs/recent-blogs.css'],
})
export class CategoryBlogs {
  blogs : BlogMeta[] = [
    {
    "id": 1,
    "title": "Understanding Microservice Communication Patterns",
    "description": "A guide on synchronous vs asynchronous communication between microservices using real-world scenarios.",
    "category": "System Architecture",
    "tags": ["Microservices", "Kafka", "Architecture"],
    "published": "2025-01-22",
    "file": "readme_1.json",
    "postType": "article",
    "field": "Backend",
    "image": "articles.jpg",
    "last_modified": "2025-10-15"
  },
  {
    "id": 2,
    "title": "Exploring State Management in Angular with NgRx",
    "description": "Learn how to manage complex state in Angular using NgRx Store and Effects with best practices.",
    "category": "Frontend Development",
    "tags": ["Angular", "NgRx", "State Management"],
    "published": "2025-02-10",
    "file": "readme_2.json",
    "postType": "article",
    "field": "Frontend",
    "image": "articles.jpg",
    "last_modified": "2025-10-08"
  },
  {
    "id": 3,
    "title": "Optimizing Database Queries with JPA and Hibernate",
    "description": "Learn efficient data fetching and performance tuning techniques using JPA and Hibernate.",
    "category": "Database",
    "tags": ["JPA", "Hibernate", "SQL"],
    "published": "2025-03-18",
    "file": "readme_3.json",
    "postType": "article",
    "field": "Backend",
    "image": "articles.jpg",
    "last_modified": "2025-10-14"
  },
  {
    "id": 4,
    "title": "Improving Frontend Performance with Lazy Loading",
    "description": "Discover techniques to optimize Angular and React applications using code splitting and lazy loading.",
    "category": "Web Performance",
    "tags": ["Performance", "Optimization", "Angular", "React"],
    "published": "2025-04-30",
    "file": "readme_4.json",
    "postType": "article",
    "field": "Frontend",
    "image": "articles.jpg",
    "last_modified": "2025-10-20"
  },
  {
    "id": 5,
    "title": "Mastering Authentication with JWT in Node.js",
    "description": "A detailed explanation of implementing secure authentication using JSON Web Tokens in Node.js applications.",
    "category": "Security",
    "tags": ["JWT", "Node.js", "Authentication"],
    "published": "2025-05-26",
    "file": "readme_5.json",
    "postType": "article",
    "field": "Backend",
    "image": "azm-logo.jpeg",
    "last_modified": "2025-10-03"
  },
  {
    "id": 6,
    "title": "Building an E-Commerce API with Spring Boot",
    "description": "Develop a complete RESTful API for managing products, users, and orders using Spring Boot.",
    "category": "Backend Development",
    "tags": ["Spring Boot", "Java", "REST"],
    "published": "2025-06-12",
    "file": "readme_1.json",
    "postType": "project",
    "field": "Backend",
    "image": "swagLabs.png",
    "last_modified": "2025-10-01"
  },
  {
    "id": 7,
    "title": "Angular Dynamic Forms Builder",
    "description": "Build reusable and dynamic form components in Angular using reactive forms and custom validators.",
    "category": "Frontend Frameworks",
    "tags": ["Angular", "Forms", "Reactive"],
    "published": "2025-07-05",
    "file": "readme_2.json",
    "postType": "project",
    "field": "Frontend",
    "image": "IEEE.jpeg",
    "last_modified": "2025-10-05"
  },
  {
    "id": 8,
    "title": "Full-Stack Chat Application using WebSocket",
    "description": "Create a real-time chat app using WebSocket, Spring Boot, and Angular with authentication support.",
    "category": "Full-Stack Projects",
    "tags": ["WebSocket", "Spring Boot", "Angular"],
    "published": "2025-08-09",
    "file": "readme_3.json",
    "postType": "project",
    "field": "Full Stack",
    "image": "algoriza.png",
    "last_modified": "2025-10-18"
  }];


}
