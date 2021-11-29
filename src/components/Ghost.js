import "./Ghost.css";
import { MdAcUnit, MdBlurOn, MdFingerprint, MdMenuBook, MdRadio, MdSettingsRemote, MdVideocam } from "react-icons/md";
import {FreezingTemperatures, Fingerprints, SpiritBox, EMFLevel5, GhostWriting, GhostOrb, DOTSProjector} from '../evidence'

const Ghost = ({ ghost, currentEvidence }) => {
  return (
    <div className="ghost">
      <h4 className="ghost-name">{ghost.name}</h4>
      <div>
        <small>
          {ghost.evidence.map((evidence) => (
            getEvidenceIcon(evidence, currentEvidence.includes(evidence))
          ))}
        </small>
      </div>
    </div>
  );
};

function getEvidenceIcon(evidence, found){
    switch(evidence){
        case EMFLevel5:
            return <MdSettingsRemote key={evidence} className={`ghost-evidence ${found && 'found'}`}/>;
        case SpiritBox:
            return <MdRadio key={evidence} className={`ghost-evidence ${found && 'found'}`}/>;
        case GhostWriting:
            return <MdMenuBook key={evidence} className={`ghost-evidence ${found && 'found'}`}/>;
        case FreezingTemperatures:
            return <MdAcUnit key={evidence} className={`ghost-evidence ${found && 'found'}`}/>;
        case GhostOrb:
            return <MdVideocam key={evidence} className={`ghost-evidence ${found && 'found'}`}/>;
        case Fingerprints:
            return <MdFingerprint key={evidence} className={`ghost-evidence ${found && 'found'}`}/>;
        case DOTSProjector:
            return <MdBlurOn key={evidence} className={`ghost-evidence ${found && 'found'}`}/>;
        default:
            return null;
    }
}

export default Ghost;
