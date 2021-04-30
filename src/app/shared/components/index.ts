// Import components.
import { TitleH1Component } from './title/title-h1/title-h1.component';
import { CardUserComponent } from './card/card-user/card-user.component';
import { CarouselComponent } from './carousel/carousel.component';

export const components: any[] = [
    CardUserComponent,
    CarouselComponent,
    TitleH1Component
];

// Export all components.
export * from './card/card-user/card-user.component';
export * from './carousel/carousel.component'
export * from './title/title-h1/title-h1.component';