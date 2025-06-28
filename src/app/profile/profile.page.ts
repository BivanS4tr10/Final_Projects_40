import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
  standalone: false,
})
export class ProfilePage {
  recentlyViewed = [
    'assets/user1.png',
    'assets/user2.png',
    'assets/user3.png',
    'assets/user4.png',
  ];
}
