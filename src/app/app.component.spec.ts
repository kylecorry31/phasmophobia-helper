import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { GhostComponent } from './ghost/ghost.component';

describe('AppComponent', () => {

  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        GhostComponent
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("can identify ghosts", () => {
    component.toggleEvidence('Ghost Writing');
    expect(component.possibleGhosts.map(it => it.name)).toEqual([
      'Demon',
      'Oni',
      'Revenant',
      'Shade',
      'Spirit',
      'Yurei'
    ]);
    expect(component.remainingEvidence).toEqual([
      'EMF Level 5',
      'Fingerprints',
      'Freezing Temperatures',
      'Ghost Orb',
      'Spirit Box'
    ]);

    component.toggleEvidence('Fingerprints');
    expect(component.possibleGhosts.map(it => it.name)).toEqual([
      'Revenant',
      'Spirit'
    ]);
    expect(component.remainingEvidence).toEqual([
      'EMF Level 5',
      'Spirit Box'
    ]);

    component.toggleEvidence('EMF Level 5');
    expect(component.possibleGhosts.map(it => it.name)).toEqual([
      'Revenant'
    ]);
    expect(component.remainingEvidence).toEqual([]);
  });

  it('can toggle evidence', () => {
    component.toggleEvidence('EMF Level 5');
    expect(component.currentEvidence).toEqual(['EMF Level 5']);

    component.toggleEvidence('Spirit Box');
    expect(component.currentEvidence).toEqual(['EMF Level 5', 'Spirit Box']);

    component.toggleEvidence('Ghost Writing');
    expect(component.currentEvidence).toEqual(['EMF Level 5', 'Spirit Box', 'Ghost Writing']);

    component.toggleEvidence('Ghost Orb');
    expect(component.currentEvidence).toEqual(['EMF Level 5', 'Spirit Box', 'Ghost Writing']);

    component.toggleEvidence('Ghost Writing');
    expect(component.currentEvidence).toEqual(['EMF Level 5', 'Spirit Box']);

    component.toggleEvidence('Ghost Orb');
    expect(component.currentEvidence).toEqual(['EMF Level 5', 'Spirit Box', 'Ghost Orb']);
    
  })

  it('can reset evidence', () => {
    component.toggleEvidence('Ghost Writing');
    component.reset();
    expect(component.possibleGhosts).toEqual(component.ghosts);
    expect(component.currentEvidence).toEqual([]);
    expect(component.remainingEvidence).toEqual([
      'EMF Level 5',
      'Fingerprints',
      'Freezing Temperatures',
      'Ghost Orb',
      'Ghost Writing',
      'Spirit Box'
    ]);
  })
});
