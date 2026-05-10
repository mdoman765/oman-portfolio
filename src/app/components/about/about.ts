import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-about',
  imports: [RouterLink],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About {
  education = [
    {
      degree: 'B.Sc. Computer Science & Engineering',
      institution: 'Chittagong University of Engineering & Technology (CUET)',
      period: 'Feb 2020 – July 2025',
      focus: 'Software Engineering, Wireless Sensing & NLP',
      gpa: '3.35 / 4.00'
    },
    {
      degree: 'Higher Secondary Certificate – Science',
      institution: 'Bakalia Govt. College, Chittagong',
      period: '2017 – 2019',
      focus: 'Science',
      gpa: '5.00 / 5.00'
    },
    {
      degree: 'Secondary School Certificate',
      institution: 'Padua A C M High School, Chittagong',
      period: '2015 – 2017',
      focus: 'Science',
      gpa: '5.00 / 5.00'
    }
  ];

  interests = [
    { icon: '📡', title: 'Wireless Sensing', desc: 'Wi-Fi CSI-based health monitoring, heart rate and breathing rate detection via passive RF signals.' },
    { icon: '💬', title: 'Natural Language Processing', desc: 'Multimodal transformers, meme detection, multilingual text classification and sentiment analysis.' },
    { icon: '⚙️', title: 'Industrial Automation', desc: 'PLC communication, IoT integration, real-time factory monitoring systems at enterprise scale.' },
    { icon: '🤖', title: 'AI Agent Development', desc: 'LLM-powered agents, n8n workflow automation, WhatsApp Business API integration for enterprise workflows.' },
  ];
}
