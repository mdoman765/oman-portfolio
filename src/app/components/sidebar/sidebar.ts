import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  imports: [],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.css',
})
export class Sidebar {
  name = 'Mohammad Oman';
  tagline = 'Junior Software Developer at PRAN-RFL Group. Interested in applying deep ' +
    'learning to Wi-Fi sensing and natural language processing.';
  location = 'Dhaka, Bangladesh';
  email = 'mdoman765@gmail.com';

  links = [
    { icon: '✉️', label: 'Email',    href: 'mailto:mdoman765@gmail.com' },
    { icon: '💼', label: 'LinkedIn', href: 'https://www.linkedin.com/in/oman765' },
    { icon: '🐙', label: 'GitHub',   href: 'https://github.com/mdoman765' },
    { icon: '📄', label: 'CV',       href: 'Oman_CUET_CSE.pdf' },
    { icon: '🎓', label: 'Google Scholar', href: 'https://scholar.google.com/citations?user=7AauBGAAAAAJ&hl=en' },
  ];
}
