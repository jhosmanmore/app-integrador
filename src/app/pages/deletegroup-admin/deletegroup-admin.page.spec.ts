import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DeletegroupAdminPage } from './deletegroup-admin.page';

describe('DeletegroupAdminPage', () => {
  let component: DeletegroupAdminPage;
  let fixture: ComponentFixture<DeletegroupAdminPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DeletegroupAdminPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
