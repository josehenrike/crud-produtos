import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../product.model';

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.css']
})
export class ProductUpdateComponent implements OnInit {

  constructor(
    private productService: ProductService,
    private router: Router,
    private route: ActivatedRoute) { }

  product: Product = {
    name: ''
  }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id') ?? 0)
    this.productService.readById(id).subscribe(product => {
      this.product = product;
    });
  }

  updateProduct(): void {
    this.productService.update(this.product).subscribe(() => {
      this.productService.showMessage('Produto atualizado com sucesso!')
      this.router.navigate(['/products']);
    });
  }

  cancel(): void {
    this.router.navigate(['/products']);
  }

}
