import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing/app-routing.module';

import { AppComponent } from './app.component';
import { SideNavComponent } from './shared/side-nav/side-nav.component';
import { TopNavComponent } from './shared/top-nav/top-nav.component';
import { HeroComponent } from './store/hero/hero.component';
import { TilesComponent } from './store/tiles/tiles.component';
import { SearchComponent } from './store/search/search.component';
import { StoreContainerComponent } from './store/store-container/store-container.component';
import { GoodieListComponent } from './store/goodie-list/goodie-list.component';
import { GoodieDetailComponent } from './store/goodie-detail/goodie-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    StoreContainerComponent,
    GoodieDetailComponent,
    GoodieListComponent,
    SideNavComponent,
    TopNavComponent,
    HeroComponent,
    TilesComponent,
    SearchComponent
  ],
  imports: [BrowserModule, FormsModule, HttpModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
