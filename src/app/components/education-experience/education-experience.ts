import { Component } from '@angular/core';
import { Experience } from '../experience/experience';

@Component({
  selector: 'app-education-experience',
  imports: [Experience],
  templateUrl: './education-experience.html',
  styleUrl: './education-experience.css',
})
export class EducationExperience {
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
}
