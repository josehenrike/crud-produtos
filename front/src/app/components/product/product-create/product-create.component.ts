import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent {

  constructor(private productService: ProductService,
    private router: Router) { }

  createProduct(): void {
    this.productService.showMessage('Produto criado!')
  }

  cancel(): void {
    this.router.navigate(['/products'])
  }
}
