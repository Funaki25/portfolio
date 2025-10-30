import { Component, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';


interface NavLink{
  name: string;
  href: string;
}

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
})

export class Header {
  protected readonly mobileMenuOpen = signal(false);
  protected readonly activeLink = signal('/');

  protected readonly links = signal<NavLink[]>([
    { name: 'Accueil', href: '/' },
    { name: 'Projets', href: '/projects' },
    { name: 'À propos', href: '/about' },
    { name: 'Compétences', href: '/skills' },
    { name: 'Contact', href: '/contact' }
  ]);

  protected toggleMobileMenu(): void {
    this.mobileMenuOpen.update(open => !open);
  }

  protected closeMobileMenu(): void {
    this.mobileMenuOpen.set(false);
  }

  protected setActiveLink(href: string): void {
    this.activeLink.set(href);
  }
}
