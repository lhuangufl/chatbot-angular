import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildsidebarComponent } from './childsidebar.component';

describe('ChildsidebarComponent', () => {
  let component: ChildsidebarComponent;
  let fixture: ComponentFixture<ChildsidebarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ChildsidebarComponent]
    });
    fixture = TestBed.createComponent(ChildsidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
