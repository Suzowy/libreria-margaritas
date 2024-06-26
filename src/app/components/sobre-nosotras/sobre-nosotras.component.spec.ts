import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SobreNosotrasComponent } from './sobre-nosotras.component';

describe('SobreNosotrasComponent', () => {
  let component: SobreNosotrasComponent;
  let fixture: ComponentFixture<SobreNosotrasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SobreNosotrasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SobreNosotrasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
