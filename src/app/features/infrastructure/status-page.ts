import { Component } from '@angular/core';
import { IonContent, IonHeader, IonToolbar, IonTitle } from '@ionic/angular';
import { BrandLogo } from '../../shared/design/brand-logo';
import { ThemeToggle } from '../../shared/design/theme-toggle';
import { ApiStatus } from '../../shared/design/api-status';

@Component({
  imports: [IonContent, IonHeader, IonToolbar, IonTitle, BrandLogo, ThemeToggle, ApiStatus],
  template: `<ion-header
      ><ion-toolbar><ion-title>FCMatch · AdminWeb</ion-title></ion-toolbar></ion-header
    >
    <ion-content
      ><main class="page-shell">
        <fc-brand-logo />
        <h1>Base técnica de AdminWeb</h1>
        <p class="muted">Fase 0 · Estructura técnica del panel del propietario.</p>
        <fc-theme-toggle /><fc-api-status /></main
    ></ion-content>`,
})
export class StatusPage {}
