import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { ApiService } from './services/api.service';

import { Header } from './header/header';
import { Footer } from './footer/footer';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    Header,
    Footer
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class AppComponent implements OnInit {
  status: any = null;
  error: string | null = null;

  constructor(private api: ApiService) {}

  ngOnInit() {
    this.api.ping().subscribe({
      next: res => this.status = res,
      error: err => {
        console.error(err);
        this.error = err.message ?? 'Request failed';
      }
    });
  }
}
