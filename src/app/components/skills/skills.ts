import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  imports: [],
  templateUrl: './skills.html',
  styleUrl: './skills.css',
})
export class Skills {
  categories = [
    {
      name: 'Programming Languages',
      icon: '💻',
      skills: [
        { name: 'C#',         level: 92 },
        { name: 'C / C++',    level: 88 },
        { name: 'JavaScript', level: 85 },
        { name: 'Python',     level: 82 },
        { name: 'Linux/Bash', level: 70 },
      ]
    },
    {
      name: 'Frameworks & Web',
      icon: '🌐',
      skills: [
        { name: 'ASP.NET Core / Web API', level: 93 },
        { name: 'Angular',                level: 85 },
        { name: 'Entity Framework Core',  level: 88 },
        { name: 'MVC Pattern',            level: 90 },
        { name: 'Bootstrap / jQuery',     level: 80 },
      ]
    },
    {
      name: 'AI & Automation',
      icon: '🤖',
      skills: [
        { name: 'LLM Integration',        level: 88 },
        { name: 'AI Agent Development',   level: 85 },
        { name: 'n8n Workflow Automation',level: 80 },
        { name: 'NLP / Transformers',     level: 75 },
        { name: 'Signal Processing',      level: 72 },
      ]
    },
    {
      name: 'Databases & DevOps',
      icon: '☁️',
      skills: [
        { name: 'MSSQL / T-SQL',  level: 88 },
        { name: 'MongoDB',        level: 78 },
        { name: 'Docker',         level: 75 },
        { name: 'IIS Deployment', level: 82 },
        { name: 'Git / GitHub',   level: 90 },
      ]
    }
  ];

  tools = [
    'N-Tier Architecture', 'Repository-Service Pattern', 'SOLID Principles',
    'REST API Design', 'PLC Communication', 'IoT Integration',
    '360dialog WhatsApp API', 'TensorFlow', 'Hugging Face',
    'MERN Stack', 'TailwindCSS', 'Agile / Scrum',
    'Jupyter Notebook', 'VS Code', 'Visual Studio', 'Postman'
  ];
}
