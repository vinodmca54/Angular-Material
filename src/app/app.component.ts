import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  foods =[{name:"non-veg"},{name:'veg'}];
   condition :boolean = false;
  onclick(val){
   // alert(val);
    if(val === true){
      this.condition  = false;
    }else{
      this.condition  = true;
    }
  }
}
