import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { GhostComponent } from './ghost.component';

describe('GhostComponent', () => {
  let component: GhostComponent;
  let fixture: ComponentFixture<GhostComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ GhostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GhostComponent);
    component = fixture.componentInstance;
    component.ghost = {
      evidence: ["EMF Level 5", "Fingerprints", "Ghost Orb"],
      name: "Test"
    }
    component.currentEvidence = ['EMF Level 5'];
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it("should display ghost name", () => {
    const name = fixture.debugElement.query(By.css('.ghost-name')).nativeElement.textContent;
    expect(name).toEqual("Test");
  })

  it("should display all evidence", () => {
    const evidence = fixture.debugElement.queryAll(By.css('.ghost-evidence'));
    expect(evidence.length).toEqual(3);
    expect(evidence[0].nativeElement.textContent).toEqual('settings_remote');
    expect(evidence[1].nativeElement.textContent).toEqual('fingerprint');
    expect(evidence[2].nativeElement.textContent).toEqual('videocam');
  })

  it("should dim found evidence", () => {
    const evidence = fixture.debugElement.queryAll(By.css('.ghost-evidence.found'));
    expect(evidence.length).toEqual(1);
    expect(evidence[0].nativeElement.textContent).toEqual('settings_remote');
  })

  it("should have a valid evidence icon map", () => {
    expect(component.evidenceIconMap).toEqual({
      "EMF Level 5": "settings_remote",
      "Spirit Box": "radio",
      "Ghost Writing": "menu_book",
      "Freezing Temperatures": "ac_unit",
      "Ghost Orb": "videocam",
      "Fingerprints": "fingerprint"
    });
  })
});
