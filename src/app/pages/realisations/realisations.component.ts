import { Component, OnInit } from '@angular/core';
import { RealisationModel } from 'src/app/models/realisation.model';

export enum Filter {
  ALL = 1,
  PEINTURE = 2,
  MUR = 3,
  SOL = 4
}

@Component({
  selector: 'app-realisations',
  templateUrl: './realisations.component.html',
  styleUrls: ['./realisations.component.scss']
})
export class RealisationsComponent implements OnInit {
  public category: any[];
  public realisations: RealisationModel[];
  public currentFilter: Filter;
  public filter = Filter;

  constructor() {
    this.currentFilter = Filter.ALL;
  }

  ngOnInit() {
  }

  onClickFilterAll() {
    this.currentFilter = Filter.ALL;
  }

  onClickFilterPeinture() {
    this.currentFilter = Filter.PEINTURE;
  }

  onClickFilterMur() {
    this.currentFilter = Filter.MUR;
  }

  onClickFilterSol() {
    this.currentFilter = Filter.SOL;
  }
}
