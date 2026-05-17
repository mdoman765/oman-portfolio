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
        { name: 'C / C++',         level: 95 },
        { name: 'C#',    level: 80 },
        { name: 'JavaScript', level: 65 },
        { name: 'Python',     level: 60 },
        { name: 'TypeScript', level: 60 },
       
      ]
    },
    {
      name: 'Frameworks & Web',
      icon: '🌐',
      skills: [
        { name: 'ASP.NET Core / Web API', level: 85 },
         { name: 'MVC Pattern,N-tier Architecture',            level: 85},
        { name: 'Angular',                level: 60 },
        { name: 'Ajax',     level: 70 },
      ]
    },
    {
      name: 'AI & Automation',
      icon: '🤖',
      skills: [
        { name: 'LLM Integration',        level: 95 },
        { name: 'AI Agent Development',   level: 95 },
        { name: 'n8n Workflow Automation',level: 95 },
        { name: 'NLP / Transformers',     level: 75 },
        { name: 'Signal Processing',      level: 75 },
      ]
    },
    {
      name: 'Databases & DevOps',
      icon: '☁️',
      skills: [
        { name: 'MSSQL ',  level: 95 },
          { name: 'Git / GitHub,Ci/CD',   level: 95 },
        { name: 'IIS Deployment', level: 95 },
        { name: 'MongoDB',        level: 70 },
        { name: 'Docker',         level: 65 },
    
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
