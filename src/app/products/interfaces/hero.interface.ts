export interface Hero {
	id: number;
	name: string;
	canFly: boolean;
	color: Color;
}

export enum Color {
	red,
	black,
	blue,
	green
}
