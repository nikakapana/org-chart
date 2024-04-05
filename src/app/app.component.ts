import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {NgxOrgChartModule} from "./org-chart/src/lib/ngx-org-chart/ngx-org-chart.module";
import {INode} from "./org-chart/src/lib/node";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgxOrgChartModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.sass'
})
export class AppComponent {
  title = 'org-chart';

  test($event: INode) {
    console.log('test')
  }

  nodes: any = [
    {
      name: 'Sundar Pichai',
      cssClass: 'ngx-org-ceo',
      image: '  ',
      title: 'Chief Executive Officer',
      childs: [
        {
          name: 'Thomas Kurian',
          cssClass: 'ngx-org-ceo',
          image: '  ',
          title: 'CEO, Google Cloud',
        },
        {
          name: 'Susan Wojcicki',
          cssClass: 'ngx-org-ceo',
          image: '  ',
          title: 'CEO, YouTube',
          childs: [
            {
              name: 'Beau Avril',
              cssClass: 'ngx-org-head',
              image: '  ',
              title: 'Global Head of Business Operations',
              childs: []
            },
            {
              name: 'Tara Walpert Levy',
              cssClass: 'ngx-org-vp',
              image: '  ',
              title: 'VP, Agency and Brand Solutions',
              childs: []
            },
            {
              name: 'Ariel Bardin',
              cssClass: 'ngx-org-vp',
              image: '  ',
              title: 'VP, Product Management',
              childs: []
            }
          ]
        },
        {
          name: 'Jeff Dean',
          cssClass: 'ngx-org-head',
          image: '  ',
          title: 'Head of Artificial Intelligence',
          childs: [
            {
              name: 'David Feinberg',
              cssClass: 'ngx-org-ceo',
              image: '  ',
              title: 'CEO, Google Health',
              childs: []
            }
          ]
        }
      ]
    },
    {
      name: 'Sundar Pichai',
      cssClass: 'ngx-org-ceo',
      image: '  ',
      title: 'Chief Executive Officer',
      childs: [
        {
          name: 'Thomas Kurian',
          cssClass: 'ngx-org-ceo',
          image: '  ',
          title: 'CEO, Google Cloud',
        },
        {
          name: 'Susan Wojcicki',
          cssClass: 'ngx-org-ceo',
          image: '  ',
          title: 'CEO, YouTube',
          childs: [
            {
              name: 'Beau Avril',
              cssClass: 'ngx-org-head',
              image: '  ',
              title: 'Global Head of Business Operations',
              childs: []
            },
            {
              name: 'Tara Walpert Levy',
              cssClass: 'ngx-org-vp',
              image: '  ',
              title: 'VP, Agency and Brand Solutions',
              childs: []
            },
            {
              name: 'Ariel Bardin',
              cssClass: 'ngx-org-vp',
              image: '  ',
              title: 'VP, Product Management',
              childs: []
            }
          ]
        },
        {
          name: 'Jeff Dean',
          cssClass: 'ngx-org-head',
          image: '  ',
          title: 'Head of Artificial Intelligence',
          childs: [
            {
              name: 'David Feinberg',
              cssClass: 'ngx-org-ceo',
              image: '  ',
              title: 'CEO, Google Health',
              childs: []
            }
          ]
        }
      ]
    }
  ];
}
