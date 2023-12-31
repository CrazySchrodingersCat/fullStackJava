import { Component, Input, OnInit } from '@angular/core';
import { Confession } from 'src/app/models/confession.model';
import { ConfessionService } from 'src/app/services/confession.service';

@Component({
  selector: 'app-confession-item',
  templateUrl: './confession-item.component.html',
  styleUrls: ['./confession-item.component.css']
})
export class ConfessionItemComponent implements OnInit {
  @Input() confession!: Confession;
  constructor(private confessionService: ConfessionService) { }

  ngOnInit(): void {

  }

  addLike() {
    this.confession.likes++;
    this.confessionService.updateConfession(this.confession).subscribe();
  }
  addDislike() {
    this.confession.dislikes++;
    this.confessionService.updateConfession(this.confession).subscribe();
  }

  getDepartmentUrl(department: string): string {
    department = department.toLowerCase();
    switch(department) {
      case 'pxl-digital': {
         return 'assets/pxl-digital.png'
      }
      case 'pxl-mad': {
        return 'assets/pxl-mad.png'
      }
      case 'pxl-business': {
        return 'assets/pxl-business.png'
      }
      case 'pxl-education': {
        return 'assets/pxl-education.png'
      }
      default: {
        return 'assets/hogeschoolpxl.png'
      }
   }
  }

}
