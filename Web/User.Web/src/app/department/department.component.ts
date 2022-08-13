import { Component, OnInit } from '@angular/core';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { SharedService } from '../shared.service';

@UntilDestroy()
@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.scss']
})
export class DepartmentComponent implements OnInit {

  constructor(private sharedService: SharedService) { }

  ngOnInit(): void {
	this.sharedService.getDepList().pipe(untilDestroyed(this)).subscribe((result) => console.log(result));
  }

}
