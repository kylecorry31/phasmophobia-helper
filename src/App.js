import { useEffect, useState } from "react";
import "./App.css";
import EvidenceButton from "./components/EvidenceButton";
import Ghost from "./components/Ghost";
import { removeAll, distinct } from "./utils";
import {
  FreezingTemperatures,
  Fingerprints,
  SpiritBox,
  EMFLevel5,
  GhostWriting,
  GhostOrb,
  DOTSProjector,
} from "./evidence";
import { Clear } from "@mui/icons-material";
import { IconButton } from "@mui/material";

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
  const possibleGhosts = getGhosts();

  const hasEvidence = (ghost, evidence) => ghost.evidence.includes(evidence);
  const hasRuledOutEvidence = (ghost) => ghost.evidence.some((evidence) => ruledOutEvidence.includes(evidence));
  const doesNotMatchEvidence = (ghost) => currentEvidence.some((evidence) => !hasEvidence(ghost, evidence));

  const ruledOutGhosts = possibleGhosts.filter((ghost) =>
    hasRuledOutEvidence(ghost) ||
    doesNotMatchEvidence(ghost)
  );

  return removeAll(
    possibleGhosts,
    ruledOutGhosts
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
      evidence: [EMFLevel5, SpiritBox, GhostWriting]
    },
    {
      id: 2,
      name: "Wraith",
      evidence: [EMFLevel5, SpiritBox, DOTSProjector]
    },
    {
      id: 3,
      name: "Phantom",
      evidence: [SpiritBox, Fingerprints, DOTSProjector]
    },
    {
      id: 4,
      name: "Poltergeist",
      evidence: [SpiritBox, Fingerprints, GhostWriting]
    },
    {
      id: 5,
      name: "Banshee",
      evidence: [Fingerprints, GhostOrb, DOTSProjector]
    },
    {
      id: 6,
      name: "Jinn",
      evidence: [EMFLevel5, Fingerprints, FreezingTemperatures]
    },
    {
      id: 7,
      name: "Mare",
      evidence: [SpiritBox, GhostOrb, GhostWriting]
    },
    {
      id: 8,
      name: "Revenant",
      evidence: [GhostOrb, GhostWriting, FreezingTemperatures]
    },
    {
      id: 9,
      name: "Shade",
      evidence: [EMFLevel5, GhostWriting, FreezingTemperatures]
    },
    {
      id: 10,
      name: "Demon",
      evidence: [Fingerprints, GhostWriting, FreezingTemperatures]
    },
    {
      id: 11,
      name: "Yurei",
      evidence: [GhostOrb, FreezingTemperatures, DOTSProjector]
    },
    {
      id: 12,
      name: "Oni",
      evidence: [EMFLevel5, FreezingTemperatures, DOTSProjector]
    },
    {
      id: 13,
      name: "Hantu",
      evidence: [Fingerprints, GhostOrb, FreezingTemperatures]
    },
    {
      id: 14,
      name: "Yokai",
      evidence: [SpiritBox, GhostOrb, DOTSProjector]
    },
    {
      id: 15,
      name: "Goryo",
      evidence: [EMFLevel5, Fingerprints, DOTSProjector]
    },
    {
      id: 16,
      name: "Myling",
      evidence: [EMFLevel5, Fingerprints, GhostWriting]
    },
    {
      id: 17,
      name: "Onryo",
      evidence: [SpiritBox, GhostOrb, FreezingTemperatures]
    },
    {
      id: 18,
      name: "The Twins",
      evidence: [EMFLevel5, SpiritBox, FreezingTemperatures]
    },
    {
      id: 19,
      name: "Raiju",
      evidence: [EMFLevel5, GhostOrb, DOTSProjector]
    },
    {
      id: 20,
      name: "Obake",
      evidence: [EMFLevel5, Fingerprints, GhostOrb]
    },
    {
      id: 21,
      name: "Mimic",
      evidence: [SpiritBox, Fingerprints, FreezingTemperatures, GhostOrb]
    }
  ].sort((a, b) => a.name.localeCompare(b.name));
}

export default App;
