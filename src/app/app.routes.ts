import { Routes } from '@angular/router';
import { Home } from './home/home';
import { NewMemory } from './new-memory/new-memory';
import { Info } from './info/info';

export const routes: Routes = [
    {path: 'home', component: Home},
    {path: 'new', component: NewMemory},
    {path: 'info', component: Info},
    {path: '', redirectTo: 'home', pathMatch: 'full'}
];
