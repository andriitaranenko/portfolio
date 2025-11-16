import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  template: `
    <div class="min-h-screen bg-slate-50 text-slate-900">
      <header class="bg-white/60 backdrop-blur sticky top-0 z-40 shadow-sm">
        <div
          class="max-w-4xl mx-auto px-4 py-4 flex items-center justify-between"
        >
          <h1 class="text-lg font-semibold">Andrii — Portfolio</h1>
          <nav class="space-x-4"></nav>
        </div>
      </header>

      <main class="max-w-4xl mx-auto px-4 py-8">
        <router-outlet></router-outlet>
      </main>

      <footer class="mt-16 py-8 text-center text-sm text-slate-500">
        © {{ year }} Andrii — Built with Angular 20 • SSR-ready
      </footer>
    </div>
  `,
})
export class App {
  year = new Date().getFullYear();
}
