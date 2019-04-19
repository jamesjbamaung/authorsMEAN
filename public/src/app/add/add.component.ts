import { Component, OnInit } from '@angular/core';
import { HttpService } from './../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  newAuthor = {};
  response: any;
  error: string;

  constructor(private _httpService: HttpService,  
    private _route: ActivatedRoute,
    private _router: Router) { }

  ngOnInit() {
    this.error="";
  }
  goHome() {
    this._router.navigate(['/home']);
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
      this.goHome();
      }   
    })
  }
}
