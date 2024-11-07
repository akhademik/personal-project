import { computeInterest, computeLoanDuration, getEarliestAllowedDate } from './services'

export class PawnItem {
	#itemValue = $state('')
	#startDate: Date | null = $state(null)
	#endDate = $state(new Date())
	#minPickDate: Date | undefined = $state(undefined)
	#totalPawnDays = $state(0)
	#interestRate = $state(0.05)
	#interestValue: string = $state('')

	get value() {
		return this.#itemValue
	}

	get interestValue() {
		if (!this.#itemValue || !this.#totalPawnDays) return ''
		this.#interestValue = computeInterest(this.#itemValue, this.#totalPawnDays, this.#interestRate)
		return this.#interestValue
	}

	get minPickDate() {
		this.#minPickDate = getEarliestAllowedDate(this.#endDate, 120)
		return this.#minPickDate
	}

	get totalPawnDays() {
		if (!this.#startDate) {
			this.#totalPawnDays = 0
		} else {
			const days = computeLoanDuration(this.#startDate, this.#endDate)
			this.#totalPawnDays = days < 0 ? 1 : days
			if (days < 0) {
				this.#endDate = this.#startDate
			}
		}
		return this.#totalPawnDays
	}

	get startDate() {
		return this.#startDate as Date | null
	}
	get endDate() {
		return this.#endDate
	}
	get interestRate() {
		return this.#interestRate
	}
	setValue = (value: string) => {
		this.#itemValue = value
	}
	setStartDate = (date: Date | null) => {
		this.#startDate = date
	}
	setEndDate = (date: Date) => {
		this.#endDate = date
	}
	setInterestRate = (rate: number) => {
		this.#interestRate = rate
	}
}
