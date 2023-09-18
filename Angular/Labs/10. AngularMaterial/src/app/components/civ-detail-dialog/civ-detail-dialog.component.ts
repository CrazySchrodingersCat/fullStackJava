import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Civilization } from 'src/app/shared/models/civilization.model';
import { Unit } from 'src/app/shared/models/unit.model';
import { AoeService } from 'src/app/shared/services/aoe.service';

@Component({
  selector: 'app-civ-detail-dialog',
  templateUrl: './civ-detail-dialog.component.html',
  styleUrls: ['./civ-detail-dialog.component.css']
})
export class CivDetailDialogComponent implements OnInit {
  units: Unit[]= [];
  constructor(@Inject(MAT_DIALOG_DATA) public data: {civ: Civilization}, private aoeService: AoeService) { }

  ngOnInit(): void {
    this.data.civ.unique_unit.forEach(ele => {
      this.aoeService.getUnit(ele).subscribe(data =>{
        this.units.push(data);
      });
    });
  }

}
