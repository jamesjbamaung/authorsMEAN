import { Component, OnInit } from '@angular/core';
import { HttpService } from './../http.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  

  constructor(private _httpService: HttpService) { }

  ngOnInit() {
    this.getAllAuthors();
  }
  authors:any ;

  getAllAuthors(){
    let observable = this._httpService.getAllAuthors();
    observable.subscribe(data => { 
      console.log("~Loading All Authors~", data)
      this.authors = data["authors"]
      console.log(this.authors)
    });
  }

  deleteAuthor(id:string){
    console.log("got here")
    let observable = this._httpService.deleteAuthor(id);
    observable.subscribe(data=>{
      console.log("~Deleting Author~")
      this.getAllAuthors();
    })
  }

}
