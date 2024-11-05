export function daysBetween(laterDate: Date, soonerDate: Date): number {
	const TWENTY_FOUR_HOURS: number = 24 * 60 * 60 * 1000
	return (
		Math.round(
			Math.abs(new Date(laterDate).getTime() - new Date(soonerDate).getTime()) / TWENTY_FOUR_HOURS
		) + 1
	)
}
