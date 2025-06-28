import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RecoverPasswordPagePage } from './recover-password-page.page';

describe('RecoverPasswordPagePage', () => {
  let component: RecoverPasswordPagePage;
  let fixture: ComponentFixture<RecoverPasswordPagePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(RecoverPasswordPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
