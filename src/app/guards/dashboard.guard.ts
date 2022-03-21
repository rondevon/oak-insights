import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DashboardGuard implements CanActivate {
  constructor(private router: Router) { }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      const site_slug: string = route.params.site_slug;
      const slug = localStorage.getItem('onboardingData') || '';
      const y = slug.split('?onboarding=');
    
      const x = site_slug.split('?onboarding=');
      if(x && x[1]) {sessionStorage.setItem('onboarding', x[1]); localStorage.setItem('onboardingData', site_slug); this.router.navigate(['oak/dashboard', x[0]]); return false; }
      else if(!sessionStorage.getItem('onboarding') && y && y[1] && site_slug === y[0]) {sessionStorage.setItem('onboarding', y[1]); this.router.navigate(['oak/dashboard', y[0]]); return false; }
    return true;
  }
  
}
