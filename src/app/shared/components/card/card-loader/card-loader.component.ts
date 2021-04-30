import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-loader',
  templateUrl: './card-loader.component.html',
  styleUrls: ['./card-loader.component.scss']
})
export class CardLoaderComponent implements OnInit {

  // Input styles.
  @Input() imageSize = 75;
  @Input() barHeight = 15;
  @Input() bars = 1;

  // Final properties. 
  public totalBars = [];
  public finalStyleImage = {};
  public finalStyleBar = {};

  constructor() { }

  ngOnInit(): void {

    // Calculate total bars.
    for (let i = 0; i <= this.bars; i++) {
      this.totalBars.push(i);
    }

    // Img style.
    this.finalStyleImage = {
      width: `${this.imageSize}px`,
      height: `${this.imageSize}px`
    };

    // Bar style.
    this.finalStyleBar = {
      height: `${this.barHeight}px`
    };

  }

}
