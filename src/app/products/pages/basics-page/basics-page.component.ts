import { Component } from '@angular/core';

@Component({
	selector: 'products-basics-page',
	templateUrl: './basics-page.component.html',
	styleUrl: './basics-page.component.css'
})
export class BasicsPageComponent {
	public nameUpper: string = 'ALEJANDRO';
	public nameLower: string = 'alejandro';
	public nameTitle: string = 'Alejandro';
	public fullName: string = 'AleJAndRo mAriÑo FandIÑo';
	public customDate: Date = new Date();
}
