import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ClientLayoutComponent } from './client-layout/client-layout.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';
import { LayoutRoutingModule } from './layout-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    RouterModule,
    LayoutRoutingModule
  ],
  exports: [
    FooterComponent,
    HeaderComponent,
    SidebarComponent,
    ClientLayoutComponent
  ],
  declarations: [
    FooterComponent,
    HeaderComponent,
    SidebarComponent,
    ClientLayoutComponent
  ]
})
export class LayoutModule { }
