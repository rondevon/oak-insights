import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import { Chart } from 'angular-highcharts';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
@Component({
  selector: 'app-multisite-new',
  templateUrl: './multisite-new.component.html',
  styleUrls: ['./multisite-new.component.scss'],
})
export class MultisiteNewComponent implements OnInit {
  dropdownList: any[] = [];
  selectedItems: any[] = [];
  dropdownSettings!: IDropdownSettings;

  pipe = new DatePipe('en-GB');
  selectedMonth: any = {
    month: this.pipe.transform(new Date(), 'MMMM', 'UTC'),
    year: this.pipe.transform(new Date(), 'YYYY', 'UTC'),
  };
  selectedComparisonMonth: any = {
    month: null,
    year: null,
  };
  minDate: Date = new Date();
  maxDate: Date = new Date();
  selectedDate: Date = new Date(new Date().setMonth(this.minDate.getMonth()- 1));
  selectedComparisonDate: Date = new Date(new Date().setMonth(this.minDate.getMonth()- 1));
  faCalendar = faCalendarAlt;
  data1: any;
  data2: any[] = [];
  data3: any[] = [];
  data: any[] = [];
  card6: {
    image: string;
    title: string;
    value: any;
    value_energy: any;
    unit: string;
    color: string;
  }[] = [];
  consumptionData: any;
  selectedType: string = 'energy';
  typeList: string[] = [
    'energy',
    'closed hours',
    'cost',
    'co2 emission',
    'maximum demand',
    'voltage',
    'power factor',
  ];
  sitesCombinedSelectedType: string = 'Energy';
  sitesCombinedtypeList: string[] = ['Energy', 'Cost'];
  energyData: any;
  maximumDemand: any;
  selected: any;
  chart: any;
  energy: any[] = [];
  cost: any[] = [];
  lat: number[] = [];
  lng: number[] = [];
  energy_sorted_data = [{}];
  cost_sorted_data = [{}];

  duration: any = 30;
  bntStyle1: String = 'open-days-button';
  bntStyle2: String = 'closed-days-button';
  bntStyle3: String = 'closed-days-button';
  bntStyle4: String = 'closed-days-button';
  x: any[] = [];
  maximumDemandenergy: any;
  selectedIndex: number = 0;

  constructor() {}

