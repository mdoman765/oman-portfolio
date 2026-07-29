import { Component, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})
export class Navbar {
  menuOpen = signal(false);

  navLinks = [
    { label: 'Research',     path: '/research' },
    { label: 'Education',    path: '/education' },
    { label: 'Experience',   path: '/experience' },
    { label: 'Skills',       path: '/skills' },
    { label: 'Achievements', path: '/achievements' },
    { label: 'Contact',      path: '/contact' },
  ];

  toggleMenu() {
    this.menuOpen.update(v => !v);
  }

  closeMenu() {
    this.menuOpen.set(false);
  }
}
