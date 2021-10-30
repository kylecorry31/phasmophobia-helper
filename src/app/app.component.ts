import { Component } from "@angular/core";

export interface Ghost {
  name: string;
  evidence: Evidence[];
  traits: string[];
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
      traits: ["Can't hunt for 180 seconds after smudging (normally 90)"]
    },
    {
      name: "Wraith",
      evidence: ["EMF Level 5", "Spirit Box", "D.O.T.S Projector"],
      traits: ["Can teleport near a player while not hunting", "Can't leave footprints", "Increased ghost activity when stepping in salt"]
    },
    {
      name: "Phantom",
      evidence: ["Spirit Box", "Fingerprints", "D.O.T.S Projector"],
      traits: ["Taking a photo makes it disappear", "Sanity drops quickly while looking at the ghost", "Stays invisible longer during the hunt (only visible every 1 to 2 seconds)"]
    },
    {
      name: "Poltergeist",
      evidence: ["Spirit Box", "Fingerprints", "Ghost Writing"],
      traits: ["Can throw multiple items at once", "Sanity decreases faster when multiple items are thrown"]
    },
    {
      name: "Banshee",
      evidence: ["Fingerprints", "Ghost Orb", "D.O.T.S Projector"],
      traits: ["It will target a single player during hunts (ignores others)", "Navigates to target and will hunt if it sees it's target for long enough", "Crucifixes have a wider effective radius"]
    },
    {
      name: "Jinn",
      evidence: ["EMF Level 5", "Fingerprints", "Freezing Temperatures"],
      traits: ["Runs faster while further from a player", "Can lower all players sanity by 25%", "Can't use abilities if the power is off"]
    },
    {
      name: "Mare",
      evidence: ["Spirit Box", "Ghost Orb", "Ghost Writing"],
      traits: ["Increased hunt chance if in a dark room", "Can't turn on lights"]
    },
    {
      name: "Revenant",
      evidence: ["Ghost Orb", "Ghost Writing", "Freezing Temperatures"],
      traits: ["Runs faster if it can see a player", "Runs slower if it can't see a player"]
    },
    {
      name: "Shade",
      evidence: ["EMF Level 5", "Ghost Writing", "Freezing Temperatures"],
      traits: ["Less active when multiple players are in the room", "More likely to hunt when players are alone"]
    },
    {
      name: "Demon",
      evidence: ["Fingerprints", "Ghost Writing", "Freezing Temperatures"],
      traits: ["Can hunt when sanity is high", "Successful ouija board answers take 40% sanity instead of 50%"]
    },
    {
      name: "Yurei",
      evidence: ["Ghost Orb", "Freezing Temperatures", "D.O.T.S Projector"],
      traits: ["Sanity drops faster during ghost events or when near the ghost in a hunt", "Roams less when smudge sticks are used"]
    },
    {
      name: "Oni",
      evidence: ["EMF Level 5", "Freezing Temperatures", "D.O.T.S Projector"],
      traits: ["More active when multiple players are in the room", "Can throw objects further"]
    },
    {
      name: "Hantu",
      evidence: ["Fingerprints", "Ghost Orb", "Freezing Temperatures"],
      traits: ["Moves faster in cold rooms during hunts"]
    },
    {
      name: "Yokai",
      evidence: ["Spirit Box", "Ghost Orb", "D.O.T.S Projector"],
      traits: ["Can hunt when sanity is high if players are talking", "Can only hear close voices during hunts"]
    },
    {
      name: "Goryo",
      evidence: ["EMF Level 5", "Fingerprints", "D.O.T.S Projector"],
      traits: ["D.O.T.S only shows through video cameras", "Does not roam much"]
    },
    {
      name: "Myling",
      evidence: ["EMF Level 5", "Fingerprints", "Ghost Writing"],
      traits: ["Can be detected by the parabolic mic more than other ghosts", "Footsteps can only be heard up close during a hunt (equal to flashlight flicker distance)"]
    },
    {
      name: "Onryo",
      evidence: ["Spirit Box", "Ghost Orb", "Freezing Temperatures"],
      traits: ["Increased hunt chance when a flame is extinguished", "Increased hunt change after each player death"]
    },
    {
      name: "The Twins",
      evidence: ["EMF Level 5", "Spirit Box", "Freezing Temperatures"],
      traits: ["Interactions around the map and in a specific room", "Multiple interactions at the same time"]
    },
    {
      name: "Raiju",
      evidence: ["EMF Level 5", "Ghost Orb", "D.O.T.S Projector"],
      traits: ["Runs faster when near electronics", "Can hunt early when near active electronics"]
    },
    {
      name: "Obake",
      evidence: ["EMF Level 5", "Fingerprints", "Ghost Orb"],
      traits: ["Can have a 6 finger fingerprint"]
    }
  ].sort((a, b) => a.name.localeCompare(b.name)) as Ghost[];

  currentEvidence: Evidence[] = [];
  ruledOutEvidence: Evidence[] = [];

  possibleGhosts: Ghost[] = this.ghosts;
  remainingEvidence: string[] = this.evidence;

  toggleEvidence(value: Evidence) {
    if (this.currentEvidence.includes(value)) {
      this.currentEvidence.splice(this.currentEvidence.indexOf(value), 1);
      this.ruledOutEvidence.push(value);
    } else if (this.ruledOutEvidence.includes(value)){
      this.ruledOutEvidence.splice(this.ruledOutEvidence.indexOf(value), 1);
    } else {
      this.currentEvidence.push(value);
    }
    
    
    // else if (this.currentEvidence.length < 3) {
    //   this.currentEvidence.push(value);
    // }
    this.identifyGhost();
  }

  reset() {
    this.currentEvidence = [];
    this.ruledOutEvidence = [];
    this.identifyGhost();
  }

  identifyGhost() {
    this.possibleGhosts = this.ghosts.filter((it) =>
      this.containsAll(it.evidence, this.currentEvidence) && 
      this.containsNone(it.evidence, this.ruledOutEvidence)
    );
    this.remainingEvidence = this.removeAll(
      this.distinct(this.possibleGhosts.flatMap((it) => it.evidence)),
      [...this.currentEvidence, ...this.ruledOutEvidence]
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

  private containsNone(main: string[], values: string[]): boolean {
    for (const value of values) {
      if (main.includes(value)) {
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
