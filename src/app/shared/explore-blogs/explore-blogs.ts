import { Component } from '@angular/core';
import { BlogsService } from '../../services/blogs.service';
import { ActivatedRoute } from '@angular/router';
import { Navigator } from '../../services/navigator.service';

@Component({
  selector: 'app-explore-blogs',
  imports: [],
  templateUrl: './explore-blogs.html',
  styleUrl: './explore-blogs.css',
})
export class ExploreBlogs {
  
  selectedType(type:string){
    this.navigator.goToCategory(type);
  }

  constructor(
    private service: BlogsService,
    private route: ActivatedRoute,
    private navigator: Navigator,
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const typeFromRoute = params.get('type');

      if (typeFromRoute) {
        this.service.setType(typeFromRoute);
      } else {
        this.service.setType('all');
      }
    });
  }
}
