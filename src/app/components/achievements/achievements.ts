import { Component } from '@angular/core';
import { Icon, IconName } from '../../shared/icon/icon';

@Component({
  selector: 'app-achievements',
  imports: [Icon],
  templateUrl: './achievements.html',
  styleUrl: './achievements.css',
})
export class Achievements {
  achievements: { icon: IconName; label: string; value: string }[] = [
    { icon: 'trophy',          label: 'CU IT Fiesta IUPC Divisional Onsite', value: 'Rank 24th' },
    { icon: 'medal',           label: 'CU IT Fiesta IUPC Preliminary Online', value: 'Rank 22nd' },
    { icon: 'star',            label: 'Samsung R&D Bangladesh Code Contest 2024', value: 'Qualified Round 2' },
    { icon: 'globe',           label: 'ICPC Dhaka Regional Preliminary 2024', value: 'Participated' },
    { icon: 'file-text',       label: 'Mujib Shotoborsho Divisional Contest CUET', value: 'Onsite' },
    { icon: 'lightbulb',       label: 'CUET Intra University Junior Contest', value: 'Online' },
  ];

  judges = [
    { name: 'Codeforces', count: '450+' },
    { name: 'Vjudge',     count: '95+' },
    { name: 'Beecrowd',   count: '60+' },
    { name: 'LeetCode',   count: '85+' },
  ];
}
