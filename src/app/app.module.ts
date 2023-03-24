import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent }   from './app.component';

import { ButtonModule } from 'primeng/button';
import { AccordionModule } from 'primeng/accordion';
import { ToastModule } from 'primeng/toast';
import {PanelModule} from 'primeng/panel';
import {SkeletonModule} from 'primeng/skeleton';
import {ImageModule} from 'primeng/image';
import {InplaceModule} from 'primeng/inplace';
import {OverlayPanelModule} from 'primeng/overlaypanel';
import {ListboxModule} from 'primeng/listbox';
import { FormsModule } from '@angular/forms';
import {SelectButtonModule} from 'primeng/selectbutton';
import {CheckboxModule} from 'primeng/checkbox';
import {InputTextModule} from 'primeng/inputtext';
import {InputTextareaModule} from 'primeng/inputtextarea';
import {RadioButtonModule} from 'primeng/radiobutton';
import {BadgeModule} from 'primeng/badge';
import {ToolbarModule} from 'primeng/toolbar';
import {TooltipModule} from 'primeng/tooltip';
import {ScrollPanelModule} from 'primeng/scrollpanel';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AccordionModule,
    ButtonModule,
    ToastModule,
    PanelModule,
    SkeletonModule,
    ImageModule,
    InplaceModule,
    OverlayPanelModule,
    ListboxModule,
    FormsModule,
    SelectButtonModule,
    CheckboxModule,
    InputTextModule,
    InputTextareaModule,
    RadioButtonModule,
    BadgeModule,
    ToolbarModule,
    TooltipModule,
    ScrollPanelModule
    ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
