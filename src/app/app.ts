import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NoFoundPageComponent } from './feature/components/no-found-page/no-found-page';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('portfolio');
}
