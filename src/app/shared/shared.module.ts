import { NgModule } from '@angular/core';
import { MenuBarComponent } from './components/menu-bar/menu-bar.component';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';

@NgModule({
	imports: [PrimeNgModule],
	exports: [MenuBarComponent],
	declarations: [MenuBarComponent],
	providers: []
})
export class SharedModule {}
