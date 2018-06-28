import { NgModule } from '@angular/core';
import { NgxCleverComponent } from './ngx-clever.component';
import { TruncatePipe } from './pipes/truncate.pipe';

@NgModule({
  imports: [
  ],
  declarations: [NgxCleverComponent, TruncatePipe],
  exports: [NgxCleverComponent]
})
export class NgxCleverModule { }
