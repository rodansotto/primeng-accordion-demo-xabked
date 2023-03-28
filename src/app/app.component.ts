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

  no_yes_options: any[];

  d_team_options: any[];
  d_shift_options: any[];
  d_day_options: any[];
  d_qtr_options: any[];
  d_timing_optons: any[];
  d_status_options: any[];
  d_q1_options: any[];
  d_q2_options: any[];
  d_q3_options: any[];

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
    this.selectedTab = 1;

    this.d_team_options = [{label: 'A Team', value: 'a'}, {label: 'B Team', value: 'b'}];
    this.d_shift_options = [{label: 'Day Shift', value: 'd'}, {label: 'Night Shift', value: 'n'}];
    this.d_day_options = [{label: 'Monday', value: 'mon'}, {label: 'Tuesday', value: 'tue'}, {label: 'Wednesday', value: 'wed'}, {label: 'Thursday', value: 'thu'}, {label: 'Friday', value: 'fri'}, {label: 'Saturday', value: 'sat'}, {label: 'Sunday', value: 'sun'}];
    this.d_qtr_options = [{label: 'Q1', value: 'q1'}, {label: 'Q2', value: 'q2'}, {label: 'Q3', value: 'q3'}, {label: 'Q4', value: 'q4'}, {label: 'OT', value: 'ot'}];
    this.d_timing_optons = [{label: '5 min Pre Break / EOS', value: '1'}, {label: '5 min Post Break / SOS', value: '2'}, {label: '	Not Applicable', value: '3'}];
    this.d_status_options = [{label: 'Reg T/M', value: '1'}, {label: 'New T/M in Training', value: '2'}, {label: 'Reg T/M Rotation Training', value: '3'}, {label: 'T/L', value: '4'}, {label: 'Other:', value: '5'}];
    this.d_q1_options = [{label: '< 3 months, no GPC training', value: '1'}, {label: '> 3 months, no GPC training', value: '2'}, {label: '< 3 months, with GPC training', value: '3'}, {label: '> 3 months, with GPC training', value: '4'}];

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
