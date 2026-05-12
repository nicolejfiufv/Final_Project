import { Component,signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  home = signal([
    {title: '✨MAKE YOUR OWN MEMORIES✨', description: 'A personal space where memories and moments are kept.'}
  ])
}
