import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CategoryFilterPage } from './category-filter.page';

describe('CategoryFilterPage', () => {
  let component: CategoryFilterPage;
  let fixture: ComponentFixture<CategoryFilterPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoryFilterPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
