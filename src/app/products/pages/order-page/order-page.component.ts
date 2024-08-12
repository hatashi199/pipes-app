import { Component } from '@angular/core';
import { Color, Hero } from '../../interfaces/hero.interface';

@Component({
	selector: 'app-order-page',
	templateUrl: './order-page.component.html',
	styleUrl: './order-page.component.css'
})
export class OrderPageComponent {
	public isUpperCase: boolean = false;
	public heroes: Hero[] = [
		{
			id: 1,
			name: 'Iron Man',
			canFly: true,
			color: Color.red
		},
		{
			id: 2,
			name: 'Hulk',
			canFly: false,
			color: Color.green
		},
		{
			id: 3,
			name: 'Spiderman',
			canFly: true,
			color: Color.red
		},
		{
			id: 4,
			name: 'Superman',
			canFly: true,
			color: Color.blue
		},
		{
			id: 5,
			name: 'Batman',
			canFly: true,
			color: Color.black
		},
		{
			id: 6,
			name: 'Deadpool',
			canFly: false,
			color: Color.red
		},
		{
			id: 7,
			name: 'Wolverine',
			canFly: false,
			color: Color.blue
		}
	];

	public sortType: keyof Hero | '' = '';

	toogleUpperCase(): void {
		this.isUpperCase = !this.isUpperCase;
	}

	selectSort(sortSelected: keyof Hero | ''): void {
		this.sortType = sortSelected;
	}
}
