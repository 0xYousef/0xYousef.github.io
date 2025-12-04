import { Component, ElementRef, Input } from '@angular/core';
import { BlogMeta } from '../../models/blog.model';
import { Navigator } from '../../services/navigator.service';

@Component({
  selector: 'app-cards',
  imports: [],
  templateUrl: './cards.html',
  styleUrl: './cards.css',
})
export class Cards {

  @Input() blog!: BlogMeta;
  
  displayedTags: string[] = [];
  extraTagsCount: number = 0;

  private resizeObserver: () => void;

  constructor(private elRef: ElementRef, private nav:Navigator) {
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
    const tagsContainer: HTMLElement = this.elRef.nativeElement.querySelector('.blog-tags');

    if (!tagsContainer || !this.blog.tags?.length) {
      this.displayedTags = this.blog.tags || [];
      this.extraTagsCount = 0;
      return;
    }

    const containerWidth = tagsContainer.clientWidth;
    if (containerWidth === 0) {
      // Container not yet rendered, try again
      setTimeout(() => this.updateTagsToFit(), 0);
      return;
    }

    const gap = 8; // gap between tags
    const plusIndicatorWidth = 50; // approximate width for "+n" indicator
    let totalWidth = 0;
    const visibleTags: string[] = [];

    // Create a temporary container to measure tag widths
    const tempContainer = document.createElement('div');
    tempContainer.style.position = 'absolute';
    tempContainer.style.visibility = 'hidden';
    tempContainer.style.whiteSpace = 'nowrap';
    tempContainer.className = 'blog-tags';
    document.body.appendChild(tempContainer);

    for (let i = 0; i < this.blog.tags.length; i++) {
      const tag = this.blog.tags[i];
      const tempTag = document.createElement('span');
      tempTag.className = 'tag';
      tempTag.textContent = tag;
      tempContainer.appendChild(tempTag);
      
      const tagWidth = tempTag.offsetWidth;
      const totalWithGap = totalWidth + tagWidth + (visibleTags.length > 0 ? gap : 0);
      
      // Check if we need space for "+n" indicator
      const remainingTags = this.blog.tags.length - i - 1;
      const needsPlusIndicator = remainingTags > 0;
      const spaceNeeded = totalWithGap + (needsPlusIndicator ? plusIndicatorWidth + gap : 0);

      if (spaceNeeded <= containerWidth) {
        visibleTags.push(tag);
        totalWidth = totalWithGap;
      } else {
        // Can't fit this tag, show "+n" instead
        this.extraTagsCount = this.blog.tags.length - visibleTags.length;
        break;
      }
    }

    // Clean up temporary container
    document.body.removeChild(tempContainer);

    this.displayedTags = visibleTags;
  }


  goToBlogDetail(): void {
    this.nav.goToBlog(this.blog.postType, this.blog.id);
  }
}
