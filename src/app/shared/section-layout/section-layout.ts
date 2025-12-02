import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-section-layout',
  imports: [],
  templateUrl: './section-layout.html',
  styleUrls: ['./section-layout.css'],
})
export class SectionLayout {
    @Input() title?: string; 
    @Input() subtitle?: string; 
    @Input() description?: string;
}
