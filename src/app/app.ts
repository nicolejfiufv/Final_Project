import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './navbar/navbar';
import { NewMemory } from './new-memory/new-memory';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Navbar,NewMemory],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Final_Project');
}
 