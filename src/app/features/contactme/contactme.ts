import { Component } from '@angular/core';
import { PageLayout } from "../../shared/page-layout/page-layout";
import { SectionLayout } from "../../shared/section-layout/section-layout";
import { Form } from './form/form';

@Component({
  selector: 'app-contactme',
  imports: [PageLayout, SectionLayout,Form],
  templateUrl: './contactme.html',
  styleUrl: './contactme.css',
})
export class Contactme {

}
