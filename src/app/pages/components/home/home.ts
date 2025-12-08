import { Component } from '@angular/core';
import { ProjectExplorer } from './project-explorer/project-explorer';

@Component({
  selector: 'app-home',
  imports: [ ProjectExplorer],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {

}
