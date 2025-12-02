import { Component, ElementRef, Input } from '@angular/core';
import { BlogMeta } from '../../../models/blog.model';

@Component({
  selector: 'app-cards',
  imports: [],
  templateUrl: './cards.html',
  styleUrl: './cards.css',
})
export class Cards {
@Input() bolg!: BlogMeta;
  
  displayedTags: string[] = [];
  extraTagsCount: number = 0;

  private resizeObserver: () => void;

  constructor(private elRef: ElementRef) {
    this.resizeObserver = this.updateTagsToFit.bind(this);
  }

  ngOnInit(): void {
    setTimeout(() => this.updateTagsToFit(), 0);

    window.addEventListener('resize', this.resizeObserver);
  }

  ngOnDestroy(): void {
    window.removeEventListener('resize', this.resizeObserver);
  }

  private updateTagsToFit(): void {
    const cardEl: HTMLElement = this.elRef.nativeElement.querySelector('.achievement-card');
    const tagsContainer: HTMLElement = this.elRef.nativeElement.querySelector('.achievement-tags');

    if (!cardEl || !tagsContainer) return;

    const elementsToSubtract = [
      '.achievement-image-container',
      '.achievement-title',
      '.achievement-field',
      '.achievement-date'
    ]
      .map(selector => cardEl.querySelector(selector)?.clientHeight || 0)
      .reduce((sum, height) => sum + height, 0);

    const padding = 60; // spacing
    const availableHeight = cardEl.clientHeight - elementsToSubtract - padding;

    const tagHeight = 26; // approximate per tag
    const maxTags = Math.floor(availableHeight / tagHeight);

    if (this.bolg.tags?.length > maxTags) {
      this.displayedTags = this.bolg.tags.slice(0, maxTags);
      this.extraTagsCount = this.bolg.tags.length - maxTags;
    } else {
      this.displayedTags = this.bolg.tags || [];
      this.extraTagsCount = 0;
    }
  }
}
