import { Button } from "@material-ui/core";
import {
  MdAcUnit,
  MdBlurOn,
  MdFingerprint,
  MdMenuBook,
  MdRadio,
  MdSettingsRemote,
  MdVideocam,
} from "react-icons/md";
import {FreezingTemperatures, Fingerprints, SpiritBox, EMFLevel5, GhostWriting, GhostOrb, DOTSProjector} from '../evidence'


const Evidence = ({
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
        startIcon={getEvidenceIcon(evidence)}
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

function getEvidenceIcon(evidence) {
  switch (evidence) {
    case EMFLevel5:
      return <MdSettingsRemote key={evidence} className="ghost-evidence" />;
    case SpiritBox:
      return <MdRadio key={evidence} className="ghost-evidence" />;
    case GhostWriting:
      return <MdMenuBook key={evidence} className="ghost-evidence" />;
    case FreezingTemperatures:
      return <MdAcUnit key={evidence} className="ghost-evidence" />;
    case GhostOrb:
      return <MdVideocam key={evidence} className="ghost-evidence" />;
    case Fingerprints:
      return <MdFingerprint key={evidence} className="ghost-evidence" />;
    case DOTSProjector:
      return <MdBlurOn key={evidence} className="ghost-evidence" />;
    default:
      return null;
  }
}

export default Evidence;
