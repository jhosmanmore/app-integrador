import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DeletegroupPage } from './deletegroup.page';

describe('DeletegroupPage', () => {
  let component: DeletegroupPage;
  let fixture: ComponentFixture<DeletegroupPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DeletegroupPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
