import { NgModule } from '@angular/core';
import { ProductsRoutingModule } from './products-routing.module';
import { BasicsPageComponent } from './pages/basics-page/basics-page.component';
import { NumbersPageComponent } from './pages/numbers-page/numbers-page.component';
import { UncommonPageComponent } from './pages/uncommon-page/uncommon-page.component';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';
import { CommonModule } from '@angular/common';
import { OrderPageComponent } from './pages/order-page/order-page.component';
import { TogglesCasePipe } from './pipes/toggles-case.pipe';
import { CanFlyPipe } from './pipes/can-fly.pipe';
import { SortByPipe } from './pipes/sort-by.pipe';

@NgModule({
	imports: [ProductsRoutingModule, PrimeNgModule, CommonModule],
	exports: [],
	declarations: [
		BasicsPageComponent,
		NumbersPageComponent,
		UncommonPageComponent,
		OrderPageComponent,
		TogglesCasePipe,
		CanFlyPipe,
		SortByPipe
	],
	providers: []
})
export class ProductsModule {}
