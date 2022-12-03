import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { Meta } from '@angular/platform-browser';
import { events } from '../../mocks/events';
import { software_projects } from '../../mocks/softwareprojects';
import * as smoothscroll from 'smoothscroll-polyfill';

// breakpoints to identify when viewport changes for responsive images
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

declare var $: any;



@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit, AfterViewInit {


  // isMobile : Boolean
  events = events.slice(0,3)
  // slice and pick only first four projects
  software_projects = software_projects.slice(0,4)
 


  constructor(private router: Router,private meta: Meta, public breakpointObserver: BreakpointObserver) {
    // kick off the polyfill to enable smooth scrolling on Safari, since it isnt supported natively
    smoothscroll.polyfill();
    console.log(events)

  }

  close_model(){
    $('.ui.modal')
  .modal('hide ');
  }

 
  ngAfterViewInit() {
    
  }

  bottomScroll(){
    // window.scrollTo(0,document.body.scrollHeight);
    window.scrollTo({
      top: document.body.scrollHeight,
      left: 0,
      behavior: 'smooth'
    })
  }

  viewProject(event:any, id:any) {
    this.router.navigate([software_projects[id].project_page])
  }


  ngOnInit() {
    window.scrollTo(0,0);
    //   if (window.screen.width > 500) { 
    //     this.isMobile = true;
    //     console.log(this.isMobile)
    // }

  

    // code to detect screen this.breakpoint widths and generate appropriate url to load right image format from cloudinarry
    // works with an observable so values update in realtime ad width changes,not only on load
    //entire breakpoints logic can probaly be eliminated by setting w_auto on all urls, so cloudinary does the width itself
    
    // this.breakpointObserver.observe([
    //   Breakpoints.XSmall,
    //   Breakpoints.Small,
    //   Breakpoints.Medium,
    //   Breakpoints.Large,
    //   Breakpoints.XLarge
    // ]).subscribe(result => {
    //   if (result.breakpoints[Breakpoints.XSmall]) {
    //     // for research project splash screens
    //     research_projects.forEach(element => {
    //       console.log(Breakpoints.XSmall, element.cover_art)
    //     });

    //     // for software project splash screens
    //     software_projects.forEach(element => {
    //       console.log(Breakpoints.XSmall, element.cover_art)
    //     });
       
    //   }
    //   if (result.breakpoints[Breakpoints.Small]) {
    //     research_projects.forEach(element => {
    //       console.log(Breakpoints.XSmall, element.cover_art)
    //     });

    //      // for software project splash screens
    //      software_projects.forEach(element => {
    //       console.log(Breakpoints.XSmall, element.cover_art)
    //     });
    //   }
    //   if (result.breakpoints[Breakpoints.Medium]) {
    //     research_projects.forEach(element => {
    //       console.log(Breakpoints.XSmall, element.cover_art)
    //     });

    //      // for software project splash screens
    //      software_projects.forEach(element => {
    //       console.log(Breakpoints.XSmall, element.cover_art)
    //     });
    //   }
    //   if (result.breakpoints[Breakpoints.Large]) {
    //     research_projects.forEach(element => {
    //       console.log(Breakpoints.XSmall, element.cover_art)
    //     });

    //      // for software project splash screens
    //      software_projects.forEach(element => {
    //       console.log(Breakpoints.XSmall, element.cover_art)
    //     });
    //   }
    //   if (result.breakpoints[Breakpoints.XLarge]) {
    //     research_projects.forEach(element => {
    //       console.log(Breakpoints.XSmall, element.cover_art)
    //     });

    //      // for software project splash screens
    //      software_projects.forEach(element => {
    //       console.log(Breakpoints.XSmall, element.cover_art)
    //     });
    //   }
    // });


    
  }


}
