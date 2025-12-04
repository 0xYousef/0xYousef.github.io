import { Component, Input } from '@angular/core';
import { Social } from '../../models/profileinfo.model';
import { readIcon } from '../../utils/read-assets.util';

@Component({
  selector: 'app-accounts',
  imports: [],
  standalone: true,
  templateUrl: './accounts.html',
  styleUrl: './accounts.css',
})
export class Accounts {
  @Input({required:true}) accounts !: Social[];
  protected readonly readIcon = readIcon;
}
