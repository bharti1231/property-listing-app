import { Component, OnInit } from '@angular/core';
import { Property } from '../property';
import {PropertyserviceService } from '../propertyservice.service';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent implements OnInit {

  properties:Property[];
  constructor(private propertyService: PropertyserviceService ) { }

  ngOnInit() {
  this.getProperties();
  console.log(this.properties);
  }
  getProperties(){
  	this.properties=this.propertyService. getProperties();

  }
}
