import { Property } from '../property';
import { Component, OnInit,ElementRef} from '@angular/core';
import { FormsModule} from '@angular/forms';


@Component({
  selector: 'app-property-details',
  templateUrl: './property-details.component.html',
  styleUrls: ['./property-details.component.css']
})
export class PropertyDetailsComponent implements OnInit {

  constructor() { }
  user=new Property("Sky link Tower i", 
   "https://makinah.net/sub_imgBig/2017/01/10/23_6907_0.png"
  ,"near of state bank of india","mumbai")


 ngOnInit() {
  }

 onSubmit(form:ElementRef){
  console.log(form);

  }

}
