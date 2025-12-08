import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectExplorer } from './project-explorer';

describe('ProjectExplorer', () => {
  let component: ProjectExplorer;
  let fixture: ComponentFixture<ProjectExplorer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectExplorer]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectExplorer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
