import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeftSidebarCommunityComponent } from './left-sidebar-community.component';

describe('LeftSidebarCommunityComponent', () => {
  let component: LeftSidebarCommunityComponent;
  let fixture: ComponentFixture<LeftSidebarCommunityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeftSidebarCommunityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LeftSidebarCommunityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