  ngOnInit(): void {
    this.data2 = [
      {
        slug: 'site-lcc-old-street-66244',
        name: 'LCC Old Street',
        seq: ['Energy'],
        x_axis: [
          '2022-03-01',
          '2022-03-02',
          '2022-03-03',
          '2022-03-04',
          '2022-03-05',
          '2022-03-06',
          '2022-03-07',
          '2022-03-08',
          '2022-03-09',
          '2022-03-10',
          '2022-03-11',
          '2022-03-12',
          '2022-03-13',
          '2022-03-14',
          '2022-03-15',
          '2022-03-16',
          '2022-03-17',
          '2022-03-18',
          '2022-03-19',
          '2022-03-20',
          '2022-03-21',
          '2022-03-22',
          '2022-03-23',
          '2022-03-24',
          '2022-03-25',
          '2022-03-26',
          '2022-03-27',
          '2022-03-28',
          '2022-03-29',
          '2022-03-30',
          '2022-03-31',
        ],
        y_axis: null,
        values: [
          65.52, 63.77, 78.83, 106.53, 121.58, 90.89, 91.98, 63.55, 74.36,
          85.11, 115.1, 85.81, 89.99, 114.71, 103.48, 66.75, 131.98, 165.56,
          119.46, 93.37, 78.13, 61.93, 110.31, 149.54, 161.07, 122.96, 51.16,
          59.26, 54.04, 62.62, 97.82,
        ],
      },
      {
        slug: 'site-lcc-shoreditch-66258',
        name: 'LCC Shoreditch',
        seq: ['Energy'],
        x_axis: [
          '2022-03-01',
          '2022-03-02',
          '2022-03-03',
          '2022-03-04',
          '2022-03-05',
          '2022-03-06',
          '2022-03-07',
          '2022-03-08',
          '2022-03-09',
          '2022-03-10',
          '2022-03-11',
          '2022-03-12',
          '2022-03-13',
          '2022-03-14',
          '2022-03-15',
          '2022-03-16',
          '2022-03-17',
          '2022-03-18',
          '2022-03-19',
          '2022-03-20',
          '2022-03-21',
          '2022-03-22',
          '2022-03-23',
          '2022-03-24',
          '2022-03-25',
          '2022-03-26',
          '2022-03-27',
          '2022-03-28',
          '2022-03-29',
          '2022-03-30',
          '2022-03-31',
        ],
        y_axis: null,
        values: [
          74.41, 74.8, 32.61, 63.11, 87.82, 54.23, 82.3, 61.95, 26.58, 16.21,
          20.53, 115.17, 98.04, 79.65, 64.48, 27.23, 52.17, 120.97, 123.39,
          68.45, 78.1, 45.95, 90.55, 91.78, 121.15, 94.82, 70.01, 65.21,
        ],
      },
      {
        slug: 'site-lcc-shoreditch-66258',
        name: 'LCC Shoreditch',
        seq: ['Energy'],
        x_axis: [
          '2022-03-01',
          '2022-03-02',
          '2022-03-03',
          '2022-03-04',
          '2022-03-05',
          '2022-03-06',
          '2022-03-07',
          '2022-03-08',
          '2022-03-09',
          '2022-03-10',
          '2022-03-11',
          '2022-03-12',
          '2022-03-13',
          '2022-03-14',
          '2022-03-15',
          '2022-03-16',
          '2022-03-17',
          '2022-03-18',
          '2022-03-19',
          '2022-03-20',
          '2022-03-21',
          '2022-03-22',
          '2022-03-23',
          '2022-03-24',
          '2022-03-25',
          '2022-03-26',
          '2022-03-27',
          '2022-03-28',
          '2022-03-29',
          '2022-03-30',
          '2022-03-31',
        ],
        y_axis: null,
        values: [
          17.19, 95.92, 85.26, 0.97, 94.17, 98.43, 35.26, 76.07, 27.76, 6.01,
          0.55, 3.85, 25.52, 16.14, 64.6, 126.4, 89.14, 50.71, 27.94, 35.53,
          29.17, 70.83, 4.39, 12.35, 0.9, 9.14, 50.45, 37.26, 35.7, 71.41,
          58.52,
        ],
      },
    ];

    this.x = [];

    this.data3 = [
      {
        slug: 'site-lcc-old-street-66244',
        name: 'LCC Old Street',
        location: '51.272226,-0.461734',
        energy: 1928,
        cost: 890,
      },
      {
        slug: 'site-lcc-oxford-circus-65297',
        name: 'LCC Oxford Circus',
        location: '51.300999,-2.210920',
        energy: 2890,
        cost: 1023,
      },
      {
        slug: 'site-lcc-shoreditch-66258',
        name: 'LCC Shoreditch',
        location: '54.786038,-2.035021',
        energy: 790,
        cost: 450,
      },
      {
        slug: 'site-lcc-site1-66258',
        name: 'LCC Site 1',
        location: '57.217750,-2.562717',
        energy: 1434,
        cost: 984,
      },
      {
        slug: 'site-lcc-site2-66258',
        name: 'LCC Site 2',
        location: '50.188770,-5.025268',
        energy: 3120,
        cost: 1200,
      },
      {
        slug: 'site-lcc-site3-66258',
        name: 'LCC Site 3',
        location: '54.786038,-2.035021',
        energy: 4223,
        cost: 1100,
      },
      {
        slug: 'site-lcc-site4-66258',
        name: 'LCC Site 4',
        location: '54.786038,-2.035021',
        energy: 860,
        cost: 1150,
      },
    ];

    this.switchChart();

    this.setLoadCurveData();
    this.dropdownList = this.data2.map((ele: any, i: number) => ({
      item_text: ele.name,
      item_id: i,
      item_slug: ele.slug
    }));

    this.selectedItems = [];
    this.dropdownSettings = {
      singleSelection: false,
      idField: 'item_id',
      textField: 'item_text',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 3,
      allowSearchFilter: true,
      limitSelection: 3,
    };
    this.updateMonth();
    this.data = [
      {
        slug: 'site-lcc-old-street-66244',
        name: 'LCC Old Street',
        stats: {
          energy_usage: 1792,
          closed_hours_conusmption: 866,
          phase_load_distribution: {
            R: 12,
            S: 60,
            T: 28,
          },
          cost: 421,
          co2_emission: 803,
          consumption_overview: {
            target: '4857.56',
            present: 3213,
          },
          maximum_demand: {
            time: '2022-05-14 14:00:00',
            energy: 10.997,
          },
          mean_voltage: 66,
          mean_power_factor: 0.98,
        },
        electric_provider: {
          slug: 'ep-zboncak-ltd-896',
          name: 'Dummy Provider',
        },
      },
      {
        slug: 'site-lcc-oxford-circus-65297',
        name: 'LCC Oxford Circus',
        stats: {
          energy_usage: 2017,
          closed_hours_conusmption: 1012,
          phase_load_distribution: {
            R: 12,
            S: 60,
            T: 28,
          },
          cost: 999,
          co2_emission: 258,
          consumption_overview: {
            target: '4857.56',
            present: 2017,
          },
          maximum_demand: {
            time: '2022-05-14 14:00:00',
            energy: 25.997,
          },
          mean_voltage: 210,
          mean_power_factor: 0.97,
        },
        electric_provider: {
          slug: 'ep-zboncak-ltd-896',
          name: 'Dummy Provider',
        },
      },
      {
        slug: 'site-lcc-shoreditch-66258',
        name: 'LCC Shoreditch',
        stats: {
          energy_usage: 1314,
          closed_hours_conusmption: 544,
          phase_load_distribution: {
            R: 12,
            S: 60,
            T: 28,
          },
          cost: 345,
          co2_emission: 760,
          consumption_overview: {
            target: '4857.56',
            present: 1314,
          },
          maximum_demand: {
            time: '2022-05-14 14:00:00',
            energy: 45.997,
          },
          mean_voltage: 240,
          mean_power_factor: 0.99,
        },
        electric_provider: {
          slug: 'ep-zboncak-ltd-896',
          name: 'Dummy Provider',
        },
      },
    ];

    this.quickanalysisSelect(0);

    this.quickanalysisupdateType();
  }

