/* File: src/app/pages/shop/shop.page.ts */
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-shop',
  templateUrl: './shop.page.html',
  styleUrls: ['./shop.page.scss'],
  standalone: false,
})

export class ShopPage {

  constructor(private router: Router, private route: ActivatedRoute) {}

  goToShop() {
    this.router.navigate(['/shop']);
  }

  goToOrders() {
    this.router.navigate(['/orders']);
  }

  goToCart() {
    this.router.navigate(['/cart']);
  }

  goToProfile() {
    this.router.navigate(['/profile']);
  }

  items = [
    { image: 'assets/item1.jpg', name: 'Item 1', price: 29.99 },
    { image: 'assets/item2.jpg', name: 'Item 2', price: 49.99 },
    { image: 'assets/item3.jpg', name: 'Item 3', price: 19.99 },
  ];

  categories = [
    { image: 'assets/cat1.jpg', name: 'Category 1', count: '12 Items' },
    { image: 'assets/cat2.jpg', name: 'Category 2', count: '8 Items' },
    { image: 'assets/cat3.jpg', name: 'Category 3', count: '5 Items' },
  ];

  topProducts = [
    { image: 'assets/top1.jpg' },
    { image: 'assets/top2.jpg' },
    { image: 'assets/top3.jpg' },
  ];

  newItems = [
    { image: 'assets/new1.jpg', name: 'New Item 1', price: 39.99 },
    { image: 'assets/new2.jpg', name: 'New Item 2', price: 59.99 },
  ];

  goToCategoryFilter() {
    this.router.navigate(['/category-filter']);
  }

  goToProductDetail(items: any) {
    this.router.navigate(['/product-detail'], {
      queryParams: {
        id: items.id,
        name: items.name,
        image: items.image,
        description: items.description
    }
  });
 }
}