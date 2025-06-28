import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-category-filter',
  templateUrl: './category-filter.page.html',
  styleUrls: ['./category-filter.page.scss'],
  standalone: false,
})
export class CategoryFilterPage {
  gender = 'female';
  selectedSubcategory: string | null = null;

  allProducts = [
    { title: 'Red Dress', price: 17.00, image: 'assets/images/red_dress.jpg', category: 'Dresses' },
    { title: 'Floral Skirt', price: 17.00, image: 'assets/images/floral_skirt.jpg', category: 'Skirts' },
    { title: 'Pink Hoodie', price: 17.00, image: 'assets/images/pink_hoodie.jpg', category: 'Hoodies' },
  ];
   
  categories = [
    {
      name: 'Clothing',
      icon: 'shirt-outline',
      gender: 'female',
      subcategories: ['Dresses', 'Pants', 'Skirts', 'Shorts', 'Jackets', 'Hoodies', 'Shirts', 'T-Shirts', 'Polo', 'Tunics']
    },
    {
      name: 'Shoes',
      icon: 'walk-outline',
      gender: 'female',
      subcategories: []
    },
    {
      name: 'Bags',
      icon: 'bag-handle-outline',
      gender: 'female',
      subcategories: []
    },
    {
      name: 'Lingerie',
      icon: 'heart-outline',
      gender: 'female',
      subcategories: []
    },
    {
      name: 'Accessories',
      icon: 'sparkles-outline',
      gender: 'female',
      subcategories: []
    },
    {
      name: 'Just for You ⭐',
      icon: 'star-outline',
      gender: 'female',
      subcategories: []
    }
  ];

  get filteredCategories() {
    return this.categories.filter(cat => this.gender === 'all' || cat.gender === this.gender);
  }

  get filteredProducts() {
    if (!this.selectedSubcategory) return [];
    return this.allProducts.filter(p => p.category === this.selectedSubcategory);
  }

  selectSubcategory(sub: string) {
    this.selectedSubcategory = sub;
  }

  close() {
    // untuk modal atau navigasi
  }
}
