import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/shared/services/data/data.service';

@Component({
  selector: 'app-select-plan-type',
  templateUrl: './select-plan-type.component.html',
  styleUrls: ['./select-plan-type.component.css'],
})
export class SelectPlanTypeComponent implements OnInit {
  plans: any[];
  selectedPlan: string;

  constructor(private data: DataService) {}

  ngOnInit(): void {
    this.data.getPlans().subscribe((res) => {
      this.plans = res;
      console.log(res);
    });
  }

  selectPlan(id: string) {
    this.selectedPlan = id;
    console.log(id);
  }
}
