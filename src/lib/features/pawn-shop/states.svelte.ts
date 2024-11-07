import {
	computeInterest,
	computeLoanDuration,
	computeMinPickDate,
} from './services'

export class PawnItem {
	#value = $state('')
	#startDate = $state(new Date())
	#endDate = $state(new Date())
	#rate = $state(0.05)
	#duration = $state(0)
	#interest = $state('')
	#minPickDate = $state(new Date())

	get value() {
		return this.#value
	}

	get interest() {
		this.#interest = computeInterest(this.#value, this.#duration, this.#rate)
		return this.#interest
	}

	get minPickDate() {
		this.#minPickDate = computeMinPickDate(this.#endDate, 120)
		return this.#minPickDate
	}

	get duration() {
		if (!this.#startDate) {
			this.#duration = 0
		} else {
			const days = computeLoanDuration(this.#startDate, this.#endDate)
			this.#duration = days < 0 ? 1 : days
			if (days < 0) {
				this.#endDate = this.#startDate
			}
		}
		return this.#duration
	}

	get startDate() {
		return this.#startDate
	}
	get endDate() {
		return this.#endDate
	}
	get rate() {
		return this.#rate
	}

	setValue = (value: string) => (this.#value = value)
	setRate = (rate: number) => (this.#rate = rate)
	setStartDate = (date: Date) => (this.#startDate = date)
	setEndDate = (date: Date) => (this.#endDate = date)
}
