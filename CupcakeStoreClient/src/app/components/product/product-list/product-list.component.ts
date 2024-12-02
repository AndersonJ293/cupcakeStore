import { Component, Input, NgModule, OnInit } from '@angular/core';
import { ProductService } from '../../../services/product.service';
import { ProductCardComponent } from '../product-card/product-card.component';
import { CommonModule } from '@angular/common';
import { DialogService } from '@ngneat/dialog';
import { FilterDialogComponent } from '../../filter-dialog/filter-dialog.component';
import { Product } from '../../../dto/product_dto';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [ProductCardComponent, CommonModule, FormsModule],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss',
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];
  @Input() searchQuery: string = '';

  constructor(
    private productService: ProductService,
    private dialog: DialogService
  ) {}

  ngOnInit() {
    this.productService.getProducts().subscribe((data) => {
      this.products = data;
    });
  }

  get filteredProducts() {
    if (this.searchQuery === '') return this.products;

    return this.products.filter(
      (product) =>
        this.toSearch(product.nome).includes(this.toSearch(this.searchQuery)) ||
        this.toSearch(product.descricao).includes(
          this.toSearch(this.searchQuery)
        )
    );
  }

  toggleFilter() {
    this.dialog.open(FilterDialogComponent, {
      width: '400px',
    });
  }

  private toSearch(text: string) {
    let chars = ['aáàãäâ', 'eéèëê', 'iíìïî', 'oóòõöô', 'uúùüû'];
    let value = text;
    for (var i in chars)
      value = value.replace(
        new RegExp('[' + chars[i] + ']', 'g'),
        '[' + chars[i] + ']'
      );
    return value.toLowerCase();
  }
}
