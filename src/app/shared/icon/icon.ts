import { Component, Input } from '@angular/core';

export type IconName =
  | 'mail' | 'phone' | 'map-pin' | 'github' | 'linkedin' | 'external-link'
  | 'download' | 'menu' | 'x' | 'book-open' | 'code' | 'briefcase'
  | 'graduation-cap' | 'building' | 'award' | 'medal' | 'star' | 'globe'
  | 'lightbulb' | 'file-text' | 'message-circle' | 'settings' | 'cpu'
  | 'radio' | 'bot' | 'chevron-right' | 'arrow-left' | 'arrow-right'
  | 'check' | 'cloud' | 'monitor' | 'users' | 'trophy';

/**
 * Self-contained, dependency-free line-icon set (24x24, stroke-based).
 * Used in place of emoji throughout the site to keep the UI consistent
 * and professional without pulling in an external icon package.
 */
@Component({
  selector: 'app-icon',
  standalone: true,
  template: `
    <svg
      [attr.width]="size"
      [attr.height]="size"
      viewBox="0 0 24 24"
      fill="none"
      [attr.stroke]="color"
      stroke-width="1.8"
      stroke-linecap="round"
      stroke-linejoin="round"
      class="app-icon"
      aria-hidden="true"
      focusable="false"
    >
      @switch (name) {
        @case ('mail') {
          <rect x="3" y="5" width="18" height="14" rx="2"/>
          <polyline points="3,7 12,13 21,7"/>
        }
        @case ('phone') {
          <path d="M21.5 16.6v2.7a1.8 1.8 0 0 1-2 1.8 17.7 17.7 0 0 1-7.7-2.7 17.4 17.4 0 0 1-5.4-5.4A17.7 17.7 0 0 1 3.7 5.3a1.8 1.8 0 0 1 1.8-2h2.7a1.8 1.8 0 0 1 1.8 1.5c.1.9.3 1.7.6 2.5a1.8 1.8 0 0 1-.4 1.9L8.9 10.5a14.3 14.3 0 0 0 4.8 4.8l1.3-1.3a1.8 1.8 0 0 1 1.9-.4c.8.3 1.6.5 2.5.6a1.8 1.8 0 0 1 1.5 1.9z"/>
        }
        @case ('map-pin') {
          <path d="M12 21s7-6.5 7-12a7 7 0 1 0-14 0c0 5.5 7 12 7 12z"/>
          <circle cx="12" cy="9" r="2.4"/>
        }
        @case ('github') {
          <path d="M9 19c-4.3 1.4-4.3-2.5-6-3m12 5v-3.4c0-1 .1-1.4-.5-2 2.8-.3 5.5-1.4 5.5-6a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 0 0-6.2 0C6.7 2.8 5.6 3.1 5.6 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4.2 9.6c0 4.6 2.7 5.7 5.5 6-.6.6-.6 1.1-.5 2V21"/>
        }
        @case ('linkedin') {
          <rect x="2.5" y="9" width="4" height="12" rx="1"/>
          <circle cx="4.5" cy="4.3" r="2"/>
          <path d="M10 21v-9.5h4v1.7c.8-1.3 2-2 3.6-2 2.8 0 4.9 1.9 4.9 5.4V21h-4v-5.9c0-1.5-.7-2.4-2-2.4s-2.1 1-2.1 2.4V21z"/>
        }
        @case ('external-link') {
          <path d="M14 4h6v6"/>
          <line x1="20" y1="4" x2="11" y2="13"/>
          <path d="M19 14v5a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h5"/>
        }
        @case ('download') {
          <path d="M12 3v12"/>
          <polyline points="7,10 12,15 17,10"/>
          <path d="M4 16.5v2.7a1.8 1.8 0 0 0 1.8 1.8h12.4a1.8 1.8 0 0 0 1.8-1.8v-2.7"/>
        }
        @case ('menu') {
          <line x1="3" y1="6" x2="21" y2="6"/>
          <line x1="3" y1="12" x2="21" y2="12"/>
          <line x1="3" y1="18" x2="21" y2="18"/>
        }
        @case ('x') {
          <line x1="5" y1="5" x2="19" y2="19"/>
          <line x1="19" y1="5" x2="5" y2="19"/>
        }
        @case ('book-open') {
          <path d="M3 5.3c2.3-1 4.8-1.4 7.2-1.1.9.1 1.8.4 2.3.9v13c-.8-.5-1.8-.8-2.8-.9-2.2-.2-4.4.2-6.7 1.1V5.3z"/>
          <path d="M21 5.3c-2.3-1-4.8-1.4-7.2-1.1-.9.1-1.8.4-2.3.9v13c.8-.5 1.8-.8 2.8-.9 2.2-.2 4.4.2 6.7 1.1V5.3z"/>
        }
        @case ('code') {
          <polyline points="8,6 2,12 8,18"/>
          <polyline points="16,6 22,12 16,18"/>
        }
        @case ('briefcase') {
          <rect x="2.5" y="7" width="19" height="13.5" rx="2"/>
          <path d="M8 7V5.3a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2V7"/>
          <line x1="2.5" y1="13" x2="21.5" y2="13"/>
        }
        @case ('graduation-cap') {
          <path d="M2 8.5 12 3.5l10 5-10 5-10-5z"/>
          <path d="M6 10.7v5c0 1.7 2.7 3.1 6 3.1s6-1.4 6-3.1v-5"/>
          <line x1="22" y1="8.5" x2="22" y2="15"/>
        }
        @case ('building') {
          <rect x="4" y="2.5" width="16" height="19" rx="1"/>
          <rect x="7.2" y="6" width="2.2" height="2.2"/>
          <rect x="11" y="6" width="2.2" height="2.2"/>
          <rect x="14.8" y="6" width="2.2" height="2.2"/>
          <rect x="7.2" y="10.4" width="2.2" height="2.2"/>
          <rect x="11" y="10.4" width="2.2" height="2.2"/>
          <rect x="14.8" y="10.4" width="2.2" height="2.2"/>
          <path d="M10 21.5v-4.2a2 2 0 0 1 4 0v4.2"/>
        }
        @case ('award') {
          <circle cx="12" cy="8" r="6"/>
          <path d="M8.2 13.4 6.8 22l5.2-2.6 5.2 2.6-1.4-8.6"/>
        }
        @case ('medal') {
          <path d="M9 9 6 3h4l2 4 2-4h4l-3 6"/>
          <circle cx="12" cy="15" r="6"/>
        }
        @case ('star') {
          <path d="M12 2.5l3.1 6.9 7.4.7-5.6 5 1.6 7.3-6.5-3.9-6.5 3.9 1.6-7.3-5.6-5 7.4-.7z"/>
        }
        @case ('globe') {
          <circle cx="12" cy="12" r="9.5"/>
          <line x1="2.5" y1="12" x2="21.5" y2="12"/>
          <path d="M12 2.5c2.6 2.6 4 6 4 9.5s-1.4 6.9-4 9.5c-2.6-2.6-4-6-4-9.5s1.4-6.9 4-9.5z"/>
        }
        @case ('lightbulb') {
          <path d="M9.5 18.5h5"/>
          <path d="M10.2 21.5h3.6"/>
          <path d="M12 2.5a6.8 6.8 0 0 0-3.8 12.4c.6.4.9 1.1.9 1.9v.7h5.8v-.7c0-.8.3-1.5.9-1.9A6.8 6.8 0 0 0 12 2.5z"/>
        }
        @case ('file-text') {
          <path d="M13.5 2H6.8A1.8 1.8 0 0 0 5 3.8v16.4A1.8 1.8 0 0 0 6.8 22h10.4a1.8 1.8 0 0 0 1.8-1.8V7.5z"/>
          <polyline points="13.5,2 13.5,7.5 19,7.5"/>
          <line x1="8.3" y1="13" x2="15.7" y2="13"/>
          <line x1="8.3" y1="16.8" x2="15.7" y2="16.8"/>
        }
        @case ('message-circle') {
          <path d="M21 11.4a8.3 8.3 0 0 1-8.5 8.3 8.4 8.4 0 0 1-3.7-.9L3 21l2-5.6a8.3 8.3 0 0 1-.9-3.8A8.4 8.4 0 0 1 12.5 3a8.3 8.3 0 0 1 8.5 8.1z"/>
        }
        @case ('settings') {
          <circle cx="12" cy="12" r="3.2"/>
          <path d="M19.4 13.5a1.8 1.8 0 0 0 .4 2l.1.1a2.1 2.1 0 1 1-3 3l-.1-.1a1.8 1.8 0 0 0-2-.3 1.8 1.8 0 0 0-1 1.6v.2a2.1 2.1 0 1 1-4.2 0v-.1a1.8 1.8 0 0 0-1.1-1.6 1.8 1.8 0 0 0-2 .3l-.1.1a2.1 2.1 0 1 1-3-3l.1-.1a1.8 1.8 0 0 0 .3-2 1.8 1.8 0 0 0-1.6-1h-.2a2.1 2.1 0 1 1 0-4.2h.1A1.8 1.8 0 0 0 4.6 10.5a1.8 1.8 0 0 0-.3-2l-.1-.1a2.1 2.1 0 1 1 3-3l.1.1a1.8 1.8 0 0 0 2 .3h.1a1.8 1.8 0 0 0 1-1.6v-.2a2.1 2.1 0 1 1 4.2 0v.1a1.8 1.8 0 0 0 1 1.6h.1a1.8 1.8 0 0 0 2-.3l.1-.1a2.1 2.1 0 1 1 3 3l-.1.1a1.8 1.8 0 0 0-.3 2v.1a1.8 1.8 0 0 0 1.6 1h.2a2.1 2.1 0 1 1 0 4.2h-.1a1.8 1.8 0 0 0-1.6 1z"/>
        }
        @case ('cpu') {
          <rect x="6.5" y="6.5" width="11" height="11" rx="1.5"/>
          <rect x="10" y="10" width="4" height="4"/>
          <line x1="12" y1="1.5" x2="12" y2="4.5"/>
          <line x1="12" y1="19.5" x2="12" y2="22.5"/>
          <line x1="4.5" y1="12" x2="1.5" y2="12"/>
          <line x1="22.5" y1="12" x2="19.5" y2="12"/>
          <line x1="6.3" y1="6.3" x2="4.2" y2="4.2"/>
          <line x1="19.8" y1="19.8" x2="17.7" y2="17.7"/>
        }
        @case ('radio') {
          <circle cx="12" cy="12" r="2"/>
          <path d="M16.2 7.8a6 6 0 0 1 0 8.5"/>
          <path d="M7.8 16.3a6 6 0 0 1 0-8.5"/>
          <path d="M19.1 4.9a10 10 0 0 1 0 14.2"/>
          <path d="M4.9 19.1a10 10 0 0 1 0-14.2"/>
        }
        @case ('bot') {
          <rect x="4" y="8.5" width="16" height="11" rx="2"/>
          <circle cx="9.2" cy="13.5" r="1.1"/>
          <circle cx="14.8" cy="13.5" r="1.1"/>
          <line x1="12" y1="2.5" x2="12" y2="8.5"/>
          <circle cx="12" cy="2.5" r="1"/>
          <line x1="2" y1="13" x2="4" y2="13"/>
          <line x1="20" y1="13" x2="22" y2="13"/>
        }
        @case ('chevron-right') {
          <polyline points="9,6 15,12 9,18"/>
        }
        @case ('arrow-left') {
          <line x1="19" y1="12" x2="5" y2="12"/>
          <polyline points="12,19 5,12 12,5"/>
        }
        @case ('arrow-right') {
          <line x1="5" y1="12" x2="19" y2="12"/>
          <polyline points="12,5 19,12 12,19"/>
        }
        @case ('check') {
          <polyline points="20,6 9,17 4,12"/>
        }
        @case ('cloud') {
          <path d="M17.5 19a4.5 4.5 0 0 0 0-9 6 6 0 0 0-11.4-1.6A4 4 0 0 0 6.5 19h11z"/>
        }
        @case ('monitor') {
          <rect x="2.5" y="3.5" width="19" height="13.5" rx="2"/>
          <line x1="8" y1="21" x2="16" y2="21"/>
          <line x1="12" y1="17" x2="12" y2="21"/>
        }
        @case ('users') {
          <circle cx="9" cy="8" r="3.4"/>
          <path d="M2.5 20v-1.5a4.5 4.5 0 0 1 4.5-4.5h4a4.5 4.5 0 0 1 4.5 4.5V20"/>
          <circle cx="17.5" cy="8.5" r="2.6"/>
          <path d="M16.2 13.6a4.4 4.4 0 0 1 5.3 4.3V20"/>
        }
        @case ('trophy') {
          <path d="M8 21h8"/>
          <path d="M12 17.5V21"/>
          <path d="M7 4.5h10v4.5a5 5 0 0 1-10 0z"/>
          <path d="M7 5.5H4.3a2 2 0 0 0 0 4H6"/>
          <path d="M17 5.5h2.7a2 2 0 0 1 0 4H18"/>
        }
      }
    </svg>
  `,
  styles: [`
    :host { display: inline-flex; flex-shrink: 0; line-height: 0; }
    .app-icon { display: block; }
  `],
})
export class Icon {
  @Input() name: IconName = 'circle' as IconName;
  @Input() size = 18;
  @Input() color = 'currentColor';
}
