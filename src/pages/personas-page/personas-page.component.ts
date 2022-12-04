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

  constructor() { }

  ngOnInit() {
    window.scrollTo(0,0);
  }

}
