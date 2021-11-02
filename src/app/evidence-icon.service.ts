import { Injectable } from "@angular/core";
import { Evidence } from "./models/evidence";

@Injectable({
  providedIn: "root",
})
export class EvidenceIconService {

  getIcon(evidence: Evidence): string {
    switch(evidence){
      case Evidence.EMFLevel5:
        return "settings_remote";
      case Evidence.SpiritBox:
        return "radio";
      case Evidence.GhostWriting:
        return "menu_book";
      case Evidence.FreezingTemperatures:
        return "ac_unit";
      case Evidence.GhostOrb:
        return "videocam";
      case Evidence.Fingerprints:
        return "fingerprint";
      case Evidence.DOTSProjector:
        return "blur_on";
    }
  }
}
