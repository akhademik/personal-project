export function formatStringToMoney(input: string) {
	input = input
		.replace(/\D/g, '') // remove all non-digit
		.replace(/^0+/, '') // remove leading zero
		.replace(/\B(?=(\d{3})+(?!\d))/g, ',') // insert ',' every 3 digits for
	return input
}

export function addThousandSeparator(amount: number): string {
	return amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
}
