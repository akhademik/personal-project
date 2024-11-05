export type LabelProps = {
	name: string
	forLabel: string
}

export type InputProps = {
	name: string
	value: string
	onInput: (e: Event) => void
}

export type DatePickerProps = {
	value?: Date | null
	min?: Date
	onSelect?: (event: CustomEvent<Date>) => void
}
