import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';

import { IconsProviderModule } from '../../icons-provider.module';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';

@NgModule({
  declarations: [MainComponent],
  imports: [
    CommonModule,
    IconsProviderModule,
    NzLayoutModule,
    NzMenuModule,
  ]
})
export class DashboardModule { }
