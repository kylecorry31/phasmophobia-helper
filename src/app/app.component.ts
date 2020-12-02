import { Component } from '@angular/core';

export interface Ghost {
  name: string;
  evidence: Evidence[]
}

export type Evidence = 'Freezing Temperatures' | 'Fingerprints' | 'Spirit Box' | 'EMF Level 5' | 'Ghost Writing' | 'Ghost Orb'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  evidence: Evidence[] = [
    'EMF Level 5',
    'Fingerprints',
    'Ghost Orb',
    'Ghost Writing',
    'Freezing Temperatures',
    'Spirit Box'
  ]

  ghosts: Ghost[] = [
    {
      name: "Banshee",
      evidence: ["EMF Level 5", "Fingerprints", "Freezing Temperatures"]
    },
    {
      name: "Spirit",
      evidence: ["Ghost Writing", "Fingerprints", "Spirit Box"]
    },
    {
      name: "Demon",
      evidence: ["Ghost Writing", "Spirit Box", "Freezing Temperatures"]
    },
    {
      name: "Jinn",
      evidence: ["EMF Level 5", "Spirit Box", "Ghost Orb"]
    },
    {
      name: "Mare",
      evidence: ["Freezing Temperatures", "Spirit Box", "Ghost Orb"]
    },
    {
      name: "Oni",
      evidence: ["EMF Level 5", "Ghost Writing", "Spirit Box"]
    },
    {
      name: "Phantom",
      evidence: ["EMF Level 5", "Freezing Temperatures", "Ghost Orb"]
    },
    {
      name: "Poltergeist",
      evidence: ["Fingerprints", "Spirit Box", "Ghost Orb"]
    },
    {
      name: "Revenant",
      evidence: ["EMF Level 5", "Ghost Writing", "Fingerprints"]
    },
    {
      name: "Shade",
      evidence: ["EMF Level 5", "Ghost Writing", "Ghost Orb"]
    },
    {
      name: "Wraith",
      evidence: ["Fingerprints", "Spirit Box", "Freezing Temperatures"]
    },
    {
      name: "Yurei",
      evidence: ["Ghost Writing", "Freezing Temperatures", "Ghost Orb"]
    }
  ].sort((a, b) => a.name.localeCompare(b.name)) as Ghost[]

  isMobile: boolean = localStorage.getItem('phasmophobia:isMobile') === "true";

  evidenceIconMap: { [evidence: string]: string } = {
    "EMF Level 5": "settings_remote",
    "Spirit Box": "radio",
    "Ghost Writing": "menu_book",
    "Freezing Temperatures": "ac_unit",
    "Ghost Orb": "videocam",
    "Fingerprints": "fingerprint"
  }

  currentEvidence: Evidence[] = [];

  possibleGhosts: Ghost[] = this.ghosts;
  remainingEvidence: string[] = this.evidence;

  toggleMobile(){
    this.isMobile = !this.isMobile;
    localStorage.setItem("phasmophobia:isMobile", "" + this.isMobile);
  }

  toggleEvidence(value: Evidence){
    if (this.currentEvidence.includes(value)){
      this.currentEvidence.splice(this.currentEvidence.indexOf(value), 1);
    } else if (this.currentEvidence.length < 3) {
      this.currentEvidence.push(value);
    }
    this.identifyGhost();
  }

  reset(){
    this.currentEvidence = [];
    this.identifyGhost();
  }

  identifyGhost(){
    this.possibleGhosts = this.ghosts.filter(it => this.containsAll(it.evidence, this.currentEvidence));
    this.remainingEvidence = this.removeAll(this.distinct(this.possibleGhosts.flatMap(it => it.evidence)), this.currentEvidence);
  }

  private containsAll(main: string[], values: string[]): boolean {
    for (const value of values){
      if (!main.includes(value)){
        return false;
      }
    }
    return true;
  }

  private distinct(items: string[]): string[] {
    const obj = {};
    for (const item of items){
      obj[item] = true;
    }

    return Object.keys(obj).sort((a, b) => a.localeCompare(b));
  }

  removeAll(main: string[], items: string[]): string[] {
    return main.filter(it => !items.includes(it));
  }

}
