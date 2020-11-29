import { Component } from '@angular/core';

interface Ghost {
  name: string;
  evidence: Evidence[]
}

type Evidence = 'Freezing Temperatures' | 'Fingerprints' | 'Spirit Box' | 'EMF Level 5' | 'Ghost Writing' | 'Ghost Orb'

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

  possibleGhosts: Ghost[] = this.ghosts;
  remainingEvidence: string[] = this.evidence;

  evidence1: string;
  evidence2: string;
  evidence3: string;

  evidence1Changed(value: string){
    this.evidence1 = value;
    this.identifyGhost();
  }

  evidence2Changed(value: string){
    this.evidence2 = value;
    this.identifyGhost();
  }

  evidence3Changed(value: string){
    this.evidence3 = value;
    this.identifyGhost();
  }

  reset(){
    this.evidence1 = null;
    this.evidence2 = null;
    this.evidence3 = null;
    this.identifyGhost();
  }

  identifyGhost(){
    const currentEvidence = [this.evidence1, this.evidence2, this.evidence3].filter(it => it != null);

    this.possibleGhosts = this.ghosts.filter(it => this.containsAll(it.evidence, currentEvidence));
    this.remainingEvidence = this.removeAll(this.distinct(this.possibleGhosts.flatMap(it => it.evidence)), currentEvidence);
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
