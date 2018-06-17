import { GoodieDetailComponent } from './../store/goodie-detail/goodie-detail.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StoreContainerComponent } from '../store/store-container/store-container.component';

const routes: Routes = [
  // {
  //   path: '',
  //   component: StoreContainerComponent
  // },
  {
    path: 'store/detail/:id',
    component: GoodieDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule {}
