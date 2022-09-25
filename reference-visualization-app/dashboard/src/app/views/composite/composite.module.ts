import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompositeRoutingModule } from './composite-routing.module';
import { CompositeComponent } from './composite.component';
import { CompositeReportComponent } from './pages/composite-report/composite-report.component';


import { MatTabsModule } from '@angular/material/tabs';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { MatButtonModule } from '@angular/material/button';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    CompositeComponent,
    CompositeReportComponent
  ],
  imports: [
    CommonModule,
    CompositeRoutingModule,
    SharedModule,
    MatTabsModule,
    FormsModule,
    ReactiveFormsModule,
    NgSelectModule,
    MatButtonModule,
  ]
})
export class CompositeModule { }