  updateMonth() {
    this.selectedMonth = {
      month: this.pipe.transform(this.selectedDate, 'MMMM', 'UTC'),
      year: this.selectedDate.getFullYear(),
    };
  }

  card = [
    { number: 84, name: 'Oxford Boulevard', Change: '-9' },
    { number: 86, name: 'Samilton Heights', Change: '-6' },
    { number: 86, name: 'Picadilly Circus', Change: '-4' },
  ];

  cards = [
    { number: 97, name: 'Scotland Yard', Change: '+12' },
    { number: 95, name: 'Surrey', Change: '+8' },
    { number: 95, name: 'Manchester', Change: '+7' },
  ];

  card3 = [
    { number: 84, name: 'Oxford Boulevard', Change: '-9', target_trend: 0 },
    { number: 86, name: 'Samilton Heights', Change: '-6', target_trend: 0 },
    { number: 86, name: 'Picadilly Circus', Change: '-4', target_trend: -4 },
    { number: 97, name: 'Scotland Yard', Change: '+12', target_trend: 8 },
    { number: 95, name: 'Surrey', Change: '+8', target_trend: 7 },
    { number: 95, name: 'Manchester', Change: '+7', target_trend: -8 },
    { number: 86, name: 'Picadilly Circus', Change: '-4', target_trend: -8 },
    { number: 97, name: 'Scotland Yard', Change: '+12', target_trend: 5 },
    { number: 95, name: 'Surrey', Change: '+8', target_trend: -5 },
    { number: 95, name: 'Manchester', Change: '+7', target_trend: 7 },
  ];

