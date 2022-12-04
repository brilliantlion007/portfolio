import { Component } from '@angular/core';
import { software_projects } from '../../mocks/softwareprojects';

declare var $: any;

@Component({
  selector: 'app-redesign-page',
  templateUrl: './redesign-page.component.html',
  styleUrls: ['./redesign-page.component.scss']
})
export class RedesignPageComponent {
  project = software_projects[1]

  constructor() { }

  ngOnInit() {
    window.scrollTo(0,0);
  }

}
