import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  imports: [FormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {
  name    = '';
  email   = '';
  subject = '';
  message = '';
  sent    = signal(false);
  error   = signal(false);

  infoItems = [
    { icon: '📧', label: 'Email',        value: 'mdoman765@gmail.com',          link: 'mailto:mdoman765@gmail.com' },
    { icon: '📱', label: 'Phone',        value: '+8801301024201',                link: 'tel:+8801301024201' },
    { icon: '🏢', label: 'Current Role', value: 'Junior Software Developer, PRAN-RFL',  link: '#' },
    { icon: '🔗', label: 'LinkedIn',     value: 'Mohammad Oman',                link: '#' },
    { icon: '💻', label: 'GitHub',       value: 'github.com/oman765',           link: 'https://github.com/oman765' },
  ];

  onSubmit() {
    if (!this.name || !this.email || !this.message) {
      this.error.set(true);
      return;
    }
    this.error.set(false);
    // In production, wire this to a backend or EmailJS
    console.log({ name: this.name, email: this.email, subject: this.subject, message: this.message });
    this.sent.set(true);
    this.name = this.email = this.subject = this.message = '';
  }
}
