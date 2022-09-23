import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ramp-unit',
  templateUrl: './ramp-unit.component.html',
  styleUrls: ['./ramp-unit.component.css']
})
export class RampUnitComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {

    window.ramp.que.push(() => {
      window.ramp.addUnits([
        {
          type: 'leaderboard_atf',
          selectorId: 'leaderboard_atf'
        }
      ]).catch((e) => {
        console.warn(e);
      }).finally(() => {
        window.ramp.displayUnits();
      });
    });
  }

}
