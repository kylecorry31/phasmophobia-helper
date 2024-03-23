import "./Ghost.css";
import { EvidenceIcon } from "./EvidenceIcon";

export function Ghost({ ghost, currentEvidence }) {
  return (
    <div className="ghost">
      <h4 className="ghost-name">{ghost.name}</h4>
      <div>
        <small>
          {ghost.evidence.map((evidence) => (
            <EvidenceIcon
              key={evidence}
              evidence={evidence}
              className={currentEvidence.includes(evidence) && "found"}
            />
          ))}
        </small>
      </div>
    </div>
  );
}
