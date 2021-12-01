import { useEffect, useState } from "react";
import "./App.css";
import EvidenceButton from "./components/EvidenceButton";
import { IconButton } from "@material-ui/core";
import Ghost from "./components/Ghost";
import { containsAll, containsNone, removeAll, distinct } from "./utils";
import { Clear } from "@material-ui/icons";
import {
  FreezingTemperatures,
  Fingerprints,
  SpiritBox,
  EMFLevel5,
  GhostWriting,
  GhostOrb,
  DOTSProjector,
} from "./evidence";

function App() {
  const evidence = [
    FreezingTemperatures,
    Fingerprints,
    SpiritBox,
    EMFLevel5,
    GhostWriting,
    GhostOrb,
    DOTSProjector,
  ];

  const [currentEvidence, setCurrentEvidence] = useState([]);
  const [remainingEvidence, setRemainingEvidence] = useState(evidence);
  const [ruledOutEvidence, setRuledOutEvidence] = useState([]);
  const [ghosts, setGhosts] = useState(getGhosts());

  useEffect(() => {
    setGhosts(identifyPossibleGhosts(currentEvidence, ruledOutEvidence));
    setRemainingEvidence(getRemainingEvidence(currentEvidence, ruledOutEvidence));
  }, [currentEvidence, ruledOutEvidence]);

  const reset = () => {
    setCurrentEvidence([]);
    setRemainingEvidence(evidence);
    setRuledOutEvidence([]);
    setGhosts(getGhosts());
  };

  const toggleEvidence = (evidence) => {
    if (currentEvidence.includes(evidence)) {
      setRuledOutEvidence([...ruledOutEvidence, evidence]);
      setCurrentEvidence(currentEvidence.filter((it) => it !== evidence));
    } else if (ruledOutEvidence.includes(evidence)) {
      setRuledOutEvidence(ruledOutEvidence.filter((it) => it !== evidence));
    } else {
      setCurrentEvidence([...currentEvidence, evidence]);
    }
  };

  return (
    <div className="App">
      <h1>Phasmofinder</h1>
      <div id="entry">
        {evidence.map((evidence) => (
          <EvidenceButton
            key={evidence}
            evidence={evidence}
            currentEvidence={currentEvidence}
            ruledOutEvidence={ruledOutEvidence}
            remainingEvidence={remainingEvidence}
            toggleEvidence={() => toggleEvidence(evidence)}
          />
        ))}
        <IconButton onClick={reset} className="clear-btn">
          <Clear />
        </IconButton>
      </div>
      <div className="ghost-section">
        {ghosts.map((ghost) => (
          <Ghost
            key={ghost.id}
            ghost={ghost}
            currentEvidence={currentEvidence}
          />
        ))}
      </div>
    </div>
  );
}

function identifyPossibleGhosts(currentEvidence, ruledOutEvidence) {
  return getGhosts().filter(
    (it) =>
      containsAll(it.evidence, currentEvidence) &&
      containsNone(it.evidence, ruledOutEvidence)
  );
}

function getRemainingEvidence(currentEvidence, ruledOutEvidence) {
  const possibleGhosts = identifyPossibleGhosts(
    currentEvidence,
    ruledOutEvidence
  );
  return removeAll(distinct(possibleGhosts.flatMap((it) => it.evidence)), [
    ...currentEvidence,
    ...ruledOutEvidence,
  ]);
}

