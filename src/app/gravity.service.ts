import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class GravityService {

  private appData:any = [];
  private activeApp:any = {};
  
  constructor(private http: HttpClient) { 
   this.appData= [
      {id:1, title:"Control Works", description:"Nice application", link:"www.chatbot.com", image:1, isPublish:false}
       ]
  }

  addApp(data){
    data["id"]=this.appData[this.appData.length-1].id+1;
    data["isPublish"]=false;
  
    data["image"]=this.appData[this.appData.length-1].id+1;
    this.appData.push(data);
    console.log(data);

    // this.http.post("/addapp", data).subscribe(data => {
    //   console.log(data);
    // });
  }

  getApp(){
    return this.appData;
  }

  unpublishApp(data){
    let that = this;
    data.isPublish = false;
    this.activeApp = data;
    that.http.get("/update?name=").subscribe(data => {
      console.log(data);
      this.appData.forEach(function(obj){  
        obj.isPublish = false;
      });
    });
  }

  publishApp(data, bool){
    let that = this;
    data.isPublish = bool;
    this.activeApp = data;
    this.appData.forEach(function(obj){      
      if(obj.id == data.id){
        obj = data;
        that.http.get("/update?name="+data.image).subscribe(data => {
          console.log(data);
        });
      } else {       
        obj.isPublish = false;
      }
    })
  }

  getActiveApp(){
    return this.activeApp;
  }
}
