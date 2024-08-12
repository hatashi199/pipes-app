import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
	selector: 'shared-menu-bar',
	templateUrl: 'menu-bar.component.html'
})
export class MenuBarComponent implements OnInit {
	public menuItems: MenuItem[] | undefined;

	constructor() {}

	ngOnInit() {
		this.menuItems = [
			{
				label: 'Pipes de Angular',
				icon: 'pi pi-desktop',
				items: [
					{
						label: 'Textos y flechas',
						icon: 'pi pi-align-left',
						routerLink: '/'
					},
					{
						label: 'Números',
						icon: 'pi pi-percentage',
						routerLink: '/numbers'
					},
					{
						label: 'No comunes',
						icon: 'pi pi-cog',
						routerLink: '/uncommon'
					}
				]
			},
			{
				label: 'Pipes personalizados',
				icon: 'pi pi-cog',
				items: [
					{
						label: 'Orden',
						icon: 'pi pi-filter-fill',
						routerLink: '/custom'
					}
				]
			}
		];
	}
}
