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
    { label: 'Research',     path: '/research' },
    { label: 'Education',    path: '/education' },
    { label: 'Experience',   path: '/experience' },
    { label: 'Skills',       path: '/skills' },
    { label: 'Achievements', path: '/achievements' },
    { label: 'Contact',      path: '/contact' },
  ];
}
