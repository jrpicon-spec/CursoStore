import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router'; // 🔥 FALTABA ESTO

import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonButtons,
  IonButton,
  IonIcon,
  IonGrid,
  IonRow,
  IonCol,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonList,
  IonItem,
  IonLabel,
  IonFooter,
} from '@ionic/angular/standalone';

import { addIcons } from 'ionicons';
import {
  laptopOutline,
  cloudOutline,
  peopleOutline,
  chatbubblesOutline,
  constructOutline,
  thumbsUpOutline,
  searchOutline,
} from 'ionicons/icons';

@Component({
  selector: 'app-inicio',
  standalone: true,
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
  imports: [
    CommonModule,
    FormsModule,
    RouterLink, // 🔥 CLAVE PARA routerLink

    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    IonButtons,
    IonButton,
    IonIcon,
    IonGrid,
    IonRow,
    IonCol,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardContent,
    IonList,
    IonItem,
    IonLabel,
    IonFooter,
  ],
})
export class InicioPage implements OnInit {
  constructor() {
    addIcons({
      searchOutline,
      laptopOutline,
      cloudOutline,
      peopleOutline,
      chatbubblesOutline,
      constructOutline,
      thumbsUpOutline,
    });
  }

  ngOnInit() {}
}
