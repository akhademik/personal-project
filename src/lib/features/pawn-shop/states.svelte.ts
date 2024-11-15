import {
	addThousandSeparator,
	convertStringToNumber,
} from '$lib/services/numberHelper'

import {
	computeInterest,
	computeLoanDuration,
	computeMinPickDate,
} from './services'
import type { Item } from './types'

export class PawnItem {
	#value = $state('')
	#startDate = $state(new Date())
	#endDate = $state(new Date())
	#rate = $state(0.05)
	#duration = $state(0)
	#interest = $state('')
	#minPickDate = $state(new Date())
	#lastPayment = $state('')
	#items: Item[] = $state([])

	get value() {
		return this.#value
	}

	get items() {
		return this.#items
	}

	get lastPayment() {
		const value = convertStringToNumber(this.#value)
		const interest = convertStringToNumber(this.#interest)
		this.#lastPayment = addThousandSeparator(value + interest)
		return this.#lastPayment
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
		const days = computeLoanDuration(this.#startDate, this.#endDate)
		if (days < 0) {
			this.#endDate = this.#startDate
		}

		this.#duration = Math.max(days, 1)
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
	addToItems = (item: Item) => {
		this.#items.push(item)
		return this.#items.length - 1
	}
}
