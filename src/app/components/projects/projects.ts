import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  imports: [],
  templateUrl: './projects.html',
  styleUrl: './projects.css',
})
export class Projects {
  projects = [
    {
      type: 'Submitted to NSySS BUET 2025',
      title: 'Heart & Breathing Rate via Wi-Fi CSI',
      desc: 'Undergraduate thesis measuring heart and breathing rate using Wi-Fi Channel State Information — a passive, contactless sensing approach. Supervised by Mir. Md. Saki Kowsar, Dept. of CSE, CUET. Submitted to NSySS, BUET 2025.',
      tech: ['Wireless Sensing','Signal Processing', 'ML','DL', 'Wi-Fi CSI','DCT'],
      highlights: ['Contactless health monitoring', 'Submitted to NSySS BUET 2025', 'Supervised thesis'],
      github: '#',
      paper: '#'
    },
    {
      type: 'Published at ACL Anthology',
      title: 'CUET_Ignite@LT-EDI-2025: Misogynistic Meme Detection',
      desc: 'Co-authored published paper — a multimodal transformer-based approach for detecting misogynistic memes in Chinese social media. Achieved 2nd place in the LDK 2025 Misogyny Meme Detection Shared Task.',
      tech: ['Transformers', 'Multimodal Learning', 'PyTorch', 'NLP', 'Python'],
      highlights: ['2nd place — LDK 2025 Shared Task', 'Multimodal transformer'],
      github: 'https://aclanthology.org/2025.ltedi-1.28/',
      paper: 'https://aclanthology.org/2025.ltedi-1.28/'
    } 
  ];
}
