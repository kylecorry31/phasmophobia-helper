import { Component, OnInit } from "@angular/core";
import { Evidence } from "./models/evidence";
import { Ghost } from "./models/ghost";
import { GhostService } from "./services/ghost.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent implements OnInit {
  evidence: Evidence[] = Object.values(Evidence);

  possibleGhosts: Ghost[];
  remainingEvidence: Evidence[];
  currentEvidence: Evidence[] = [];
  ruledOutEvidence: Evidence[] = [];

  constructor(private ghostService: GhostService) {}

  ngOnInit(): void {
    this.reset();
  }

  toggleEvidence(value: Evidence) {
    if (this.currentEvidence.includes(value)) {
      this.currentEvidence.splice(this.currentEvidence.indexOf(value), 1);
      this.ruledOutEvidence.push(value);
    } else if (this.ruledOutEvidence.includes(value)) {
      this.ruledOutEvidence.splice(this.ruledOutEvidence.indexOf(value), 1);
    } else {
      this.currentEvidence.push(value);
    }

    this.identifyGhost();
  }

  reset() {
    this.currentEvidence = [];
    this.ruledOutEvidence = [];
    this.identifyGhost();
  }

  identifyGhost() {
    this.possibleGhosts = this.ghostService.identifyPossibleGhosts(
      this.currentEvidence,
      this.ruledOutEvidence
    );
    this.remainingEvidence = this.ghostService.getRemainingEvidence(
      this.currentEvidence,
      this.ruledOutEvidence
    );
  }
}
