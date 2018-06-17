import { Component, OnInit } from '@angular/core';
import { StoreDataService } from './../../services/store-data.service';
import { Goodie } from './../../models/Goodie';

@Component({
  selector: 'app-goodie-list',
  templateUrl: './goodie-list.component.html',
  styleUrls: ['./goodie-list.component.css']
})
export class GoodieListComponent implements OnInit {
  public goodieList: any;
  constructor(private storeService: StoreDataService) {}

  ngOnInit() {
    this.storeService.getGoodies().subscribe(data => {
      // console.log(JSON.stringify(data) + ' ========>');
      this.goodieList = data;
    });
  }
}
