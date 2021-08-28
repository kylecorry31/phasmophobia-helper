import { Injectable } from "@angular/core";
import { Evidence } from "./app.component";

@Injectable({
  providedIn: "root",
})
export class EvidenceIconService {
  private evidenceIconMap: { [evidence: string]: string } = {
    "EMF Level 5": "settings_remote",
    "Spirit Box": "radio",
    "Ghost Writing": "menu_book",
    "Freezing Temperatures": "ac_unit",
    "Ghost Orb": "videocam",
    "Fingerprints": "fingerprint",
    "D.O.T.S Projector": "blur_on",
  };

  getIcon(evidence: Evidence): string {
    return this.evidenceIconMap[evidence];
  }
}
