
import {MediaMatcher} from '@angular/cdk/layout';
import {ChangeDetectorRef, Component, OnDestroy} from '@angular/core';
import { Router } from '@angular/router';
import { AuthguardService } from 'src/app/services/authguard.service';
import { DataService } from 'src/app/services/dataService/data.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent {
  
  mobileQuery: MediaQueryList;
  searchValue!: string;


  private _mobileQueryListener: () => void;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher,private dataService:DataService,private router:Router,private authguard:AuthguardService) {
    this.mobileQuery = media.matchMedia('(max-width: 820px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  onKeyup(searchValue:string){
    console.log(searchValue)
    this.dataService.changeMessage(searchValue);
  }

  logout(){
    this.authguard.logout();
    this.router.navigateByUrl('login')
  }

}
