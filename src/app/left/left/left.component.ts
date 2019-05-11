import { Component, OnInit, ViewChild } from '@angular/core';
import { LocationComponent } from '../../location/location/location.component';
import { from } from 'rxjs';
import { Router} from '@angular/router';
@Component({
  selector: 'app-left',
  templateUrl: './left.component.html',
  styleUrls: ['./left.component.css']
})
export class LeftComponent implements OnInit {
  @ViewChild('LocationComponent') public LocationComponent: LocationComponent;
  constructor(private __router: Router) { }
  public BackGroundColor: number;
  // showVar: boolean = true;

  // changelocation (){
  //   alert(1);
  //   // switch()
  //   this.showVar = !this.showVar;
  // }
  sidemenuredirect (mybasic) {
    switch (mybasic) {
        case "mybasic":
            this.__router.navigate(['/basics']);
        this.BackGroundColor = 1;
            break;
        case "myastroinfo":
        this.__router.navigate(['/astro']);
        this.BackGroundColor = 2;
            break;
        case "myeducation":
            this.__router.navigate(['/education']);
        this.BackGroundColor = 3;
            break;
        case "mylocation":
        this.__router.navigate(['/location']);
        this.BackGroundColor = 4;
            break;
        case "mycontacts":
            this.__router.navigate(['/contacts']);
        this.BackGroundColor = 5;
            break;
        case "mypreference":
            this.__router.navigate(['/preference']);
        this.BackGroundColor = 6;
            break;
        case "myspouse":
        this.__router.navigate(['/location']);
        this.BackGroundColor = 7;
            break;
        case "mybrother":
        this.__router.navigate(['/location']);
        this.BackGroundColor = 8;  
            break;
        case "mysister":
        this.__router.navigate(['/location']);
        this.BackGroundColor = 9;
            break;
        case "myfather":
            this.__router.navigate(['/myfather']);
        this.BackGroundColor = 10;  
            break;
        case "fatherside":
        this.__router.navigate(['/location']);
        this.BackGroundColor = 11;  
            break;
        case "mymother":
            this.__router.navigate(['/mymother']);
        this.BackGroundColor = 12;
            break;
        case "motherside":
        this.__router.navigate(['/location']);
        this.BackGroundColor = 13; 
            break;
        case "myfactsheet":
        this.__router.navigate(['/location']);
        this.BackGroundColor = 14; 
            break;
    }

};

  ngOnInit() {
  }

}
