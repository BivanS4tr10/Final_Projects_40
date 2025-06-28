import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.page.html',
  styleUrls: ['./product-detail.page.scss'],
  standalone: false,
})
export class ProductDetailPage implements OnInit {
  items : any = {}


  constructor(private router: Router, private route: ActivatedRoute) {
    this.route.queryParams.subscribe(qp => {
      this.items = {
        id: qp['id'],
        name: qp['name'],
        image: qp['image'],
        description: qp['description'],
      };
    });
  }

  ngOnInit() {
  }

}
