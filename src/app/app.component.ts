import { Component } from "@angular/core";

export interface Ghost {
  name: string;
  evidence: Evidence[];
}

export type Evidence =
  | "Freezing Temperatures"
  | "Fingerprints"
  | "Spirit Box"
  | "EMF Level 5"
  | "Ghost Writing"
  | "Ghost Orb"
  | "D.O.T.S Projector";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  evidence: Evidence[] = [
    "EMF Level 5",
    "Fingerprints",
    "Freezing Temperatures",
    "Ghost Orb",
    "Ghost Writing",
    "Spirit Box",
    "D.O.T.S Projector",
  ];

  ghosts: Ghost[] = [
    {
      name: "Spirit",
      evidence: ["EMF Level 5", "Spirit Box", "Ghost Writing"],
    },
    {
      name: "Wraith",
      evidence: ["EMF Level 5", "Spirit Box", "D.O.T.S Projector"],
    },
    {
      name: "Phantom",
      evidence: ["Spirit Box", "Fingerprints", "D.O.T.S Projector"],
    },
    {
      name: "Poltergeist",
      evidence: ["Spirit Box", "Fingerprints", "Ghost Writing"],
    },
    {
      name: "Banshee",
      evidence: ["Fingerprints", "Ghost Orb", "D.O.T.S Projector"],
    },
    {
      name: "Jinn",
      evidence: ["EMF Level 5", "Fingerprints", "Freezing Temperatures"],
    },
    {
      name: "Mare",
      evidence: ["Spirit Box", "Ghost Orb", "Ghost Writing"],
    },
    {
      name: "Revenant",
      evidence: ["Ghost Orb", "Ghost Writing", "Freezing Temperatures"],
    },
    {
      name: "Shade",
      evidence: ["EMF Level 5", "Ghost Writing", "Freezing Temperatures"],
    },
    {
      name: "Demon",
      evidence: ["Fingerprints", "Ghost Writing", "Freezing Temperatures"],
    },
    {
      name: "Yurei",
      evidence: ["Ghost Orb", "Freezing Temperatures", "D.O.T.S Projector"],
    },
    {
      name: "Oni",
      evidence: ["EMF Level 5", "Freezing Temperatures", "D.O.T.S Projector"],
    },
    {
      name: "Hantu",
      evidence: ["Fingerprints", "Ghost Orb", "Freezing Temperatures"],
    },
    {
      name: "Yokai",
      evidence: ["Spirit Box", "Ghost Orb", "D.O.T.S Projector"],
    },
    {
      name: "Goryo",
      evidence: ["EMF Level 5", "Fingerprints", "D.O.T.S Projector"],
    },
    {
      name: "Myling",
      evidence: ["EMF Level 5", "Fingerprints", "Ghost Writing"],
    },
    {
      name: "Onryo",
      evidence: ["Spirit Box", "Ghost Orb", "Freezing Temperatures"]
    },
    {
      name: "The Twins",
      evidence: ["EMF Level 5", "Spirit Box", "Freezing Temperatures"]
    },
    {
      name: "Raiju",
      evidence: ["EMF Level 5", "Ghost Orb", "D.O.T.S Projector"]
    },
    {
      name: "Obake",
      evidence: ["EMF Level 5", "Fingerprints", "Ghost Orb"]
    }
  ].sort((a, b) => a.name.localeCompare(b.name)) as Ghost[];

  currentEvidence: Evidence[] = [];

  possibleGhosts: Ghost[] = this.ghosts;
  remainingEvidence: string[] = this.evidence;

  toggleEvidence(value: Evidence) {
    if (this.currentEvidence.includes(value)) {
      this.currentEvidence.splice(this.currentEvidence.indexOf(value), 1);
    } else if (this.currentEvidence.length < 3) {
      this.currentEvidence.push(value);
    }
    this.identifyGhost();
  }

  reset() {
    this.currentEvidence = [];
    this.identifyGhost();
  }

  identifyGhost() {
    this.possibleGhosts = this.ghosts.filter((it) =>
      this.containsAll(it.evidence, this.currentEvidence)
    );
    this.remainingEvidence = this.removeAll(
      this.distinct(this.possibleGhosts.flatMap((it) => it.evidence)),
      this.currentEvidence
    );
  }

  private containsAll(main: string[], values: string[]): boolean {
    for (const value of values) {
      if (!main.includes(value)) {
        return false;
      }
    }
    return true;
  }

  private distinct(items: string[]): string[] {
    const obj = {};
    for (const item of items) {
      obj[item] = true;
    }

    return Object.keys(obj).sort((a, b) => a.localeCompare(b));
  }

  removeAll(main: string[], items: string[]): string[] {
    return main.filter((it) => !items.includes(it));
  }
}
