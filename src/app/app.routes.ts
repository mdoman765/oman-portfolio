import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { About } from './components/about/about';
import { Skills } from './components/skills/skills';
import { Projects } from './components/projects/projects';
import { Contact } from './components/contact/contact';
import { Experience } from './components/experience/experience';

export const routes: Routes = [
  { path: '',           redirectTo: 'home', pathMatch: 'full' },
  { path: 'home',       component: Home },
  { path: 'about',      component: About },
  { path: 'skills',     component: Skills },
  { path: 'experience', component: Experience },
  { path: 'projects',   component: Projects },
  { path: 'contact',    component: Contact },
  { path: '**',         redirectTo: 'home' }
];
