import { Component } from '@angular/core';
import {ServicesComponent} from '../../components/services.component/services-page';

@Component({
  selector: 'app-services-page',
  imports: [ ServicesComponent
  ],
  templateUrl: './services.page.html',
  styleUrl: './services.page.css'
})
export class ServicesPage {
}
