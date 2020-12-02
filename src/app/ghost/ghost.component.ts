import { Component, Input, OnInit } from '@angular/core';
import { Ghost, Evidence } from '../app.component'

@Component({
  selector: 'app-ghost',
  templateUrl: './ghost.component.html',
  styleUrls: ['./ghost.component.scss']
})
export class GhostComponent implements OnInit {

  evidenceIconMap: { [evidence: string]: string } = {
    "EMF Level 5": "settings_remote",
    "Spirit Box": "radio",
    "Ghost Writing": "menu_book",
    "Freezing Temperatures": "ac_unit",
    "Ghost Orb": "videocam",
    "Fingerprints": "fingerprint"
  }

  @Input() ghost: Ghost;
  @Input() currentEvidence: Evidence[];

  constructor() { }

  ngOnInit() {
  }

}
