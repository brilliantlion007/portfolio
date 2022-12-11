import { Component } from '@angular/core';
import { software_projects } from '../../mocks/softwareprojects';

declare var $: any;

@Component({
  selector: 'app-react-page',
  templateUrl: './react-page.component.html',
  styleUrls: ['./react-page.component.scss']
})
export class ReactPageComponent {
  project = software_projects[2]
  ngOnInit() {
    window.scrollTo(0,0);
  }
}
