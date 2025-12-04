import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class Navigator {
  constructor(private router: Router) {}

  goToCategory(category: string) {
    this.router.navigate(['blogs', category]);
  }

  goToBlog(category: string, id: number): void {
    this.router.navigate(['blogs', category, id]);
  }
}
