import { Component, ElementRef, ViewChild, AfterViewInit, OnDestroy, PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home implements AfterViewInit, OnDestroy {
  @ViewChild('constellation') canvasRef!: ElementRef<HTMLCanvasElement>;
  private animId = 0;
  private isBrowser: boolean;

  researchAreas = [
    'NLP & Transformers', 'Wireless Sensing',
    'LLM Integration', 'ASP.NET Core',
    'IoT & Automation', 'Bangla Language AI'
  ];

  constructor(@Inject(PLATFORM_ID) platformId: Object) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  ngAfterViewInit() {
    if (this.isBrowser) {
      this.initConstellation();
    }
  }

  ngOnDestroy() {
    if (this.isBrowser && this.animId) {
      cancelAnimationFrame(this.animId);
    }
  }

  private initConstellation() {
    const canvas = this.canvasRef?.nativeElement;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const NUM = 70, DIST = 130;
    let W: number, H: number, pts: any[];

    const resize = () => {
      W = canvas.width  = canvas.parentElement!.offsetWidth;
      H = canvas.height = canvas.parentElement!.offsetHeight;
      init();
    };
    const init = () => {
      pts = Array.from({ length: NUM }, () => ({
        x: Math.random() * W, y: Math.random() * H,
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35,
        r: Math.random() * 1.5 + 0.5
      }));
    };
    const draw = () => {
      ctx.clearRect(0, 0, W, H);
      for (let i = 0; i < pts.length; i++) {
        const p = pts[i];
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0 || p.x > W) p.vx *= -1;
        if (p.y < 0 || p.y > H) p.vy *= -1;
        ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(200,151,58,0.55)'; ctx.fill();
        for (let j = i + 1; j < pts.length; j++) {
          const q = pts[j];
          const dx = p.x - q.x, dy = p.y - q.y;
          const d = Math.sqrt(dx*dx + dy*dy);
          if (d < DIST) {
            ctx.beginPath(); ctx.moveTo(p.x, p.y); ctx.lineTo(q.x, q.y);
            ctx.strokeStyle = `rgba(200,151,58,${0.12*(1-d/DIST)})`;
            ctx.lineWidth = 0.6; ctx.stroke();
          }
        }
      }
      this.animId = requestAnimationFrame(draw);
    };

    resize();
    window.addEventListener('resize', resize);
    draw();
  }
}