import { Component, OnInit } from '@angular/core';
import { HttpService } from './../http.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  newAuthor = {};
  response: any;
  error: string;

  constructor(private _httpService: HttpService) { }

  ngOnInit() {
    this.error="";
  }
  addAuthor() {
    let observable = this._httpService.addAuthor(this.newAuthor);
    observable.subscribe((data:any) => {
      if(data.error){
        this.error = data.error.errors.name.message
      }
      else{
      console.log("~Create Author~");
      this.newAuthor = { name: "" }
      }   
    })
  }
}