  quickanalysisupdateType() {
    // console.log(this.selectedType);
    let data: any[] = [];
    switch (this.selectedType) {
      case 'energy':
        data = this.data.map((ele, i) => ({
          name: ele.name,
          value: ele.stats.energy_usage,
          index: i,
        }));
        break;

      case 'closed hours':
        data = this.data.map((ele, i) => ({
          name: ele.name,
          value: ele.stats.closed_hours_conusmption,
          index: i,
        }));
        break;

      case 'cost':
        data = this.data.map((ele, i) => ({
          name: ele.name,
          value: ele.stats.cost,
          index: i,
        }));
        break;

      case 'co2 emission':
        data = this.data.map((ele, i) => ({
          name: ele.name,
          value: ele.stats.co2_emission,
          index: i,
        }));
        break;

      case 'maximum demand':
        data = this.data.map((ele, i) => ({
          name: ele.name,
          value: ele.stats.maximum_demand.energy,
          index: i,
        }));
        break;

      case 'voltage':
        data = this.data.map((ele, i) => ({
          name: ele.name,
          value: ele.stats.mean_voltage,
          index: i,
        }));
        break;

      case 'power factor':
        data = this.data.map((ele, i) => ({
          name: ele.name,
          value: ele.stats.mean_power_factor,
          index: i,
        }));
        break;

      default:
        break;
    }
    data = data.sort((a, b) => b.value - a.value);
    this.selected = data;
  }

  quickanalysisSelect(i: number) {
    const x = this.data[i];
    this.selectedIndex = i;

    // const values = this.data.map(x=>x.stats.phase_load_distribution);
    const commaJoinedValues = Object.values(
      x.stats.phase_load_distribution
    ).join('-');

    const valu = x.stats.maximum_demand;
    this.maximumDemand = this.pipe.transform(
      x.stats.maximum_demand.time,
      'medium',
      'UTC'
    );
    this.maximumDemandenergy = valu.energy;

    // const val = this.data.map(x=>x.stats.consumption_overview);
    this.consumptionData = x.stats.consumption_overview;

    const energy = this.data.map((x) => x.stats.energy_usage);
    //  console.log(this.energyData)

    this.card6 = [
      {
        image: '/assets/icons/icon-energy-usage.svg',
        title: 'Energy Usage',
        value: x.stats.energy_usage,
        value_energy: '',
        unit: 'kWh',
        color: 'var(--color5)',
      },
      {
        image: '/assets/icons/icon-energy-usage.svg',
        title: 'Cost of Operation',
        value: x.stats.cost,
        value_energy: '',
        unit: 'GBP',
        color: 'var(--color5)',
      },

      {
        image: '/assets/icons/icon-co2-emission.svg',
        title: 'CO2 Emission(kg)',
        value: x.stats.co2_emission,
        value_energy: '',
        unit: 'kg',
        color: 'var(--color6)',
      },
      {
        image: '/assets/icons/icon-closed-hours.svg',
        title: 'Closed-hours Consumption',
        value: x.stats.closed_hours_conusmption,
        value_energy: '',
        unit: '%',
        color: 'var(--color8)',
      },
      {
        image: '/assets/icons/icon-energy-intensity.svg',
        title: 'Maximum Demand',
        value: this.maximumDemandenergy,
        value_energy: this.maximumDemand,
        unit: 'kWh/m²',
        color: 'var(--color5)',
      },

      {
        image: '/assets/icons/icon-offset-planting.svg',
        title: 'Phase-Load Dist (R%-S%-T%)',
        value: commaJoinedValues,
        value_energy: '',
        unit: '',
        color: 'var(--color5)',
      },
      {
        image: '/assets/icons/icon-trend.svg',
        title: 'Mean Voltage',
        value: x.stats.mean_voltage,
        value_energy: '',
        unit: 'V',
        color: 'var(--color7)',
      },
      {
        image: '/assets/icons/icon-trend.svg',
        title: 'Mean Power Factor',
        value: x.stats.mean_power_factor,
        value_energy: '',
        unit: '',
        color: 'var(--color7)',
      },
    ];
    this.quickanalysisupdateType();
  }

