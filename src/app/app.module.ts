import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';

import { SharedModule } from './shared/shared.module';

//Locale configuration
import localeES from '@angular/common/locales/es';
import localeEN from '@angular/common/locales/en';
import localeJA from '@angular/common/locales/ja';
import { registerLocaleData } from '@angular/common';

registerLocaleData(localeES);
registerLocaleData(localeEN);
registerLocaleData(localeJA);

@NgModule({
	declarations: [AppComponent],
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		AppRoutingModule,
		SharedModule
	],
	providers: [
		{
			provide: LOCALE_ID,
			useValue: 'es'
		}
	],
	bootstrap: [AppComponent]
})
export class AppModule {}
