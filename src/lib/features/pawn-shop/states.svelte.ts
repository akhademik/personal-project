import { getInterestValue, getMinPickableDate, getTotalPawnDays } from './services'

export class PawnItem {
	#itemValue = $state('')
	#pawnDate: Date | null = $state(null)
	#redemptionDate = $state(new Date())
	#minPickDate: Date | undefined = $state(undefined)
	#totalPawnDays = $state(0)
	#interestRate = $state(0.05)
	#interestValue: string = $state('')

	get value() {
		return this.#itemValue
	}

	get interestValue() {
		if (!this.#itemValue || !this.#totalPawnDays) return ''
		this.#interestValue = getInterestValue(this.#itemValue, this.#totalPawnDays, this.#interestRate)
		return this.#interestValue
	}

	get minPickDate() {
		this.#minPickDate = getMinPickableDate(this.#redemptionDate, 120)
		return this.#minPickDate
	}

	get totalPawnDays() {
		if (!this.#pawnDate) {
			this.#totalPawnDays = 0
		} else {
			const days = getTotalPawnDays(this.#pawnDate, this.#redemptionDate)
			this.#totalPawnDays = days < 0 ? 1 : days
			if (days < 0) {
				this.#redemptionDate = this.#pawnDate
			}
		}
		return this.#totalPawnDays
	}

	get pawnDate() {
		return this.#pawnDate as Date | null
	}
	get redemptionDate() {
		return this.#redemptionDate
	}
	get interestRate() {
		return this.#interestRate
	}
	setValue = (value: string) => {
		this.#itemValue = value
	}
	setPawnDate = (date: Date | null) => {
		this.#pawnDate = date
	}
	setRedemptionDate = (date: Date) => {
		this.#redemptionDate = date
	}
	setInterestRate = (rate: number) => {
		this.#interestRate = rate
	}
}
