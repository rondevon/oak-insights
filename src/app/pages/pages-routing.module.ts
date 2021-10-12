import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RecommendationsComponent } from './recommendations/recommendations.component';
import { SavingsCalculatorComponent } from './savings-calculator/savings-calculator.component';
import { PhaseDistributionComponent } from './phase-distribution/phase-distribution.component';
import { MultiSiteComparisonComponent } from './multi-site-comparison/multi-site-comparison.component';
import { DeepInsightsComponent } from './deep-insights/deep-insights.component';
import { BasicInsightsComponent } from './basic-insights/basic-insights.component';
import { ApplianceComparisonComponent } from './appliance-comparison/appliance-comparison.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'  },
  { path: 'home', component: HomeComponent },
  { path: 'basic-insights', component: BasicInsightsComponent },
  { path: 'deep-insights', component: DeepInsightsComponent },
  { path: 'multi-site-comparison', component: MultiSiteComparisonComponent },
  { path: 'phase-distribution', component: PhaseDistributionComponent },
  { path: 'appliance-comparison', component: ApplianceComparisonComponent },
  { path: 'savings-calculator', component: SavingsCalculatorComponent },
  { path: 'recommendations', component: RecommendationsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
