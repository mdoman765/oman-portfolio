import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import emailjs from '@emailjs/browser';
import { Icon, IconName } from '../../shared/icon/icon';

@Component({
  selector: 'app-contact',
  imports: [FormsModule, Icon],
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
  sending = signal(false);

  infoItems: { icon: IconName; label: string; value: string; link: string }[] = [
    { icon: 'mail',      label: 'Email',        value: 'mdoman765@gmail.com',              link: 'mailto:mdoman765@gmail.com' },
    { icon: 'phone',     label: 'Phone',        value: '+8801301024201',                   link: 'tel:+8801301024201' },
    { icon: 'briefcase', label: 'Current Role', value: 'Junior Software Developer, PRAN-RFL', link: '#' },
    { icon: 'linkedin',  label: 'LinkedIn',     value: 'linkedin.com/in/oman765',          link: 'https://www.linkedin.com/in/oman765' },
    { icon: 'github',    label: 'GitHub',       value: 'github.com/mdoman765',             link: 'https://github.com/mdoman765' },
  ];

  async onSubmit() {
    if (!this.name || !this.email || !this.message) {
      this.error.set(true);
      return;
    }
    this.error.set(false);
    this.sending.set(true);

    try {
      await emailjs.send(
        'service_wn7o68g',
        'template_vsrmalw',
        {
          from_name:  this.name,
          from_email: this.email,
          subject:    this.subject || 'Portfolio Contact',
          message:    this.message,
        },
        '5vA5vQdtoIsQoNfVh'   // replace with your EmailJS Public Key
      );
      this.sent.set(true);
      this.name = this.email = this.subject = this.message = '';
    } catch (err) {
      console.error('EmailJS error:', err);
      this.error.set(true);
    } finally {
      this.sending.set(false);
    }
  }
}
