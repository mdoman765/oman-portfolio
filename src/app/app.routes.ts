import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { About } from './components/about/about';
import { Skills } from './components/skills/skills';
import { Projects } from './components/projects/projects';
import { Contact } from './components/contact/contact';
import { Experience } from './components/experience/experience';
import { Education } from './components/education/education';
import { Achievements } from './components/achievements/achievements';
import { Teaching } from './components/teaching/teaching';
import { EducationExperience } from './components/education-experience/education-experience';
import { AchievementsSkills } from './components/achievements-skills/achievements-skills';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },

  // Top navbar sections: Home | Research | Education | Experience | Skills | Achievements | Contact
  { path: 'home',          component: Home },
  { path: 'research',     component: Projects },
  { path: 'education',    component: Education },
  { path: 'experience',   component: Experience },
  { path: 'skills',       component: Skills },
  { path: 'achievements', component: Achievements },
  { path: 'contact',      component: Contact },

  // Kept reachable but not in the top navbar
  { path: 'teaching',             component: Teaching },
  { path: 'notes-misc',           component: Contact },
  { path: 'education-experience', component: EducationExperience },
  { path: 'achievements-skills',  component: AchievementsSkills },

  // Original routes kept for backwards compatibility / direct access
  { path: 'about',    component: About },
  { path: 'projects', component: Projects },

  { path: '**', redirectTo: 'home' }
];
