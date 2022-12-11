import { Component } from '@angular/core';
import { software_projects } from '../../mocks/softwareprojects';

declare var $: any;

@Component({
  selector: 'app-iterative-page',
  templateUrl: './iterative-page.component.html',
  styleUrls: ['./iterative-page.component.scss']
})
export class IterativePageComponent {
  project = software_projects[3]

  constructor() { }

  ngOnInit() {
    window.scrollTo(0,0);
  }
}
