import { formatMoney } from '$lib/services/numberHelper'

export function updateValue(event: Event, callbackFunction: (value: string) => void) {
	const input = event.target as HTMLInputElement
	input.value = formatMoney(input.value)
	callbackFunction(input.value)
}

export function updateDate(event: CustomEvent<Date>, callbackFunction: (date: Date) => void) {
	callbackFunction(event.detail as Date)
}
export function updateInterestRate(event: Event, callbackFunction: (rate: number) => void) {
	const target = event.currentTarget as HTMLInputElement
	callbackFunction(target.value as unknown as number)
}
