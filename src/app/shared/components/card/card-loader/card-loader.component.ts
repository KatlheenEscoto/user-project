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
  public totalBars: { width: string }[] = [];
  public finalStyleImage = {};
  public finalHeightBar = '0';

  constructor() { }

  ngOnInit(): void {

    // Calculate total bars.
    for (let i = 0; i <= this.bars; i++) {
      // Anchura dinamica.
      const width = Math.floor(Math.random() * (100 - 60)) + 60;
      this.totalBars.push( { width: `${width}%` } );
    }

    // Img style.
    this.finalStyleImage = {
      width: `${this.imageSize}px`,
      height: `${this.imageSize}px`
    };

    // Bar style.
    this.finalHeightBar = `${this.barHeight}px`;

  }

}
