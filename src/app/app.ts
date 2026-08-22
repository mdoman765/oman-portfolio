import { Component, signal } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { filter } from 'rxjs/operators';
import { Navbar } from './components/navbar/navbar';
import { Footer } from './components/footer/footer';
import { Sidebar } from './components/sidebar/sidebar';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, Footer, Sidebar],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  // The profile sidebar is a permanent panel, not one of the navbar's
  // sections, so on mobile it's hidden everywhere it would otherwise
  // overlap with a routed section (Research, Education, etc.) — except
  // on the Home route, where the profile is the point of the page.
  isHome = signal(true);

  constructor(router: Router) {
    this.isHome.set(this.isHomeUrl(router.url));
    router.events
      .pipe(filter((e): e is NavigationEnd => e instanceof NavigationEnd))
      .subscribe(e => this.isHome.set(this.isHomeUrl(e.urlAfterRedirects)));
  }

  private isHomeUrl(url: string): boolean {
    const path = url.split(/[?#]/)[0];
    return path === '/' || path === '/home';
  }
}
