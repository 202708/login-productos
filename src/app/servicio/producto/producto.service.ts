import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  private readonly URL_PRODUCTOS = 'https://dummyjson.com/auth/products';
  private inicio = 0;
  private saltar = 0;
  private cantidad = 10;

  constructor() { }
}
