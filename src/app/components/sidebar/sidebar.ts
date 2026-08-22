import { Component } from '@angular/core';
import { Icon, IconName } from '../../shared/icon/icon';

@Component({
  selector: 'app-sidebar',
  imports: [Icon],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.css',
})
export class Sidebar {
  name = 'Mohammad Oman';
  tagline = 'Junior Software Developer at PRAN-RFL Group. Interested in applying deep ' +
    'learning to Wi-Fi sensing and natural language processing.';
  location = 'Dhaka, Bangladesh';
  email = 'mdoman765@gmail.com';

  links: { icon: IconName; label: string; href: string }[] = [
    { icon: 'mail',           label: 'Email',    href: 'mailto:mdoman765@gmail.com' },
    { icon: 'linkedin',       label: 'LinkedIn', href: 'https://www.linkedin.com/in/oman765' },
    { icon: 'github',         label: 'GitHub',   href: 'https://github.com/mdoman765' },
    { icon: 'download',       label: 'CV',       href: 'Oman_CUET_CSE.pdf' },
    { icon: 'graduation-cap', label: 'Google Scholar', href: 'https://scholar.google.com/citations?user=7AauBGAAAAAJ&hl=en' },
  ];
}
