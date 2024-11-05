import { daysBetween } from '$lib/services/dateTimeHelper'

export class PawnItem {
	#itemValue = $state('')
	#pawnDate: Date | null = $state(null)
	#redemptionDate = $state(new Date())
	#totalPawnDays = $state(0)
	#interestRate = $state(0.05)

	get value() {
		return this.#itemValue
	}
	get totalPawnDays() {
		if (this.#pawnDate && this.#redemptionDate) {
			this.#totalPawnDays = daysBetween(this.#pawnDate, this.#redemptionDate)
			return this.#totalPawnDays
		}
		return 0
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
