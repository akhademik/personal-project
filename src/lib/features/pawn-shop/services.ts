import { addThousandSeparator, formatStringToMoney } from '$lib/services/numberHelper'

function getStartOfDay(date: Date): Date {
	const startOfDay = new Date(date)
	startOfDay.setHours(0, 0, 0, 0)
	return startOfDay
}
export function computeInterest(pawnValue: string, durationInDays: number, monthlyRate: number) {
	const dailyRate = monthlyRate / 30
	const amount = Number(pawnValue.replaceAll(',', ''))
	const interest = amount * dailyRate * durationInDays
	return addThousandSeparator(Math.round(interest))
}

export function computeLoanDuration(startDate: Date, endDate: Date): number {
	const MILLISECONDS_PER_DAY = 24 * 60 * 60 * 1000

	const startDateNoTime = getStartOfDay(startDate)
	const endDateNoTime = getStartOfDay(endDate)
	const durationInMs = endDateNoTime.getTime() - startDateNoTime.getTime()
	let durationInDays = durationInMs / MILLISECONDS_PER_DAY
	durationInDays = durationInDays >= 0 ? Math.floor(durationInDays) + 1 : Math.floor(durationInDays)

	return durationInDays
}

export function getEarliestAllowedDate(endDate: Date, maxDaysBack: number): Date {
	const pickedEndDate = new Date(endDate)
	const earliestDate = new Date()
	earliestDate.setDate(pickedEndDate.getDate() - maxDaysBack)
	return earliestDate
}

export function handlePawnValueChange(event: Event, setPawnValue: (pawnValue: string) => void) {
	const MAX_DIGITS = 11 // 999,999,999 (11 digits)
	const input = event.target as HTMLInputElement

	if (input.value.length > MAX_DIGITS) input.value = input.value.slice(0, MAX_DIGITS)
	input.value = formatStringToMoney(input.value)
	setPawnValue(input.value)
}

export function handleDateSelection(event: CustomEvent<Date>, setPickedDate: (date: Date) => void) {
	setPickedDate(event.detail as Date)
}
export function handleRateChange(
	event: Event,
	setInterestRate: (monthlyInterestRate: number) => void
) {
	const interestRateInput = event.currentTarget as HTMLInputElement
	setInterestRate(interestRateInput.value as unknown as number)
}
