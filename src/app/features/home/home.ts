import { Component, OnInit } from '@angular/core';
import { PageLayout } from '../../shared/page-layout/page-layout';
import { SectionLayout } from "../../shared/section-layout/section-layout";
import { ExploreBlogs } from "../../shared/explore-blogs/explore-blogs";
import { ExploreServieces } from "../../shared/explore-services/explore-servieces";
import { WelcomeBoard } from "./welcome-board/welcome-board";
import { Service } from '../../models/profileinfo.model';
import SERVICES_DATA from '../../../assets/db/services.json';

@Component({
  selector: 'app-home',
  imports: [PageLayout, SectionLayout, ExploreBlogs, ExploreServieces, WelcomeBoard],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home implements OnInit {

  services !: Service[];
  ngOnInit(): void {
    this.services = SERVICES_DATA as Service[];
  }
}
