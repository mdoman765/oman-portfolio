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
      type: 'Research',
      title: 'Heart & Breathing Rate via Wi-Fi CSI',
      desc: 'Undergraduate thesis measuring heart and breathing rate using Wi-Fi Channel State Information — a passive, contactless sensing approach. Supervised by Mir. Md. Saki Kowsar, Dept. of CSE, CUET. Submitted to NSySS, BUET 2025.',
      tech: ['Signal Processing', 'Python', 'Wi-Fi CSI', 'Wireless Sensing', 'MATLAB'],
      highlights: ['Contactless health monitoring', 'Submitted to NSySS BUET 2025', 'Supervised thesis'],
      github: '#',
      paper: '#'
    },
    {
      type: 'Research',
      title: 'CUET_Ignite@LT-EDI-2025: Misogynistic Meme Detection',
      desc: 'Co-authored published paper — a multimodal transformer-based approach for detecting misogynistic memes in Chinese social media. Achieved 2nd place in the LDK 2025 Misogyny Meme Detection Shared Task.',
      tech: ['Transformers', 'Multimodal Learning', 'PyTorch', 'NLP', 'Python'],
      highlights: ['2nd place — LDK 2025 Shared Task', 'Published at ACL Anthology', 'Multimodal transformer'],
      github: 'https://aclanthology.org/2025.ltedi-1.28/',
      paper: 'https://aclanthology.org/2025.ltedi-1.28/'
    },
    {
      type: 'Engineering',
      title: 'WhatsApp AI Agent — PRAN-RFL Saudi Arabia',
      desc: 'Production-grade WhatsApp AI Agent integrated with SPRO CRM API and 360dialog Business API. Automates product browsing and order placement for concurrent enterprise users via LLM, serving the Saudi Arabia market.',
      tech: ['ASP.NET Core 8', 'LLM Integration', '360dialog API', 'SPRO CRM', 'SQL Server'],
      highlights: ['Production at PRAN-RFL', 'Enterprise-scale concurrent users', 'Sub-80ms webhook response'],
      github: '#',
      paper: null
    },
    {
      type: 'Engineering',
      title: 'Factory Automation & WIP Tracking System',
      desc: 'Architected a real-time factory monitoring system at PRAN-RFL Group, tracking product work-in-progress across all Bangladesh factories via PLC communication and IP-based IoT data listeners.',
      tech: ['ASP.NET Core', 'PLC Communication', 'IoT', 'MSSQL', 'IIS'],
      highlights: ['All Bangladesh factories', 'Real-time WIP tracking', 'PLC + IoT integration'],
      github: '#',
      paper: null
    },
    {
      type: 'Engineering',
      title: 'Employee Management System — Full Stack',
      desc: 'Full-stack EMS with a responsive Angular dashboard (JWT auth, role-based access control) backed by a scalable ASP.NET Core Web API using N-Tier architecture, Repository-Service pattern, and Entity Framework Core.',
      tech: ['Angular', 'ASP.NET Core', 'Entity Framework Core', 'SQL Server', 'JWT'],
      highlights: ['N-Tier architecture', 'Role-based access control', 'REST API'],
      github: '#',
      paper: null
    },
    {
      type: 'Engineering',
      title: 'CUET Book Sharing Platform — MERN Stack',
      desc: 'Full-stack MERN platform for campus-wide book sharing at CUET. Deployed live with TailwindCSS responsive UI. Every student can share and discover books on the platform.',
      tech: ['MongoDB', 'Express', 'React', 'Node.js', 'TailwindCSS'],
      highlights: ['Live at Vercel', 'Campus-wide deployment', 'Responsive UI'],
      github: '#',
      paper: null
    },
    {
      type: 'Engineering',
      title: 'AI-Powered Web Suite — Ultimate IT Solution',
      desc: 'AI-powered web application on ASP.NET MVC integrating Text-to-Image (Hugging Face), Text-to-Voice synthesis, AI Canvas, and a context-aware multi-turn chatbot via OpenAI API. Built during industrial attachment.',
      tech: ['ASP.NET MVC', 'OpenAI API', 'Hugging Face', 'JavaScript', 'Bootstrap'],
      highlights: ['Text-to-Image generation', 'Multi-turn chatbot', 'Voice synthesis'],
      github: '#',
      paper: null
    },
    {
      type: 'Engineering',
      title: 'Audio Classification System',
      desc: 'Built and trained a neural network model on a 10-class audio dataset from Kaggle, achieving high accuracy in classifying audio signals using TensorFlow.',
      tech: ['TensorFlow', 'Python', 'Keras', 'Neural Network', 'Kaggle'],
      highlights: ['10-class classification', 'High accuracy', 'Deep learning'],
      github: '#',
      paper: null
    }
  ];
}
