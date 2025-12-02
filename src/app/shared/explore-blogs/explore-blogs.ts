import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-explore-blogs',
  imports: [],
  templateUrl: './explore-blogs.html',
  styleUrl: './explore-blogs.css',
})
export class ExploreBlogs {
  @Output() typeSelected = new EventEmitter<string>();
  selectedType(type:string){
    this.typeSelected.emit(type);
  };
}
