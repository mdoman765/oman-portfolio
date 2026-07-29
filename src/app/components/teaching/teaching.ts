import { Component } from '@angular/core';

@Component({
  selector: 'app-teaching',
  imports: [],
  templateUrl: './teaching.html',
  styleUrl: './teaching.css',
})
export class Teaching {
  activities = [
    {
      title: 'Peer Mentoring, CUET Computer Club',
      period: '2022 – 2025',
      desc: 'Mentored junior undergraduates on data structures, algorithms, and competitive programming fundamentals ahead of departmental contests.'
    },
    {
      title: 'Workshop Facilitation, Chittagong Student Forum',
      period: '2023 – 2024',
      desc: 'Ran informal sessions on introductory C/C++ and problem-solving techniques for incoming CSE students.'
    },
    {
      title: 'Open-Source Onboarding',
      period: 'Ongoing',
      desc: 'Helps newcomers get started with contributing to open-source repositories through code reviews and walkthroughs.'
    }
  ];
}
