import { Pipe, PipeTransform } from '@angular/core';
import { Evidence } from './app.component';
import { EvidenceIconService } from './evidence-icon.service';

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
