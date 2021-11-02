import { Injectable } from "@angular/core";
import { Evidence } from "../models/evidence";
import { Ghost } from "../models/ghost";
import { containsAll, containsNone, distinct, removeAll } from "../utils";

@Injectable({
  providedIn: "root",
})
export class GhostService {
  constructor() {}

  identifyPossibleGhosts(currentEvidence: Evidence[], ruledOutEvidence: Evidence[]): Ghost[] {
    return this.getAllGhosts().filter((it) =>
      containsAll(it.evidence, currentEvidence) && 
      containsNone(it.evidence, ruledOutEvidence)
    );
  }

  getRemainingEvidence(currentEvidence: Evidence[], ruledOutEvidence: Evidence[]): Evidence[] {
    const possibleGhosts = this.identifyPossibleGhosts(currentEvidence, ruledOutEvidence);
    return removeAll(
      distinct(possibleGhosts.flatMap((it) => it.evidence)),
      [...currentEvidence, ...ruledOutEvidence]
    );
  }

  getAllGhosts(): Ghost[] {
    return [
      {
        id: 1,
        name: "Spirit",
        evidence: [
          Evidence.EMFLevel5,
          Evidence.SpiritBox,
          Evidence.GhostWriting,
        ],
        traits: ["Can't hunt for 180 seconds after smudging (normally 90)"],
      },
      {
        id: 2,
        name: "Wraith",
        evidence: [
          Evidence.EMFLevel5,
          Evidence.SpiritBox,
          Evidence.DOTSProjector,
        ],
        traits: [
          "Can teleport near a player while not hunting",
          "Can't leave footprints",
          "Increased ghost activity when stepping in salt",
        ],
      },
      {
        id: 3,
        name: "Phantom",
        evidence: [
          Evidence.SpiritBox,
          Evidence.Fingerprints,
          Evidence.DOTSProjector,
        ],
        traits: [
          "Taking a photo makes it disappear",
          "Sanity drops quickly while looking at the ghost",
          "Stays invisible longer during the hunt (only visible every 1 to 2 seconds)",
        ],
      },
      {
        id: 4,
        name: "Poltergeist",
        evidence: [
          Evidence.SpiritBox,
          Evidence.Fingerprints,
          Evidence.GhostWriting,
        ],
        traits: [
          "Can throw multiple items at once",
          "Sanity decreases faster when multiple items are thrown",
        ],
      },
      {
        id: 5,
        name: "Banshee",
        evidence: [
          Evidence.Fingerprints,
          Evidence.GhostOrb,
          Evidence.DOTSProjector,
        ],
        traits: [
          "It will target a single player during hunts (ignores others)",
          "Navigates to target and will hunt if it sees it's target for long enough",
          "Crucifixes have a wider effective radius",
        ],
      },
      {
        id: 6,
        name: "Jinn",
        evidence: [
          Evidence.EMFLevel5,
          Evidence.Fingerprints,
          Evidence.FreezingTemperatures,
        ],
        traits: [
          "Runs faster while further from a player",
          "Can lower all players sanity by 25%",
          "Can't use abilities if the power is off",
        ],
      },
      {
        id: 7,
        name: "Mare",
        evidence: [
          Evidence.SpiritBox,
          Evidence.GhostOrb,
          Evidence.GhostWriting,
        ],
        traits: [
          "Increased hunt chance if in a dark room",
          "Can't turn on lights",
        ],
      },
      {
        id: 8,
        name: "Revenant",
        evidence: [
          Evidence.GhostOrb,
          Evidence.GhostWriting,
          Evidence.FreezingTemperatures,
        ],
        traits: [
          "Runs faster if it can see a player",
          "Runs slower if it can't see a player",
        ],
      },
      {
        id: 9,
        name: "Shade",
        evidence: [
          Evidence.EMFLevel5,
          Evidence.GhostWriting,
          Evidence.FreezingTemperatures,
        ],
        traits: [
          "Less active when multiple players are in the room",
          "More likely to hunt when players are alone",
        ],
      },
      {
        id: 10,
        name: "Demon",
        evidence: [
          Evidence.Fingerprints,
          Evidence.GhostWriting,
          Evidence.FreezingTemperatures,
        ],
        traits: [
          "Can hunt when sanity is high",
          "Successful ouija board answers take 40% sanity instead of 50%",
        ],
      },
      {
        id: 11,
        name: "Yurei",
        evidence: [
          Evidence.GhostOrb,
          Evidence.FreezingTemperatures,
          Evidence.DOTSProjector,
        ],
        traits: [
          "Sanity drops faster during ghost events or when near the ghost in a hunt",
          "Roams less when smudge sticks are used",
        ],
      },
      {
        id: 12,
        name: "Oni",
        evidence: [
          Evidence.EMFLevel5,
          Evidence.FreezingTemperatures,
          Evidence.DOTSProjector,
        ],
        traits: [
          "More active when multiple players are in the room",
          "Can throw objects further",
        ],
      },
      {
        id: 13,
        name: "Hantu",
        evidence: [
          Evidence.Fingerprints,
          Evidence.GhostOrb,
          Evidence.FreezingTemperatures,
        ],
        traits: ["Moves faster in cold rooms during hunts"],
      },
      {
        id: 14,
        name: "Yokai",
        evidence: [
          Evidence.SpiritBox,
          Evidence.GhostOrb,
          Evidence.DOTSProjector,
        ],
        traits: [
          "Can hunt when sanity is high if players are talking",
          "Can only hear close voices during hunts",
        ],
      },
      {
        id: 15,
        name: "Goryo",
        evidence: [
          Evidence.EMFLevel5,
          Evidence.Fingerprints,
          Evidence.DOTSProjector,
        ],
        traits: [
          "D.O.T.S only shows through video cameras",
          "Does not roam much",
        ],
      },
      {
        id: 16,
        name: "Myling",
        evidence: [
          Evidence.EMFLevel5,
          Evidence.Fingerprints,
          Evidence.GhostWriting,
        ],
        traits: [
          "Can be detected by the parabolic mic more than other ghosts",
          "Footsteps can only be heard up close during a hunt (equal to flashlight flicker distance)",
        ],
      },
      {
        id: 17,
        name: "Onryo",
        evidence: [
          Evidence.SpiritBox,
          Evidence.GhostOrb,
          Evidence.FreezingTemperatures,
        ],
        traits: [
          "Increased hunt chance when a flame is extinguished",
          "Increased hunt change after each player death",
        ],
      },
      {
        id: 18,
        name: "The Twins",
        evidence: [
          Evidence.EMFLevel5,
          Evidence.SpiritBox,
          Evidence.FreezingTemperatures,
        ],
        traits: [
          "Interactions around the map and in a specific room",
          "Multiple interactions at the same time",
        ],
      },
      {
        id: 19,
        name: "Raiju",
        evidence: [
          Evidence.EMFLevel5,
          Evidence.GhostOrb,
          Evidence.DOTSProjector,
        ],
        traits: [
          "Runs faster when near electronics",
          "Can hunt early when near active electronics",
        ],
      },
      {
        id: 20,
        name: "Obake",
        evidence: [
          Evidence.EMFLevel5,
          Evidence.Fingerprints,
          Evidence.GhostOrb,
        ],
        traits: ["Can have a 6 finger fingerprint"],
      },
    ].sort((a, b) => a.name.localeCompare(b.name));
  }
}
