import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-phase-distribution',
  templateUrl: './phase-distribution.component.html',
  styleUrls: ['./phase-distribution.component.scss']
})
export class PhaseDistributionComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }
  
  phase: any ={};
  
  site_slug: any={};
  ngOnInit(): void {
    this.site_slug=this.route.parent?.parent?.snapshot.params.site_slug;
    this.phase = {graphType:'phase',site_slug:this.site_slug};
  }

}
