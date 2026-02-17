import { Routes } from '@angular/router';
import { Home } from './home/home';
import { About } from './about/about';
import { Projects } from './projects/projects';
import { ProjectDetail } from './projects/project-detail/project-detail';
import { Experience } from './experience/experience';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'about', component: About },
  { path: 'projects', component: Projects },
  { path: 'projects/:id', component: ProjectDetail },
  { path: 'experience', component: Experience },
  { path: '**', redirectTo: '' }
];
