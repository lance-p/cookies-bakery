import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Goodie } from './../../models/Goodie';
import { StoreDataService } from './../../services/store-data.service';

@Component({
  selector: 'app-goodie-detail',
  templateUrl: './goodie-detail.component.html',
  styleUrls: ['./goodie-detail.component.css']
})
export class GoodieDetailComponent implements OnInit {
  public goodie: Goodie;

  constructor(
    private route: ActivatedRoute,
    private storeService: StoreDataService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(param => {
      this.storeService
        .getGoodie(param.id)
        .subscribe(data => (this.goodie = data));
    });
  }

  like(goodie) {
    this.storeService.likeGoodie(goodie.id);
    console.log(goodie);
  }
}
