import {
  FreezingTemperatures,
  Fingerprints,
  SpiritBox,
  EMFLevel5,
  GhostWriting,
  GhostOrb,
  DOTSProjector,
} from "../evidence";
import {
  MdAcUnit,
  MdBlurOn,
  MdFingerprint,
  MdMenuBook,
  MdRadio,
  MdSettingsRemote,
  MdVideocam,
} from "react-icons/md";

export function EvidenceIcon({ evidence, className }) {
  switch (evidence) {
    case EMFLevel5:
      return (
        <MdSettingsRemote
          key={evidence}
          className={`ghost-evidence ${className}`}
        />
      );
    case SpiritBox:
      return (
        <MdRadio key={evidence} className={`ghost-evidence ${className}`} />
      );
    case GhostWriting:
      return (
        <MdMenuBook key={evidence} className={`ghost-evidence ${className}`} />
      );
    case FreezingTemperatures:
      return (
        <MdAcUnit key={evidence} className={`ghost-evidence ${className}`} />
      );
    case GhostOrb:
      return (
        <MdVideocam key={evidence} className={`ghost-evidence ${className}`} />
      );
    case Fingerprints:
      return (
        <MdFingerprint
          key={evidence}
          className={`ghost-evidence ${className}`}
        />
      );
    case DOTSProjector:
      return (
        <MdBlurOn key={evidence} className={`ghost-evidence ${className}`} />
      );
    default:
      return null;
  }
}
