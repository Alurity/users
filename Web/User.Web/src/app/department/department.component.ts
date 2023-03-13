import { Component, OnInit } from '@angular/core';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { SharedService } from '../shared.service';
import { DepartmentDataService } from './department-data.service';

@UntilDestroy()
@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.scss']
})
export class DepartmentComponent implements OnInit {

	constructor(private sharedService: DepartmentDataService) { }

	ngOnInit(): void {
		//this.sharedService.getDepartmentsList().pipe(untilDestroyed(this)).subscribe((result) => console.log(result));
	}

	loadData() {

	}

}
