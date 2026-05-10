import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  imports: [RouterLink],
  templateUrl: './footer.html',
  styleUrl: './footer.css'
})
export class Footer {
  year = new Date().getFullYear();
  links = [
    { label: 'Home',       path: '/home' },
    { label: 'About',      path: '/about' },
    { label: 'Skills',     path: '/skills' },
    { label: 'Experience', path: '/experience' },
    { label: 'Projects',   path: '/projects' },
    { label: 'Contact',    path: '/contact' },
  ];
}
