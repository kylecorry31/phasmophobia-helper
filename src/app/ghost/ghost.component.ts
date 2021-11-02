import { Component, HostListener, Input, OnInit } from '@angular/core';
import { Evidence } from '../models/evidence';
import { Ghost } from '../models/ghost';

@Component({
  selector: 'app-ghost',
  templateUrl: './ghost.component.html',
  styleUrls: ['./ghost.component.scss']
})
export class GhostComponent implements OnInit {

  @Input() ghost: Ghost;
  @Input() currentEvidence: Evidence[];

  @HostListener("click")
  onClick(){
    alert(this.ghost.name + "\n\n" + this.ghost.traits.map(it => "- " + it).join("\n\n"));
  }

  constructor() { }

  ngOnInit() {
  }

}
