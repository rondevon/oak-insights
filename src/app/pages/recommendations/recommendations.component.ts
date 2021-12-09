import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';


@Component({
  selector: 'app-recommendations',
  templateUrl: './recommendations.component.html',
  styleUrls: ['./recommendations.component.scss'],
})
export class RecommendationsComponent implements OnInit {
  monthsList: any[] = [];
  pipe = new DatePipe('en-GB');
  data: any;
  selectedMonth: any = {
    month: this.pipe.transform(new Date(), 'MMMM'),
    year: this.pipe.transform(new Date(), 'YYYY')
  }
  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.getRecommendations(this.selectedMonth).subscribe((data: any) => { 
      console.log(data);
      this.monthsList = data.data.map((element: any) => {
        return ({
          month: element.month + element.year,
          data: [{
            title: element.title,
            description: element.description
          }]
        })
      })
      // this.data = [
      //   {
      //     month: 'April 2021',
      //     data: [
      //       {
      //         title: `Some of the ACs are consuming more than the manufacturers ratings. Please consider to clean and
      //           service the HVAC systems.`,
      //         description: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis excepturi incidunt ipsum deleniti labore, tempore non nam doloribus blanditiis veritatis illo autem iure aliquid ullam rem tenetur deserunt velit culpa? `,
      //       },
      //       { title: `Some of the ACs are consuming more than the manufacturers ratings. Please consider to clean and
      //       service the HVAC systems.`, description: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis excepturi incidunt ipsum deleniti labore, tempore non nam doloribus blanditiis veritatis illo autem iure aliquid ullam rem tenetur deserunt velit culpa?` },
      //       { title: `Some of the ACs are consuming more than the manufacturers ratings. Please consider to clean and
      //       service the HVAC systems.` },
      //     ],
      //   },
      //   {
      //     month: 'February 2021',
      //     data: [
      //       {
      //         title: `Some of the ACs are consuming more than the manufacturers ratings. Please consider to clean and
      //           service the HVAC systems.`,
      //         description: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis excepturi incidunt ipsum deleniti labore, tempore non nam doloribus blanditiis veritatis illo autem iure aliquid ullam rem tenetur deserunt velit culpa? `,
      //       },
      //       { title: `Some of the ACs are consuming more than the manufacturers ratings. Please consider to clean and
      //       service the HVAC systems.`, description: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis excepturi incidunt ipsum deleniti labore, tempore non nam doloribus blanditiis veritatis illo autem iure aliquid ullam rem tenetur deserunt velit culpa?` },
      //       { title: `Some of the ACs are consuming more than the manufacturers ratings. Please consider to clean and
      //       service the HVAC systems.` },
      //     ],
      //   },
      //   {
      //     month: 'April 2021',
      //     data: [
      //       {
      //         title: `Some of the ACs are consuming more than the manufacturers ratings. Please consider to clean and
      //           service the HVAC systems.`,
      //         description: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis excepturi incidunt ipsum deleniti labore, tempore non nam doloribus blanditiis veritatis illo autem iure aliquid ullam rem tenetur deserunt velit culpa? `,
      //       },
      //       { title: `Some of the ACs are consuming more than the manufacturers ratings. Please consider to clean and
      //       service the HVAC systems.`, description: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis excepturi incidunt ipsum deleniti labore, tempore non nam doloribus blanditiis veritatis illo autem iure aliquid ullam rem tenetur deserunt velit culpa?` },
      //       { title: `Some of the ACs are consuming more than the manufacturers ratings. Please consider to clean and
      //       service the HVAC systems.` },
      //     ],
      //   },
      //   {
      //     month: 'March 2021',
      //     data: [
      //       {
      //         title: `Some of the ACs are consuming more than the manufacturers ratings. Please consider to clean and
      //           service the HVAC systems.`,
      //         description: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis excepturi incidunt ipsum deleniti labore, tempore non nam doloribus blanditiis veritatis illo autem iure aliquid ullam rem tenetur deserunt velit culpa? `,
      //       },
      //       { title: `Some of the ACs are consuming more than the manufacturers ratings. Please consider to clean and
      //       service the HVAC systems.`, description: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis excepturi incidunt ipsum deleniti labore, tempore non nam doloribus blanditiis veritatis illo autem iure aliquid ullam rem tenetur deserunt velit culpa?` },
      //       { title: `Some of the ACs are consuming more than the manufacturers ratings. Please consider to clean and
      //       service the HVAC systems.` },
      //     ],
      //   },
      // ];
    });
  }
}


