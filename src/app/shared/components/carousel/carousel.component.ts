import { Component, Input, OnInit } from '@angular/core';
import { ICarouselItem } from './icarousel-item.metadata';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {

  /**
   * Custom properties.
   */
  @Input() height = 500;
  @Input() isFullScreen = false;
  @Input() items:ICarouselItem[] = [];

  /**
   * Final properties.
   */
  public finalHeight: string | number = 0;
  public currentPosition = 0;

  constructor() { 
    this.finalHeight = this.isFullScreen ? '100vh' : `${this.height}px`;
  }

  ngOnInit(): void {

    this.items.map( (i, index) => {
      i.id = index;
      i.marginLeft = 0;
    });

  }

  setCurrentPosition(position: number) {
    this.currentPosition = position;
    this.items.find( i => i.id === 0 ).marginLeft = -100 * position;
  }

  setNext() {
    let finalPercentage = 0; // Porcentaje, es el en que estamos.
    let nextPosition = this.currentPosition + 1; // Suma 1 posición.
    if ( nextPosition <= this.items.length - 1 ) { // Si la siguiente posicion es menor que la del final.
      finalPercentage = -100 * nextPosition;
    } else {
      nextPosition = 0; 
    }
    this.items.find( i => i.id === 0 ).marginLeft = finalPercentage;
    this.currentPosition = nextPosition;
    console.log(`Siguiente ${this.currentPosition}`);
  }

  setPrevious() {
    let finalPercentage = 0;
    let previousPosition = this.currentPosition - 1;
    if ( previousPosition >= 0 ) { // Si la posicion anterior no es la del inicio.
      finalPercentage = -100 * previousPosition;
    } else {
      previousPosition = this.items.length - 1;
      finalPercentage = -100 * previousPosition;
    }
    this.items.find( i => i.id === 0 ).marginLeft = finalPercentage;
    this.currentPosition = previousPosition;
    console.log(`Anterior ${this.currentPosition}`);
  }

}
