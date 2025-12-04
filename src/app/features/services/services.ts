import { Component, inject, OnInit } from '@angular/core';
import { PageLayout } from "../../shared/page-layout/page-layout";
import { SectionLayout } from "../../shared/section-layout/section-layout";
import { ExploreServieces } from "../../shared/explore-services/explore-servieces";
import { Service } from '../../models/profileinfo.model';
import { MetaService } from '../../services/meta.service';

@Component({
  selector: 'app-services',
  imports: [PageLayout, SectionLayout, ExploreServieces],
  templateUrl: './services.html',
  styleUrl: './services.css',
})
export class Services  implements OnInit{
  services !: Service[]
  private meta : MetaService = inject(MetaService)
  
  ngOnInit(): void {
    this.services = this.meta.services
  }
}
