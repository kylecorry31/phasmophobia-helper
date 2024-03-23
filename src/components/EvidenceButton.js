import { Button } from "@mui/material";
import { EvidenceIcon } from "./EvidenceIcon";

export function EvidenceButton({
  evidence,
  selected,
  ruledOut,
  disabled,
  onClick,
}) {
  return (
    <Button
      variant="outlined"
      color="inherit"
      startIcon={<EvidenceIcon evidence={evidence} />}
      className={`evidence-btn ${selected && "selected"} ${
        ruledOut && "ruled-out"
      }`}
      onClick={onClick}
      disabled={disabled}
    >
      {evidence}
    </Button>
  );
}
