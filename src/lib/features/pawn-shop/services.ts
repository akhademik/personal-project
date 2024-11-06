import { formatMoneyWithSeparator, formatStringToMoney } from '$lib/services/numberHelper'

function normalizeTimeFromDate(date: Date): Date {
	const removedTimeDate = new Date(date)
	removedTimeDate.setHours(0, 0, 0, 0)
	return removedTimeDate
}
export function getInterestValue(pawnValue: string, pawnDays: number, monthlyRate: number) {
	const dailyRate = monthlyRate / 30
	const interestMoney = Number(pawnValue.replaceAll(',', '')) * dailyRate * pawnDays
	return formatMoneyWithSeparator(Math.round(interestMoney))
}

export function getTotalPawnDays(pawnDate: Date, redemptionDate: Date): number {
	const ONE_DAY = 24 * 60 * 60 * 1000

	const pawnDateNormalized = normalizeTimeFromDate(pawnDate)
	const redemptionDateNormalized = normalizeTimeFromDate(redemptionDate)
	const timeDifference = redemptionDateNormalized.getTime() - pawnDateNormalized.getTime()
	let totalPawnDays = timeDifference / ONE_DAY
	totalPawnDays = totalPawnDays >= 0 ? Math.floor(totalPawnDays) + 1 : Math.floor(totalPawnDays)

	return totalPawnDays
}

export function getMinPickableDate(redemptionDate: Date, limitDays: number): Date {
	const pickedDate = new Date(redemptionDate)
	const pickableDate = new Date()
	pickableDate.setDate(pickedDate.getDate() - limitDays)
	return pickableDate
}

export function updatePawnValue(event: Event, setPawnValue: (pawnValue: string) => void) {
	const input = event.target as HTMLInputElement
	input.value = formatStringToMoney(input.value)
	setPawnValue(input.value)
}

export function updatePickedDate(event: CustomEvent<Date>, setPickedDate: (date: Date) => void) {
	setPickedDate(event.detail as Date)
}
export function updateInterestRate(event: Event, setInterestRate: (rate: number) => void) {
	const selected = event.currentTarget as HTMLInputElement
	setInterestRate(selected.value as unknown as number)
}
