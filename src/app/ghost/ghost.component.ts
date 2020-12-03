import { Component, Input, OnInit } from '@angular/core';
import { Ghost, Evidence } from '../app.component'

@Component({
  selector: 'app-ghost',
  templateUrl: './ghost.component.html',
  styleUrls: ['./ghost.component.scss']
})
export class GhostComponent implements OnInit {

  @Input() ghost: Ghost;
  @Input() currentEvidence: Evidence[];

  constructor() { }

  ngOnInit() {
  }

}
