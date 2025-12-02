import { Component, Input } from '@angular/core';
import { Service } from '../../models/profileinfo.model';

@Component({
  selector: 'app-explore-servieces',
  imports: [],
  templateUrl: './explore-servieces.html',
  styleUrl: './explore-servieces.css',
})
export class ExploreServieces {
  @Input({required:true}) services !: Service[];

}
