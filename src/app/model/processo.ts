export class Processo {
	constructor(
		public id?: number,
		public nome?: string,
		public cpf?: string,
		public matricula?: string,
		public orgao?: string,
		public setor?: string,
		public beneficio?: string,
		public dataTramitacao?: Date) {}
}
