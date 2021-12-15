import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';


@Component({
  selector: 'app-myprofile',
  templateUrl: './myprofile.component.html',
  styleUrls: ['./myprofile.component.scss']
})
export class MyprofileComponent implements OnInit, AfterViewInit {
  data: any;
  site: any;
  dataSource: MatTableDataSource<any> = new MatTableDataSource();
  @ViewChild('paginator') paginator: any;
  @ViewChild(MatSort) sort: any;
  displayedColumns: string[] = ['site_id', 'day', 'start', 'end', 'type'];


  constructor(private apiService: ApiService) { }
  
  ngAfterViewInit(): void {    
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  ngOnInit(): void {
    this.apiService.getProfile().subscribe((data: any) => {
     this.data = data.data;
    });
  }

  open(site: any): void {
    this.site = site;
    this.dataSource = new MatTableDataSource(site.operating_hours);
    this.dataSource.sort = this.sort;
    setTimeout(() => this.dataSource.paginator = this.paginator);
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
    console.log(this.dataSource.data);
    
  }
}
