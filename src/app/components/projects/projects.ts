import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  imports: [],
  templateUrl: './projects.html',
  styleUrl: './projects.css',
})
export class Projects {
  researchAreas = [
    'Wi-Fi Channel State Information based passive health sensing (heart rate, breathing rate)',
    'Multimodal NLP and transformer-based misogynistic/meme content detection',
    'LLM-powered automation and AI agent development for enterprise workflows',
    'Bangla and multilingual language processing'
  ];

  // Publications -> i. Journal
  journals: {
    title: string; venue: string; desc: string;
    tech: string[]; highlights: string[]; github: string; paper: string;
  }[] = [];

  // Publications -> ii. Conference
  conferences = [
    {
      title: 'CUET_Ignite@LT-EDI-2025: Misogynistic Meme Detection',
      venue: 'LT-EDI, published at ACL Anthology, 2025',
      desc: 'Co-authored published paper — a multimodal transformer-based approach for detecting misogynistic memes in Chinese social media. Achieved 2nd place in the LDK 2025 Misogyny Meme Detection Shared Task.',
      tech: ['Transformers', 'Multimodal Learning', 'PyTorch', 'NLP', 'Python'],
      highlights: ['2nd place — LDK 2025 Shared Task', 'Multimodal transformer'],
      github: 'https://aclanthology.org/2025.ltedi-1.28/',
      paper: 'https://aclanthology.org/2025.ltedi-1.28/'
    }
  ];

  // Work in Progress -> submitted / under review
  workInProgress = [
    {
      title: 'Heart & Breathing Rate via Wi-Fi CSI',
      venue: 'NSySS, BUET 2025',
      status: 'Submitted',
      desc: 'Undergraduate thesis measuring heart and breathing rate using Wi-Fi Channel State Information — a passive, contactless sensing approach. Supervised by Mir. Md. Saki Kowsar, Dept. of CSE, CUET.',
    },
    {
      title: 'Detecting Bangla Deceptive Selling Posts in Social Media',
      venue: 'ICCA (International Conference on Computing, Applications and Systems), AIUB',
      status: 'Under Review',
      desc: 'Identifying deceptive and fraudulent selling posts written in Bangla on social media platforms.',
    },
    {
      title: 'Impact of Transmitter–Receiver and Subject Configuration on Wi-Fi CSI-Based Contactless Vital Sign Monitoring',
      venue: 'COMPASS, University of Dhaka (DU)',
      status: 'Under Review',
      desc: 'Studies how transmitter–receiver placement and subject positioning affect the accuracy of Wi-Fi CSI-based contactless vital sign monitoring.',
    },
    {
      title: 'Bangla Question Generation with Relevancy and Grammatical Correctness Using Transformer Models',
      venue: 'ICCA (International Conference on Computing, Applications and Systems)',
      status: 'Under Review',
      desc: 'A transformer-based approach for generating relevant and grammatically correct questions in Bangla.',
    }
  ];
}
