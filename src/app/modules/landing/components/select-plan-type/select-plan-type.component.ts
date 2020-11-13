import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { DataService } from 'src/app/shared/services/data/data.service';

@Component({
  selector: 'app-select-plan-type',
  templateUrl: './select-plan-type.component.html',
  styleUrls: ['./select-plan-type.component.css'],
})
export class SelectPlanTypeComponent implements OnInit {
  @Output() submitPlan: EventEmitter<string> = new EventEmitter();
  plans: any[];
  selectedPlan: string = null;

  constructor(private data: DataService) {}

  ngOnInit(): void {
    this.data.getPlans().subscribe((res) => {
      this.plans = res;
      console.log(res);
    });
  }

  selectPlan(id: string) {
    this.selectedPlan = id;
  }

  onSubmit() {
    if (!this.selectedPlan) {
      alert('No plan selected');
    } else {
      let plan = this.plans.filter((plan) => plan._id == this.selectedPlan)[0];
      this.submitPlan.emit(plan);
    }
  }
}
