import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PersonalitiesPage } from './personalities.page';

describe('PersonalitiesPage', () => {
  let component: PersonalitiesPage;
  let fixture: ComponentFixture<PersonalitiesPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PersonalitiesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
