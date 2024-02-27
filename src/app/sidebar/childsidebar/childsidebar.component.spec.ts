import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildSidebarComponent } from './childsidebar.component';

describe('ChildSidebarComponent', () => {
  let component: ChildSidebarComponent;
  let fixture: ComponentFixture<ChildSidebarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ChildSidebarComponent]
    });
    fixture = TestBed.createComponent(ChildSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
