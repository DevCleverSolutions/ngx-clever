import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TruncatePipe } from './pipes/truncate/truncate.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    TruncatePipe
  ],
  exports: [
    TruncatePipe
  ]
})
export class SampleModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SampleModule,
      providers: []
    };
  }
}
