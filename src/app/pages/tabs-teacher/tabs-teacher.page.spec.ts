import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TabsTeacherPage } from './tabs-teacher.page';

describe('TabsTeacherPage', () => {
  let component: TabsTeacherPage;
  let fixture: ComponentFixture<TabsTeacherPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(TabsTeacherPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
