import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TownInfoPage } from './town-info.page';

describe('TownInfoPage', () => {
  let component: TownInfoPage;
  let fixture: ComponentFixture<TownInfoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(TownInfoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
