import { Component, OnInit } from '@angular/core';
import { ApiService } from './services/api.service';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [JsonPipe],
  template: `
    <main class="page">
      <h1>Tecxonic Portfolio</h1>
      <p>Simple connectivity check with backend:</p>

      @if (status) {
        <p>Backend status: {{ status | json }}</p>
      } @else if (error) {
        <p class="error">Error calling API: {{ error }}</p>
      }
    </main>
  `,
  styles: [`
    .page {
      font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
      padding: 2rem;
    }
    .error {
      color: #c00;
    }
  `]
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
