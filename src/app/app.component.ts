import { Component } from '@angular/core';

type ActiveTab = 'basicInfo'|'advancedInfo';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {

  activeTab: ActiveTab = 'basicInfo';

  changeTab($event: Event, newActiveTab: ActiveTab) {
    $event.preventDefault();
    this.activeTab = newActiveTab;
  }

}
