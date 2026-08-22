import { Component } from '@angular/core';
import { NgTemplateOutlet } from '@angular/common';

export interface PubAuthor {
  name: string;
  self?: boolean;
}

export interface Publication {
  title: string;
  authors: PubAuthor[];
  venueShort: string;      // compact venue label, e.g. "LT-EDI @ LDK 2025 · ACL Anthology"
  year: number;
  status: 'Published' | 'Accepted' | 'Under Review';
  pages?: string;
  publisher?: string;
  abstract: string;        // full abstract text
  keywords: string[];
  stats?: { label: string; sub: string }[];   // compact achievement chips, e.g. { label: '2nd Place', sub: 'LDK 2025 Shared Task' }
  paperUrl?: string;       // landing / "View Paper" page
  pdfUrl?: string;         // direct PDF
  doiUrl?: string;
  publisherUrl?: string;   // IEEE / publisher page
}

@Component({
  selector: 'app-projects',
  imports: [NgTemplateOutlet],
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
  journals: Publication[] = [];

  // Publications -> ii. Conference
  conferences: Publication[] = [
    {
      title: 'CUET_Ignite@LT-EDI-2025: A Multimodal Transformer-Based Approach for Detecting Misogynistic Memes in Chinese Social Media',
      authors: [
        { name: 'MD. Mahadi Rahman' },
        { name: 'Mohammad Minhaj Uddin' },
        { name: 'Mohammad Oman', self: true },
        { name: 'Mohammad Shamsul Arefin' },
      ],
      venueShort: 'LT-EDI @ LDK 2025 · ACL Anthology',
      year: 2025,
      status: 'Published',
      pages: '172–177',
      publisher: 'Unior Press, Naples, Italy',
      abstract: 'Misogynistic content in memes on social media platforms poses a significant challenge for content moderation, particularly in languages like Chinese, where cultural nuances and multimodal elements complicate detection. Addressing this issue is critical for creating safer online environments. A shared task on multimodal misogyny identification in Chinese memes, organized by LT-EDI@LDK 2025, provided a curated dataset for this purpose. Since memes mix pictures and words, we used two tools: ResNet-50 to understand the images and Chinese RoBERTa to make sense of the text. The dataset consisted of Chinese social media memes annotated with binary labels (Misogynistic and Non-Misogynistic), capturing explicit misogyny, implicit biases, and stereotypes. Our experiments demonstrated that ResNet-50 combined with Chinese RoBERTa achieved a macro F1 score of 0.91, placing second in the competition and underscoring its effectiveness in handling the complex interplay of text and visuals in Chinese memes. This research advances multimodal misogyny detection and contributes to natural language and vision processing for low-resource languages, particularly in combating gender-based abuse online.',
      keywords: ['Multimodal Learning', 'Transformers', 'NLP', 'Computer Vision', 'PyTorch', 'Python'],
      stats: [
        { label: '2nd Place', sub: 'LDK 2025 Shared Task' },
        
      ],
      paperUrl: 'https://aclanthology.org/2025.ltedi-1.28/',
      pdfUrl: 'https://aclanthology.org/2025.ltedi-1.28.pdf',
    }
  ];

  // Work in Progress -> submitted / under review
  workInProgress = [
  
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