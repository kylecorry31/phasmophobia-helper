import "./Ghost.css";
import EvidenceIcon from "./EvidenceIcon";

const Ghost = ({ ghost, currentEvidence }) => {
  return (
    <div
      className="ghost"
      onClick={() =>
        alert(
          ghost.name + "\n\n" + ghost.traits.map((it) => "- " + it).join("\n\n")
        )
      }
    >
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
};

export default Ghost;
