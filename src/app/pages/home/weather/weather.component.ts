import { Component, Input, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {

  @Input('data') data: any;

  imgPath = '/assets/icons/icon-google-weather.svg';

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {

  }

}
