// Import components.
import { TitleH1Component } from './title/title-h1/title-h1.component';
import { CardUserComponent } from './card/card-user/card-user.component';
import { CarouselComponent } from './carousel/carousel.component';
// Loaders.
import { CardLoaderComponent } from './card/card-loader/card-loader.component';

export const components: any[] = [
    CardUserComponent,
    CarouselComponent,
    TitleH1Component,
    // Loaders.
    CardLoaderComponent
];

// Export all components.
export * from './card/card-user/card-user.component';
export * from './carousel/carousel.component'
export * from './title/title-h1/title-h1.component';
// Loaders.
export * from './card/card-loader/card-loader.component';