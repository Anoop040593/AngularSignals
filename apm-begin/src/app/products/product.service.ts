import { httpResource } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';
import { Product } from './product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private productsUrl = 'api/products';
  selectedProduct = signal<Product | undefined>(undefined);
  // by default undefined; putting this -> { defaultValue: [] } will not give undefined.
  productsResource = httpResource<Product[]>(() => this.productsUrl, { defaultValue: [] });
}
