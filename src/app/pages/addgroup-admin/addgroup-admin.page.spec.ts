import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddgroupAdminPage } from './addgroup-admin.page';

describe('AddgroupAdminPage', () => {
  let component: AddgroupAdminPage;
  let fixture: ComponentFixture<AddgroupAdminPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AddgroupAdminPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