function getGhosts() {
  return [
    {
      id: 1,
      name: "Spirit",
      evidence: [EMFLevel5, SpiritBox, GhostWriting],
      traits: ["Can't hunt for 180 seconds after smudging (normally 90)"],
    },
    {
      id: 2,
      name: "Wraith",
      evidence: [EMFLevel5, SpiritBox, DOTSProjector],
      traits: [
        "Can teleport near a player while not hunting",
        "Can't leave footprints",
        "Increased ghost activity when stepping in salt",
      ],
    },
    {
      id: 3,
      name: "Phantom",
      evidence: [SpiritBox, Fingerprints, DOTSProjector],
      traits: [
        "Taking a photo makes it disappear",
        "Sanity drops quickly while looking at the ghost",
        "Stays invisible longer during the hunt (only visible every 1 to 2 seconds)",
      ],
    },
    {
      id: 4,
      name: "Poltergeist",
      evidence: [SpiritBox, Fingerprints, GhostWriting],
      traits: [
        "Can throw multiple items at once",
        "Sanity decreases faster when multiple items are thrown",
      ],
    },
    {
      id: 5,
      name: "Banshee",
      evidence: [Fingerprints, GhostOrb, DOTSProjector],
      traits: [
        "It will target a single player during hunts (ignores others)",
        "Navigates to target and will hunt if it sees it's target for long enough",
        "Crucifixes have a wider effective radius",
      ],
    },
    {
      id: 6,
      name: "Jinn",
      evidence: [EMFLevel5, Fingerprints, FreezingTemperatures],
      traits: [
        "Runs faster while further from a player",
        "Can lower all players sanity by 25%",
        "Can't use abilities if the power is off",
      ],
    },
    {
      id: 7,
      name: "Mare",
      evidence: [SpiritBox, GhostOrb, GhostWriting],
      traits: [
        "Increased hunt chance if in a dark room",
        "Can't turn on lights",
      ],
    },
    {
      id: 8,
      name: "Revenant",
      evidence: [GhostOrb, GhostWriting, FreezingTemperatures],
      traits: [
        "Runs faster if it can see a player",
        "Runs slower if it can't see a player",
      ],
    },
    {
      id: 9,
      name: "Shade",
      evidence: [EMFLevel5, GhostWriting, FreezingTemperatures],
      traits: [
        "Less active when multiple players are in the room",
        "More likely to hunt when players are alone",
      ],
    },
    {
      id: 10,
      name: "Demon",
      evidence: [Fingerprints, GhostWriting, FreezingTemperatures],
      traits: [
        "Can hunt when sanity is high",
        "Successful ouija board answers take 40% sanity instead of 50%",
      ],
    },
    {
      id: 11,
      name: "Yurei",
      evidence: [GhostOrb, FreezingTemperatures, DOTSProjector],
      traits: [
        "Sanity drops faster during ghost events or when near the ghost in a hunt",
        "Roams less when smudge sticks are used",
      ],
    },
    {
      id: 12,
      name: "Oni",
      evidence: [EMFLevel5, FreezingTemperatures, DOTSProjector],
      traits: [
        "More active when multiple players are in the room",
        "Can throw objects further",
      ],
    },
    {
      id: 13,
      name: "Hantu",
      evidence: [Fingerprints, GhostOrb, FreezingTemperatures],
      traits: ["Moves faster in cold rooms during hunts"],
    },
    {
      id: 14,
      name: "Yokai",
      evidence: [SpiritBox, GhostOrb, DOTSProjector],
      traits: [
        "Can hunt when sanity is high if players are talking",
        "Can only hear close voices during hunts",
      ],
    },
    {
      id: 15,
      name: "Goryo",
      evidence: [EMFLevel5, Fingerprints, DOTSProjector],
      traits: [
        "D.O.T.S only shows through video cameras",
        "Does not roam much",
      ],
    },
    {
      id: 16,
      name: "Myling",
      evidence: [EMFLevel5, Fingerprints, GhostWriting],
      traits: [
        "Can be detected by the parabolic mic more than other ghosts",
        "Footsteps can only be heard up close during a hunt (equal to flashlight flicker distance)",
      ],
    },
    {
      id: 17,
      name: "Onryo",
      evidence: [SpiritBox, GhostOrb, FreezingTemperatures],
      traits: [
        "Increased hunt chance when a flame is extinguished",
        "Increased hunt change after each player death",
      ],
    },
    {
      id: 18,
      name: "The Twins",
      evidence: [EMFLevel5, SpiritBox, FreezingTemperatures],
      traits: [
        "Interactions around the map and in a specific room",
        "Multiple interactions at the same time",
      ],
    },
    {
      id: 19,
      name: "Raiju",
      evidence: [EMFLevel5, GhostOrb, DOTSProjector],
      traits: [
        "Runs faster when near electronics",
        "Can hunt early when near active electronics",
      ],
    },
    {
      id: 20,
      name: "Obake",
      evidence: [EMFLevel5, Fingerprints, GhostOrb],
      traits: ["Can have a 6 finger fingerprint"],
    },
  ].sort((a, b) => a.name.localeCompare(b.name));
}

export default App;
