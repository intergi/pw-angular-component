import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ramp-unit',
  templateUrl: './ramp-unit.component.html',
  styleUrls: ['./ramp-unit.component.css']
})

export class RampUnitComponent implements OnInit {

  @Input() type: string | undefined;
  @Input() selectorId: string | undefined;
  @Input() cssClass: string | undefined;

  constructor() {
  }

  ngOnInit(): void {

    window.ramp.que.push(() => {
      window.ramp.addUnits([
        {
          type: this.type,
          selectorId: this.selectorId
        }
      ]).catch((e: any) => {

        console.warn(e);

      }).finally(() => {

        window.ramp.displayUnits();

      });
    });
  }

}
