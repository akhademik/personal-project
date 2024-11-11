import {
	addThousandSeparator,
	formatStringToMoney,
} from '$lib/services/numberHelper'

import type { PawnItem } from './states.svelte'
import type { Item } from './types'

function resetTimeOnDate(date: Date): Date {
	const dateWithoutTime = new Date(date)
	dateWithoutTime.setHours(0, 0, 0, 0)
	return dateWithoutTime
}
export function computeInterest(
	pawnValue: string,
	duration: number,
	rate: number
) {
	const dailyRate = rate / 30
	const amount = Number(pawnValue.replaceAll(',', ''))
	const interest = amount * dailyRate * duration
	return addThousandSeparator(Math.round(interest))
}

export function computeLoanDuration(startDate: Date, endDate: Date): number {
	const MILLISECONDS_PER_DAY = 24 * 60 * 60 * 1000

	const startDateNoTime = resetTimeOnDate(startDate)
	const endDateNoTime = resetTimeOnDate(endDate)
	const durationInMs = endDateNoTime.getTime() - startDateNoTime.getTime()
	let durationInDays = durationInMs / MILLISECONDS_PER_DAY

	durationInDays =
		durationInDays >= 0
			? Math.floor(durationInDays) + 1
			: Math.floor(durationInDays)

	return durationInDays
}

export function computeMinPickDate(endDate: Date, daysLimit: number): Date {
	const selectedEndDate = new Date(endDate)
	const earliestDate = new Date()
	earliestDate.setDate(selectedEndDate.getDate() - daysLimit)
	return earliestDate
}

export function handlePawnValueChange(
	event: Event,
	setValue: (value: string) => void
) {
	const MAX_DIGITS = 11 // 999,999,999 (11 digits)
	const input = event.target as HTMLInputElement

	if (input.value.length > MAX_DIGITS)
		input.value = input.value.slice(0, MAX_DIGITS)
	input.value = formatStringToMoney(input.value)
	setValue(input.value)
}

export function handleDateSelect(
	event: CustomEvent<Date>,
	setDate: (date: Date) => void
) {
	setDate(event.detail as Date)
}
export function handleRateChange(
	event: Event,
	setRate: (rate: number) => void
) {
	const rateInput = event.currentTarget as HTMLInputElement
	const rateToNumber = Number(rateInput.value)
	setRate(rateToNumber)
}
