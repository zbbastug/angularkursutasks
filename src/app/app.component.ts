import { Component } from '@angular/core';

@Component({
  //selector types
  // selector: 'app-root',
  // selector: '.app-root'
  // selector: '#app-root'
  selector: 'app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

//import etmek icin export
export class AppComponent {
  
  /*title = 'todo app';

  todoItem={
    description: "kahvaltı",
    action : true
  }

  getTitle(){
    return this.title;
  }*/

  /*username ="";*/
  
  showSecret=false;
  //log=[]; kullanımı vardı ancak burası any olmadan kabul edilmiyor. cünkü any kullanmadan once never olarak kabul ediliyor.
  log = [] as any;

  onToggleDetail(){
    //eger bunu kaldırırsak secret password tuna görülmüyor.
    this.showSecret=!this.showSecret;
    //log dizisinin sayısını gösterir. 
    this.log.push(this.log.length +1);
  }
}
