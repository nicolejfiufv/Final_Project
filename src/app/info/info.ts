import { Component , ChangeDetectionStrategy, signal } from '@angular/core';

@Component({
  selector: 'app-info',
  imports: [],
  templateUrl: './info.html',
  styleUrl: './info.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Info {
  info = signal([
    {name:'ABOUT',
      description:'Sunlit Thoughts is a simple and elegant diary website designed for storing memories, thoughts, and personal moments digitally.' ,
      first:'This project was created to practice CRUD operations using Angular, HTML, CSS, and TypeScript while providing a clean and aesthetic user experience.',
      second:'Users can create new memories, view past entries, update existing notes, and delete unwanted memories easily.'},
    {name:'CREATOR',
      description:'Waggay, Nicole Anne G.' ,
      first:'BSIT - 2ND YEAR - IDB2',
      second:'APPDEV1'}

  ]);
}
