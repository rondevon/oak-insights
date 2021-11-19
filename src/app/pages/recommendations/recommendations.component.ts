import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-recommendations',
  templateUrl: './recommendations.component.html',
  styleUrls: ['./recommendations.component.scss'],
})
export class RecommendationsComponent implements OnInit {
  monthsList: any[] = [];

  constructor() {}

  ngOnInit(): void {
    this.monthsList = [
      {
        month: 'January 2021',
        data: [
          {
            title: `Some of the ACs are consuming more than the manufacturers ratings. Please consider to clean and
              service the HVAC systems.`,
            description: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis excepturi incidunt ipsum deleniti labore, tempore non nam doloribus blanditiis veritatis illo autem iure aliquid ullam rem tenetur deserunt velit culpa? `,
          },
          { title: `Some of the ACs are consuming more than the manufacturers ratings. Please consider to clean and
          service the HVAC systems.`, description: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis excepturi incidunt ipsum deleniti labore, tempore non nam doloribus blanditiis veritatis illo autem iure aliquid ullam rem tenetur deserunt velit culpa?` },
          { title: `Some of the ACs are consuming more than the manufacturers ratings. Please consider to clean and
          service the HVAC systems.` },
        ],
      },
      {
        month: 'February 2021',
        data: [
          {
            title: `Some of the ACs are consuming more than the manufacturers ratings. Please consider to clean and
              service the HVAC systems.`,
            description: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis excepturi incidunt ipsum deleniti labore, tempore non nam doloribus blanditiis veritatis illo autem iure aliquid ullam rem tenetur deserunt velit culpa? `,
          },
          { title: `Some of the ACs are consuming more than the manufacturers ratings. Please consider to clean and
          service the HVAC systems.`, description: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis excepturi incidunt ipsum deleniti labore, tempore non nam doloribus blanditiis veritatis illo autem iure aliquid ullam rem tenetur deserunt velit culpa?` },
          { title: `Some of the ACs are consuming more than the manufacturers ratings. Please consider to clean and
          service the HVAC systems.` },
        ],
      },
      {
        month: 'April 2021',
        data: [
          {
            title: `Some of the ACs are consuming more than the manufacturers ratings. Please consider to clean and
              service the HVAC systems.`,
            description: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis excepturi incidunt ipsum deleniti labore, tempore non nam doloribus blanditiis veritatis illo autem iure aliquid ullam rem tenetur deserunt velit culpa? `,
          },
          { title: `Some of the ACs are consuming more than the manufacturers ratings. Please consider to clean and
          service the HVAC systems.`, description: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis excepturi incidunt ipsum deleniti labore, tempore non nam doloribus blanditiis veritatis illo autem iure aliquid ullam rem tenetur deserunt velit culpa?` },
          { title: `Some of the ACs are consuming more than the manufacturers ratings. Please consider to clean and
          service the HVAC systems.` },
        ],
      },
      {
        month: 'March 2021',
        data: [
          {
            title: `Some of the ACs are consuming more than the manufacturers ratings. Please consider to clean and
              service the HVAC systems.`,
            description: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis excepturi incidunt ipsum deleniti labore, tempore non nam doloribus blanditiis veritatis illo autem iure aliquid ullam rem tenetur deserunt velit culpa? `,
          },
          { title: `Some of the ACs are consuming more than the manufacturers ratings. Please consider to clean and
          service the HVAC systems.`, description: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis excepturi incidunt ipsum deleniti labore, tempore non nam doloribus blanditiis veritatis illo autem iure aliquid ullam rem tenetur deserunt velit culpa?` },
          { title: `Some of the ACs are consuming more than the manufacturers ratings. Please consider to clean and
          service the HVAC systems.` },
        ],
      },
    ];
    // this.monthsList = [
    //   {
    //     month: 'January 2021',
    //     title: [
    //       `Some of the ACs are consuming more than the manufacturers ratings. Please consider to clean and
    //   service the HVAC systems.`,
    //     ],
    //     description: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis excepturi incidunt ipsum deleniti labore, tempore non nam doloribus blanditiis veritatis illo autem iure aliquid ullam rem tenetur deserunt velit culpa? `,
    //   },
    //   {
    //     title: 'February 2021',
    //     descriptions: [
    //       `Some of the ACs are consuming more than the manufacturers ratings. Please consider to clean and
    //   service the HVAC systems.`,
    //     ],
    //   },
    //   {
    //     title: 'April 2021',
    //     descriptions: [
    //       `Some of the ACs are consuming more than the manufacturers ratings. Please consider to clean and
    //   service the HVAC systems.`,
    //     ],
    //   },
    //   {
    //     title: 'March 2021',
    //     descriptions: [
    //       `Some of the ACs are consuming more than the manufacturers ratings. Please consider to clean and
    //   service the HVAC systems.`,
    //     ],
    //   },
    //   {
    //     title: 'May 2021',
    //     descriptions: [
    //       `Some of the ACs are consuming more than the manufacturers ratings. Please consider to clean and
    //   service the HVAC systems.`,
    //     ],
    //   },
    //   {
    //     title: 'June 2021',
    //     descriptions: [
    //       `Some of the ACs are consuming more than the manufacturers ratings. Please consider to clean and
    //   service the HVAC systems.`,
    //     ],
    //   },
    //   {
    //     title: 'July 2021',
    //     descriptions: [
    //       `Voltage is varying more than 250 V which is higher than the desired range. We highly recommend
    //   you to install voltage optimizer to optimize the voltage and reduce cost in the process.`,
    //       `
    //   HVAC are observed to be in operation even during non-operating hours. Please consider to switch
    //   of the HVACs when not required.`,
    //     ],
    //   },
    //   {
    //     title: 'August 2021',
    //     descriptions: [
    //       `Some of the ACs are consuming more than the manufacturers ratings. Please consider to clean and
    //   service the HVAC systems.`,
    //     ],
    //   },
    //   {
    //     title: 'September 2021',
    //     descriptions: [
    //       `Some of the ACs are consuming more than the manufacturers ratings. Please consider to clean and
    //   service the HVAC systems.`,
    //     ],
    //   },
    //   {
    //     title: 'October 2021',
    //     descriptions: [
    //       `Some of the ACs are consuming more than the manufacturers ratings. Please consider to clean and
    //   service the HVAC systems.`,
    //     ],
    //   },
    //   {
    //     title: 'November 2021',
    //     descriptions: [
    //       `Some of the ACs are consuming more than the manufacturers ratings. Please consider to clean and
    //   service the HVAC systems.`,
    //     ],
    //   },
    //   {
    //     title: 'December 2021',
    //     descriptions: [
    //       `Some of the ACs are consuming more than the manufacturers ratings. Please consider to clean and
    //   service the HVAC systems.`,
    //     ],
    //   },
    // ];
  }
}
