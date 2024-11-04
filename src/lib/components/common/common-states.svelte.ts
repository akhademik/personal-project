export class InputState {
	#textValue = $state('')

	constructor(initValue: string = '') {
		this.#textValue = initValue
		this.changeValue = this.changeValue.bind(this)
	}
	changeValue(value: string): void {
		this.#textValue = value
	}

	get value() {
		return this.#textValue
	}
}
