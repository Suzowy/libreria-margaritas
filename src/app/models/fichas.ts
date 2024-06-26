export class Ficha{
  static _id: string;
id: any|string;
http: any;
	constructor(
		public _id: string,
		public name: string,
		public description: string,
		public category: string,
		public year: number,
		public pag: string,
		public image: string
	){}
}
