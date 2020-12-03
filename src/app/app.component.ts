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
    'Freezing Temperatures',
    'Ghost Orb',
    'Ghost Writing',
    'Spirit Box'
  ]

  ghosts: Ghost[] = [
    {
      name: "Banshee",
      evidence: ["EMF Level 5", "Fingerprints", "Freezing Temperatures"]
    },
    {
      name: "Spirit",
      evidence: ["Fingerprints", "Ghost Writing", "Spirit Box"]
    },
    {
      name: "Demon",
      evidence: ["Freezing Temperatures", "Ghost Writing", "Spirit Box"]
    },
    {
      name: "Jinn",
      evidence: ["EMF Level 5", "Ghost Orb", "Spirit Box"]
    },
    {
      name: "Mare",
      evidence: ["Freezing Temperatures", "Ghost Orb", "Spirit Box"]
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
      evidence: ["Fingerprints", "Ghost Orb", "Spirit Box"]
    },
    {
      name: "Revenant",
      evidence: ["EMF Level 5", "Fingerprints", "Ghost Writing"]
    },
    {
      name: "Shade",
      evidence: ["EMF Level 5", "Ghost Orb", "Ghost Writing"]
    },
    {
      name: "Wraith",
      evidence: ["Fingerprints", "Freezing Temperatures", "Spirit Box"]
    },
    {
      name: "Yurei",
      evidence: ["Freezing Temperatures", "Ghost Orb", "Ghost Writing"]
    }
  ].sort((a, b) => a.name.localeCompare(b.name)) as Ghost[]

  currentEvidence: Evidence[] = [];

  possibleGhosts: Ghost[] = this.ghosts;
  remainingEvidence: string[] = this.evidence;

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
