import { Component } from '@angular/core';
import { interval, tap } from 'rxjs';

@Component({
	selector: 'app-uncommon-page',
	templateUrl: './uncommon-page.component.html',
	styleUrl: './uncommon-page.component.css'
})
export class UncommonPageComponent {
	// i18nSelect
	public name: string = 'Alejandro';
	public gender: 'male' | 'female' = 'male';
	public invitationMap = {
		male: 'invitarlo',
		female: 'invitarla'
	};

	changeClient(): void {
		this.name = 'Sara';
		this.gender = 'female';
	}

	//i18nPlural
	public clients: string[] = [
		'Alejandro',
		'Juan',
		'Ana',
		'Marta',
		'Pedro',
		'Maria'
	];
	public clientsMap = {
		'=0': 'no tenemos ningun cliente esperando',
		'=1': 'tenemos un cliente esperando',
		other: 'tenemos # clientes esperando'
	};

	deleteClient(): void {
		this.clients.pop();
	}

	//i18nKeyValue
	public myData = {
		name: 'Alejandro',
		age: 28,
		gender: 'male'
	};

	//i18nAsync
	public myObservableTimer = interval(2000).pipe(
		tap((value) => console.log('tap:', value))
	);

	public promiseValue: Promise<string> = new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve('Tenemos data en la persona.');
		}, 3500);
	});
}
