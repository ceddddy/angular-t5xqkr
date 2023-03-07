import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../products';

@Component({// component definition
  selector: 'app-product-alerts',//IdentifiesTheComponent
  templateUrl: './product-alerts.component.html',//references the component's HTML and CSS(template and style filenames)
  styleUrls: ['./product-alerts.component.css']
})

// pass data to a child component
export class ProductAlertsComponent {//handles functionality for the component
  @Input() product!: Product | undefined;
  @Output() notify = new EventEmitter();
}
