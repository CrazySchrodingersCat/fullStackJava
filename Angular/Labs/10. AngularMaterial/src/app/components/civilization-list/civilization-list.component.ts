import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Civilization } from 'src/app/shared/models/civilization.model';
import { AoeService } from 'src/app/shared/services/aoe.service';
import { CivDetailDialogComponent } from '../civ-detail-dialog/civ-detail-dialog.component';

@Component({
  selector: 'app-civilization-list',
  templateUrl: './civilization-list.component.html',
  styleUrls: ['./civilization-list.component.css']
})
export class CivilizationListComponent implements OnInit, AfterViewInit {
  isLoading: boolean = true;
  dataSource!:MatTableDataSource<Civilization>;
  displayedColumns: string[] = ['id', 'name', 'expansion', 'army_type', 'team_bonus'];
  //constructor(private aoeService: AoeService) { }
  constructor(private aoeService: AoeService, public dialog: MatDialog) { }

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  

  ngOnInit(): void {
    this.aoeService.getCivilizations().subscribe(data => {
      this.dataSource = new MatTableDataSource<Civilization>(data);
    });
  }
  ngAfterViewInit(): void{
    this.aoeService.getCivilizations().subscribe(data => {
      this.dataSource = new MatTableDataSource<Civilization>(data);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });    
  }
  filter(searchText: string): void{
    this.dataSource.filter = searchText.trim().toLowerCase();
  }
  onClick(row: Civilization): void{
    this.dialog.open(CivDetailDialogComponent, {
      data: {
        civ: row
      }
    });
  }
}
