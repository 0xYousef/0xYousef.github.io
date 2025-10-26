import { Routes } from '@angular/router';
import { Home } from './features/home/home';
import { Aboutme } from './features/aboutme/aboutme';
import { Services } from './features/services/services';
import { Blogs } from './features/blogs/blogs';
import { CategoryBlogs } from './features/blogs/category-blogs/category-blogs';
import { Blog } from './features/blogs/blog/blog';
import { Contactme } from './features/contactme/contactme';
export const routes: Routes = [
    {path: '', component: Home},
    {path: 'about-me', component: Aboutme},
    {path:'services', component: Services},
    {
    path: 'blogs',
    children: [
        {path: '', component: Blogs },

        {path: ':type', component: CategoryBlogs },

        {path: ':type/:id', component: Blog },
    ],
    },
    {path: 'contact-me', component: Contactme},
    {path: '==', redirectTo: ''},
];
