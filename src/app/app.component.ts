import { Component } from '@angular/core';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  foods =[{name:"non-veg"},{name:'veg'}];
   condition :boolean = false;
   isIndeterminate = true;
    chkLabelPosition = 'aria-labely';
//========auto complete=====

   myControl: FormControl = new FormControl();

  options = [
    'One',
    'Two',
    'Three'
   ];

//===========================
  onclick(val){
   // alert(val);
    if(val === true){
      this.condition  = false;
    }else{
      this.condition  = true;
    }
  }
}
