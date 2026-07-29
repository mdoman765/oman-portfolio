import { Component } from '@angular/core';

@Component({
  selector: 'app-achievements',
  imports: [],
  templateUrl: './achievements.html',
  styleUrl: './achievements.css',
})
export class Achievements {
  achievements = [
    { icon: '🏆', label: 'CU IT Fiesta IUPC Divisional Onsite', value: 'Rank 24th' },
    { icon: '🥈', label: 'CU IT Fiesta IUPC Preliminary Online', value: 'Rank 22nd' },
    { icon: '⭐', label: 'Samsung R&D Bangladesh Code Contest 2024', value: 'Qualified Round 2' },
    { icon: '🌐', label: 'ICPC Dhaka Regional Preliminary 2024', value: 'Participated' },
    { icon: '📝', label: 'Mujib Shotoborsho Divisional Contest CUET', value: 'Onsite' },
    { icon: '💡', label: 'CUET Intra University Junior Contest', value: 'Online' },
  ];

  judges = [
    { name: 'Codeforces', count: '450+' },
    { name: 'Vjudge',     count: '95+' },
    { name: 'Beecrowd',   count: '60+' },
    { name: 'LeetCode',   count: '85+' },
  ];
}
