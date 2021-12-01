import { Button } from "@material-ui/core";
import EvidenceIcon from "./EvidenceIcon";

const EvidenceButton = ({
  evidence,
  currentEvidence,
  ruledOutEvidence,
  remainingEvidence,
  toggleEvidence,
}) => {
  return (
    <div>
      <Button
        variant="outlined"
        startIcon={<EvidenceIcon evidence={evidence}/>}
        className={`evidence-btn ${
          currentEvidence.includes(evidence) && "selected"
        } ${ruledOutEvidence.includes(evidence) && "ruled-out"}`}
        onClick={toggleEvidence}
        disabled={
          !(
            remainingEvidence.includes(evidence) ||
            currentEvidence.includes(evidence) ||
            ruledOutEvidence.includes(evidence)
          )
        }
      >
       {evidence}
      </Button>
    </div>
  );
};

export default EvidenceButton;
