import { Component, OnInit } from '@angular/core';
import { PageLayout } from "../../shared/page-layout/page-layout";
import { SectionLayout } from "../../shared/section-layout/section-layout";
import { ExploreServieces } from "../../shared/explore-services/explore-servieces";
import { Service } from '../../models/profileinfo.model';
import SERVICES_DATA from '../../../assets/db/services.json';

@Component({
  selector: 'app-services',
  imports: [PageLayout, SectionLayout, ExploreServieces],
  templateUrl: './services.html',
  styleUrl: './services.css',
})
export class Services implements OnInit {
  services !: Service[];
  ngOnInit(): void {
    this.services = SERVICES_DATA as Service[];
  }
}
