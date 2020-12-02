import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { ArrayFormatPipe } from './array-format.pipe';
import { GhostComponent } from './ghost/ghost.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    ArrayFormatPipe,
    GhostComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatTooltipModule,
    RouterModule.forRoot([], { relativeLinkResolution: 'legacy' })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
