import { Component } from '@angular/core';
import { software_projects } from '../../mocks/softwareprojects';

declare var $: any;

@Component({
  selector: 'app-personas-page',
  templateUrl: './personas-page.component.html',
  styleUrls: ['./personas-page.component.scss']
})
export class PersonasPageComponent {
  project = software_projects[0]
//   {
//     id: 2,
//     title: "Project Food: Cross platform ecosystem for food vendors",
//     cover_art: "assets/project_food/food_splash.png",
//     lazyloadimg: 'brightred'
// }

  constructor() { }

  ngOnInit() {
    window.scrollTo(0,0);
  }

}
