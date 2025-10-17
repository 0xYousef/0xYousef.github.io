import { Component } from '@angular/core';
import {readImage} from '../../../utils/read-assets.utils';

@Component({
  selector: 'app-category-achievements',
  imports: [],
  templateUrl: './category_achievements.component.html',
  styleUrl: './category_achievements.component.css'
})
export class Category_achievementsComponent {

  protected readonly readImage = readImage;
}
