import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatChipsModule } from '@angular/material/chips';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatIconModule } from '@angular/material/icon';

type ResumeAction = 'linkedin' | 'github' | 'pdf';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [
    CommonModule,
    MatChipsModule,
    MatProgressBarModule,
    MatIconModule
  ],
  templateUrl: './about.html',
  styleUrl: './about.scss',
})
export class About {
  name = 'Brian Musinyan';
  title = 'Software Engineer';
  location = 'Glendale, CA';
  email = 'bmusinyan@gmail.com';

  links = {
    linkedin: 'https://www.linkedin.com/in/brian-musinyan-a22b7959',
    github: 'https://github.com/', // put your exact github url
    pdf: '/assets/Brian_Musinyan_Resume.pdf' // put your real pdf path (or remove icon)
  };

  skills = [
    'HTML / CSS',
    'JavaScript',
    'TypeScript',
    'Angular',
    'ExtJS',
    'PHP',
    'Node.js (Electron)',
    'D3',
    'Chart.js'
  ];

  languages = [
    { name: 'English', value: 95 },
    { name: 'Armenian', value: 100 },
    { name: 'Russian', value: 70 },
  ];

  profile = [
    `Down to earth software engineer with a soft spot for Web applications.`,
    `Specializes in platforms designed to monitor applications, regression testing, and performance testing under load.`,
    `10+ years building automation platforms with Angular/ExtJS, Django/PHP, MongoDB/SQLite, and distributed systems.`
  ];
}
