import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SprintIssuesComponent } from './sprint-issues.component';

describe('SprintIssuesComponent', () => {
  let component: SprintIssuesComponent;
  let fixture: ComponentFixture<SprintIssuesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SprintIssuesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SprintIssuesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
