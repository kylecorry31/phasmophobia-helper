import { Button } from "@mui/material";
import EvidenceIcon from "./EvidenceIcon";
import { useMemo } from "react";

const EvidenceButton = ({
  evidence,
  currentEvidence,
  ruledOutEvidence,
  remainingEvidence,
  toggleEvidence,
}) => {

  const isSelected = useMemo(() => {
    return currentEvidence.includes(evidence);
  }, [currentEvidence, evidence]);

  const isRuledOut = useMemo(() => {
    return ruledOutEvidence.includes(evidence);
  }, [ruledOutEvidence, evidence]);

  const isDisabled = useMemo(() => {
    return !(
      remainingEvidence.includes(evidence) ||
      currentEvidence.includes(evidence) ||
      ruledOutEvidence.includes(evidence)
    );
  }, [remainingEvidence, currentEvidence, ruledOutEvidence, evidence]);

  return (
    <div>
      <Button
        variant="outlined"
        color="inherit"
        startIcon={<EvidenceIcon evidence={evidence} />}
        className={`evidence-btn ${isSelected && "selected"} ${isRuledOut && "ruled-out"}`}
        onClick={toggleEvidence}
        disabled={isDisabled}
      >
        {evidence}
      </Button>
    </div>
  );
};

export default EvidenceButton;
