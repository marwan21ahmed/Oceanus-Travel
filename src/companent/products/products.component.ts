import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { Product } from '../../Interface/product';
import { RatingModule } from 'primeng/rating';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CardModule,ButtonModule,RatingModule,FormsModule,],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
  
products:Product[]=[
  {
    id:1,
    name:"ballon",
    category:"ballons",
    description:"Hot Air Balloon Ride in Luxor Egypt",
    image:"https://egyptexplorers.net/wp-content/uploads/2023/06/Hot-Air-Ballooning-Luxor-25.jpg",
    price:65,
    rating:3,
    inventoryStatus:"",
    quantity:5
  },
  {
    id:2,
    name:"Templates",
    category:"Templates",
    description:"Aswan & Abu Simbel From Luxor Short Break",
    image:"https://egyptexplorers.net/wp-content/uploads/2020/11/luxor-the-ancient-city-egypt-tours-portal-820x520.jpg",
    price:80,
    rating:5,
    inventoryStatus:"",
    quantity:10
  },
  {
    id:3,
    name:"safary",
    category:"safary",
    description:"Transfers from Aswan to Luxor",
    image:"https://egyptexplorers.net/wp-content/uploads/2023/07/52.jpg",
    price:40,
    rating:3,
    inventoryStatus:"",
    quantity:5
  },
  {
    id:1,
    name:"ballon",
    category:"ballons",
    description:"Hot Air Balloon Ride in Luxor Egypt",
    image:"https://egyptexplorers.net/wp-content/uploads/2023/06/Hot-Air-Ballooning-Luxor-25.jpg",
    price:65,
    rating:3,
    inventoryStatus:"",
    quantity:5
  },
  {
    id:2,
    name:"Templates",
    category:"Templates",
    description:"Aswan & Abu Simbel From Luxor Short Break",
    image:"https://egyptexplorers.net/wp-content/uploads/2020/11/luxor-the-ancient-city-egypt-tours-portal-820x520.jpg",
    price:80,
    rating:5,
    inventoryStatus:"",
    quantity:10
  },
  {
    id:3,
    name:"safary",
    category:"safary",
    description:"Transfers from Aswan to Luxor",
    image:"https://egyptexplorers.net/wp-content/uploads/2023/07/52.jpg",
    price:40,
    rating:3,
    inventoryStatus:"",
    quantity:5
  },
];

}
