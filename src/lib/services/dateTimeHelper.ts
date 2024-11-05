export function daysBetween(pawnDate: Date, redemptionDate: Date): number {
	const ONE_DAY = 24 * 60 * 60 * 1000

	const pawnDateNoTimes = new Date(pawnDate)
	pawnDateNoTimes.setHours(0, 0, 0, 0)

	const redemptionDateNoTimes = new Date(redemptionDate)
	redemptionDateNoTimes.setHours(0, 0, 0, 0)

	const timeDifference = redemptionDateNoTimes.getTime() - pawnDateNoTimes.getTime()
	let daysDifference = timeDifference / ONE_DAY

	daysDifference = daysDifference >= 0 ? Math.floor(daysDifference) + 1 : Math.floor(daysDifference)

	return daysDifference
}

export function getMinDateInput(currentDate: Date, daysBetween: number): Date {
	const now = new Date(currentDate)
	const minDate = new Date()
	minDate.setDate(now.getDate() - daysBetween)
	return minDate
}
