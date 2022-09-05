import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModelDirective } from './model.directive';

@NgModule({
  imports: [CommonModule],
  declarations: [ModelDirective],
  exports: [ModelDirective],
})
export class SharedModule {}
