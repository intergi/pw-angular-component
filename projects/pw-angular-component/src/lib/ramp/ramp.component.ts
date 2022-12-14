import { Component, Inject, Input, OnInit } from '@angular/core';
import { WINDOW } from '../core/services/window.service';

@Component({
  selector: 'ramp',
  templateUrl: './ramp.component.html',
  styleUrls: ['./ramp.component.css']
})
export class RampComponent implements OnInit {

  @Input() publisherId: string | undefined;
  @Input() id: string | undefined;

  constructor(@Inject(WINDOW) public window: Window) {

  }

  ngOnInit(): void {

    window.ramp = window.ramp || {};
    window.ramp.que = window.ramp.que || [];
    window.ramp.passiveMode = true;
    window._pwRampComponentLoaded = window._pwRampComponentLoaded || false;

    const oopUnits = [
      'trendi_slideshow',
      'trendi_video',
      'site_skin',
      'flex_leaderboard',
      'top_rail',
      'right_rail',
      'bottom_rail',
      'left_rail'
    ];


    // if (window._pwRampComponentLoaded)
    //   return;

    window._pwRampComponentLoaded = true;
    window.ramp.config = `https://config.playwire.com/${this.publisherId}/v2/websites/${this.id}/banner.json`;
    const configScript = document.createElement("script");
    // configScript.src = `https://cdn.intergient.com/${publisherId}/${id}/ramp.js`;
    configScript.src = 'https://cdn.intergient.com/ramp_core.js';
    document.head.appendChild(configScript);

    window.ramp.que.push(() => {
      window.ramp.addUnits([
        { type: 'trendi_slideshow' },
        { type: 'trendi_video' },
        { type: 'site_skin' },
        { type: 'flex_leaderboard' },
        { type: 'top_rail' },
        { type: 'right_rail' },
        { type: 'bottom_rail' },
        { type: 'left_rail' },
        // {type: 'behind_page'},
        // {type: 'in_image'},
        // {type: 'above_page'},
        // {type: 'in_content'},
        // {type: 'inimg'},
        // {type: 'skin'}
      ])
        .then(() => {
          window.ramp.displayUnits();
        });
    });


  }

}
