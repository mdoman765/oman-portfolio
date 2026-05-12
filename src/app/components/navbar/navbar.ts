import { Component, HostListener, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})
export class Navbar {
  scrolled = signal(false);
  menuOpen = signal(false);

  navLinks = [
    { label: 'Home',       path: '/home' },
    { label: 'About',      path: '/about' },
    { label: 'Skills',     path: '/skills' },
    { label: 'Experience', path: '/experience' },
    { label: 'Research',   path: '/projects' },
    { label: 'Contact',    path: '/contact' },
  ];

  @HostListener('window:scroll')
  onScroll() {
    this.scrolled.set(window.scrollY > 40);
  }

  toggleMenu() {
    this.menuOpen.update(v => !v);
  }

  closeMenu() {
    this.menuOpen.set(false);
  }
}
