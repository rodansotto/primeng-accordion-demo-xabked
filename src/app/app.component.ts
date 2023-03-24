import { Component, ViewEncapsulation } from '@angular/core';
import { MessageService } from 'primeng/api';

interface Tab {
  name: string;
  index: number;
  disabled: boolean;
  status: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [MessageService],
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent {
  activeState: boolean[] = [true, false, false];

  tabs: Tab[];
  optionalTabs: Tab[];
  selectedTab: number;
  selectedOptionalTab: number;

  aa_q1_options: any[];
  aa_q1_value: string;
  aa_q1no1_values: any[] = [];
  aa_q1yes1_values: any[] = [];
  aa_q1yes2_value: string;
  aa_q1yes3_options: any[];
  aa_q1yes3_value: string;
  aa_q1yes3v1_values: any[] = [];
  aa_q1yes3v2_values: any[] = [];
  aa_q1yes3v3_values: any[] = [];

  no_yes_options: any[];

  constructor(private messageService: MessageService) {
    this.tabs = [
      { name: 'Electrical Defects', index: 0, disabled: false, status: 0 },
      { name: 'Details', index: 1, disabled: false, status: 0 },
      { name: 'Process Info', index: 2, disabled: false, status: 0 },
      { name: 'Tools', index: 3, disabled: false, status: 0 },
      { name: 'Abnormality Analysis', index: 4, disabled: false, status: 0 },
      { name: 'Root Causes', index: 5, disabled: false, status: 0 },
      { name: 'Containment', index: 6, disabled: false, status: 0 },
    ];
    this.selectedTab = 0;

    this.aa_q1_options = [{label: 'No (Work related problem)', value: 'no'}, {label: 'Yes (Troubleshooting related problem)', value: 'yes'}];

    this.no_yes_options = [{label: 'No', value: 'no'}, {label: 'Yes', value:'yes'}];

    this.aa_q1yes3_options = [
        {label: 'Troubleshooting error by T/M', value: '1'}, 
        {label: 'Troubleshooting error by troubleshooter', value:'2'},
        {label: 'Miscommunication between T/M and troubleshooter', value:'3'}
    ];

    this.optionalTabs = [
      { name: 'Comments', index: 0, disabled: false, status: 0 },
    ]
    this.selectedOptionalTab = -1;
  }

  onTabClose(event) {
    this.messageService.add({
      severity: 'info',
      summary: 'Tab Closed',
      detail: 'Index: ' + event.index,
    });
  }

  onTabOpen(event) {
    this.messageService.add({
      severity: 'info',
      summary: 'Tab Expanded',
      detail: 'Index: ' + event.index,
    });
  }

  toggle(index: number) {
    this.activeState[index] = !this.activeState[index];
  }

  previousTab(): void {
    if (this.selectedTab > 0) {
      this.selectedTab--;
    }
  }

  nextTab(): void {
    this.tabs[this.selectedTab].status = (this.selectedTab % 2) + 1;
    if (this.selectedTab < 6) {
        this.selectedTab++;
        // this.tabs[this.selectedTab].disabled = false;
    }    
  }

  tabClicked(): void {
    this.selectedOptionalTab = -1;
  }

  optionalTabClicked(): void {
    this.selectedTab = -1;
  }
}
