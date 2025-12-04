import { Component, inject, } from '@angular/core';
import { PageLayout } from '../../shared/page-layout/page-layout';
import { SectionLayout } from "../../shared/section-layout/section-layout";
import { ExploreBlogs } from "../../shared/explore-blogs/explore-blogs";
import { ExploreServieces } from "../../shared/explore-services/explore-servieces";
import { WelcomeBoard } from "./welcome-board/welcome-board";
import { MetaService } from '../../services/meta.service';

@Component({
  selector: 'app-home',
  imports: [PageLayout, SectionLayout, ExploreBlogs, ExploreServieces, WelcomeBoard],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  private metaService : MetaService = inject(MetaService)
  get callMetaService(){
    return this.metaService
  }
}
