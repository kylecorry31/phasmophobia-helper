import { Pipe, PipeTransform } from '@angular/core';
import { EvidenceIconService } from './evidence-icon.service';
import { Evidence } from './models/evidence';

@Pipe({
  name: 'evidenceIcon',
  pure: true
})
export class EvidenceIconPipe implements PipeTransform {

  constructor(private evidenceIconService: EvidenceIconService){}

  transform(evidence: Evidence): string {
    return this.evidenceIconService.getIcon(evidence);
  }

}
