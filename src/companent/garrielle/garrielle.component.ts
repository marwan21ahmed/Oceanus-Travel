import { Component, OnInit } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CarouselModule } from 'primeng/carousel';
import { TagModule } from 'primeng/tag';
import { Product } from '../../Interface/product';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { GalleriaModule } from 'primeng/galleria';
@Component({
  selector: 'app-garrielle',
  standalone: true,
  imports: [CarouselModule, ButtonModule, TagModule,NgbCarouselModule,GalleriaModule],
  templateUrl: './garrielle.component.html',
  styleUrl: './garrielle.component.css'
})
export class GarrielleComponent  {
  
  images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);
  
     
}
