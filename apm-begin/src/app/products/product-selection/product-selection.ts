import { Component, effect, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProductData } from '../product-data';
import { Product } from '../product';

@Component({
  selector: 'app-product-selection',
  imports: [FormsModule],
  templateUrl: './product-selection.html',
  styleUrl: './product-selection.css',
})
export class ProductSelection {
  pageTitle = 'Product Selection';
  quantity = signal(1);
  selectedProduct = signal<Product | undefined>(undefined);
  products = signal(ProductData.products);

  onIncrease() {
    // this.quantity.set() //sets specific value
    this.quantity.update((q) => q + 1); //sets dynamic values
  }

  onDecrease() {
    this.quantity.update((q) => (q <= 0 ? 0 : q - 1));
  }

  qtyEffect = effect(() => console.log('quantity', this.quantity()));
}
