import { Component, Input, OnInit } from '@angular/core';
import { Confession } from 'src/app/models/confession.model';

@Component({
  selector: 'app-confession-item',
  templateUrl: './confession-item.component.html',
  styleUrls: ['./confession-item.component.css']
})
export class ConfessionItemComponent implements OnInit {
 // confession!: Confession;
  @Input() confession!: Confession;
  constructor() { }

  ngOnInit(): void {
    //this.confession = new Confession('Mondays are the worst','PXL-Digital','anonymous',false);
  }

}
