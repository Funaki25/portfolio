import { Component, OnDestroy, NgZone , signal, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-no-found-page',
  imports: [],
  templateUrl: './no-found-page.html',
  styleUrl: './no-found-page.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NoFoundPageComponent implements OnDestroy {
  private readonly targetDate = new Date('2025-11-01T00:00:00+02:00').getTime();
  protected days = signal(0);
  protected hours = signal(0);
  protected minutes = signal(0);
  protected seconds = signal(0);
  protected timeRemaining = signal(0);
  private timer: any; // Stocke la ref du setInterval
  constructor(private ngZone: NgZone) {
    this.updateCountdown();
    // Lance moi le timer en dehors d'Angular
    this.ngZone.runOutsideAngular(() => {
      this.timer = setInterval(() => {
        this.ngZone.run(() => {
          this.updateCountdown();
        });
      }, 1000);
    });
  }
  private updateCountdown(): void {
    const now = Date.now();
    const remaining = this.targetDate - now;
    if (remaining > 0) {
      this.timeRemaining.set(remaining);
      this.days.set(Math.floor(remaining / (1000 * 60 * 60 * 24)));
      this.hours.set(Math.floor((remaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
      this.minutes.set(Math.floor((remaining % (1000 * 60 * 60)) / (1000 * 60)));
      this.seconds.set(Math.floor((remaining % (1000 * 60)) / 1000));
    } else {
      this.timeRemaining.set(0);
      this.days.set(0);
      this.hours.set(0);
      this.minutes.set(0);
      this.seconds.set(0);
      if (this.timer) {
        clearInterval(this.timer);
      }
    }
  }
  ngOnDestroy(): void {
    if (this.timer) {
      clearInterval(this.timer);
    }
  }
}