  switchChart(switchType: number = 1) {
    if (switchType === 1) {
      this.bntStyle1 = 'open-days-button';
      this.bntStyle2 = 'closed-days-button';
      this.bntStyle3 = 'closed-days-button';
      this.bntStyle4 = 'closed-days-button';
      this.duration = '30';
      this.setLimits(0.1);
    }
    if (switchType === 3) {
      this.bntStyle1 = 'closed-days-button';
      this.bntStyle2 = 'open-days-button';
      this.bntStyle3 = 'closed-days-button';
      this.bntStyle4 = 'closed-days-button';
      this.duration = '60';
      this.setLimits(0.25);
    }
    if (switchType === 6) {
      this.bntStyle1 = 'closed-days-button';
      this.bntStyle2 = 'closed-days-button';
      this.bntStyle3 = 'open-days-button';
      this.bntStyle4 = 'closed-days-button';
      this.duration = '90';
      this.setLimits(0.5);
    }
    if (switchType === 12) {
      this.bntStyle1 = 'closed-days-button';
      this.bntStyle2 = 'closed-days-button';
      this.bntStyle3 = 'closed-days-button';
      this.bntStyle4 = 'open-days-button';
      this.duration = '120';
      this.setLimits(1);
    }
  }

  setLimits(num: number) {
    const x = Math.ceil(this.data3.length * num);
    const data = this.data3.slice(0, x);
    this.energy_sorted_data = data.sort((a, b) => b.energy - a.energy);
    this.cost_sorted_data = data.sort((a, b) => b.cost - a.cost);
    this.lat = data.map((e) => +(e.location as string).split(',')[0]);
    this.lng = data.map((e) => +(e.location as string).split(',')[1]);
    this.energy = data.map((e) => e.energy);
    this.cost = data.map((e) => e.cost);
  }

  setTrendIcon(value: number) {
    if (value > 0) {
      return '/assets/icons/icon-down.svg';
    } else {
      return '/assets/icons/icon-up.svg';
    }
  }

  onItemSelect(item: any) {
    // console.log(this.selectedItems);
  }
  onSelectAll(items: any) {
    // console.log(items);
  }
  setLoadCurveData() {
    this.chart = new Chart({
      chart: {
        type: 'spline',
      },

      legend: {
        symbolWidth: 40,
      },

      title: {
        text: '',
      },

      subtitle: {
        text: '',
      },

      yAxis: {
        title: {
          text: 'Energy (MWh)',
        },
        accessibility: {
          description: '',
        },
      },

      xAxis: {
        title: {
          text: '',
        },
        accessibility: {
          description: '',
        },
        categories: ['1', '2', '3', '4', '5', '6', '7', '8', '9'],
      },

      tooltip: {
        valueSuffix: '%',
      },

      plotOptions: {
        series: {
          point: {},
          cursor: 'pointer',
        },
      },

      series: this.x,
    });
  }

  multiselectdropdownClick() {
    let x: any[] = [];
    this.selectedItems.forEach((ele) => x.push(this.data2[ele.item_id]));
    const params = {
      comparison_selected_month: this.selectedComparisonMonth.month,
      comparison_selected_year: this.selectedComparisonMonth.year,
      comaprison_selected_parameter: this.sitesCombinedSelectedType,
      comparison_selected_sites: x.map(d=>d.slug)
    }
    console.log(params)
    
    this.x = x.map(ele=> ({
      name: ele.name,
          type: 'line',
          data: ele.values,
          color: '#'+Math.floor(Math. random()*16777215). toString(16),
          accessibility: {
            description: '',
          },
    }))
    this.setLoadCurveData();
  }

  updateDatePicker() {
    if (this.selectedComparisonDate) {
      this.selectedComparisonMonth = {
        month: this.pipe.transform(this.selectedComparisonDate , 'MMMM', 'UTC'),
        year: this.selectedComparisonDate.getFullYear(),
      };
      this.multiselectdropdownClick();
    }
  }
}
