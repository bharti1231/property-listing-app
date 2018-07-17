import { Injectable } from '@angular/core';
import { Property } from './property';

@Injectable({
  providedIn: 'root'
})
export class PropertyserviceService {

  constructor() { }
  properties=[
  new Property("Sky link Tower i", 
   "https://makinah.net/sub_imgBig/2017/01/10/23_6907_0.png"
  ,"near of state bank of india","mumbai"),
  new Property("siver tower","http://www.envisionrealty.co.in/wp-content/uploads/2013/08/property-04.jpg","front of jpg hotel","bhopal"),
  new Property("tulsi tower","https://sc02.alicdn.com/kf/HTB11tLJKFXXXXb5XVXXq6xXFXXXZ/Individual-House-.jpg","near of nrk ","indore"),
  new Property("xyz","http://www.plantasdecasas.com/wp-content/uploads/2017/07/planta-fachada-casa-115-fr-AG.jpg","near of india gate","delhi")
  
  ]
  getProperties(){
  	return this.properties;

  }
  



}
