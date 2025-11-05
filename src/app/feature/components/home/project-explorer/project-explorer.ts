import { Component } from '@angular/core';
import { LucideAngularModule, Search } from 'lucide-angular';
@Component({
  selector: 'app-project-explorer',
  imports: [
    LucideAngularModule
  ],
  templateUrl: './project-explorer.html',
  styleUrl: './project-explorer.scss'
})
export class ProjectExplorer {
  readonly searchIcon = Search;
}
