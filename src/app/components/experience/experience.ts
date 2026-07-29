import { Component } from '@angular/core';

@Component({
  selector: 'app-experience',
  imports: [],
  templateUrl: './experience.html',
  styleUrl: './experience.css',
})
export class Experience {
  jobs = [
    {
      company: 'PRAN-RFL Group',
      role: 'Junior Software Developer',
      period: 'Nov 2025 – Present',
      location: 'Dhaka, Bangladesh',
      type: 'Full-time',
      bullets: [
        'Architected factory automation systems monitoring industrial machines and tracking product WIP in real time via PLC communication and IP-based IoT data listeners across all Bangladesh factories.',
        'Engineered a production-grade WhatsApp AI Agent for PRAN-RFL Saudi Arabia — integrated with SPRO CRM API and 360dialog Business API, automating product browsing and order placement for concurrent enterprise users via LLM.'
      ],
      tech: ['ASP.NET Core 8', 'MSSQL', 'PLC', 'LLM', '360dialog API', 'IIS', 'Docker']
    },
    {
      company: 'Ultimate IT Solution BD',
      role: 'Industrial Attachment',
      period: 'Dec 2024 – Jan 2025',
      location: 'Chittagong, Bangladesh',
      type: '15-day Attachment',
      bullets: [
        'Built an AI-powered web suite on ASP.NET MVC integrating Text-to-Image (Hugging Face), Text-to-Voice synthesis, AI Canvas, and a context-aware multi-turn Chatbot via OpenAI API.',
        'Developed an AI chatbot and voice-to-text converter using NLP techniques, deployed on an ASP.NET web platform.'
      ],
      tech: ['ASP.NET MVC', 'OpenAI API', 'Hugging Face', 'NLP', 'JavaScript']
    }
  ];
}
