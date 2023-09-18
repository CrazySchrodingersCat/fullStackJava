import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Confession } from './models/confession.model';
import { ConfessionService } from './services/confession.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  // dataList!: Confession[];

  // constructor(private confessionService: ConfessionService){

  // }

  // ngOnInit(): void{
  //  this.dataList = this.confessionService.confessionList;
  // }
  confessions$!: Observable<Confession[]>;
  searchTerm: string = '';
  constructor(private confessionService: ConfessionService){
  }

  ngOnInit(): void{
    this.getConfessionList();
  }
  
  getConfessionList(): void{
    this.confessions$ = this.confessionService.getConfessions();
  }

  processAdd(event: Confession): void{
    this.confessionService.addConfession(event).subscribe(data => {
      console.log(data);
      this.getConfessionList();
    });
  }
  filterItems(): void{
    this.confessions$ = this.confessionService.getFilteredConfessions(this.searchTerm);
  }


  //  processAdd(event: Confession): void{
  //   this.confessionService.confessionList.push(event);
  //   this.dataList = this.confessionService.confessionList;
  //  }

}
