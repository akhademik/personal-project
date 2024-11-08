import { icons } from './icon/icons'

export type LabelProps = {
	name: string
	forLabel: string
}

export type InputProps = {
	name: string
	value: string
	placeholder?: string
	onInput: (e: Event) => void
}

export type DatePickerProps = {
	value?: Date | null
	min?: Date
	onSelect?: (event: CustomEvent<Date>) => void
}

export type IconName = keyof typeof icons

export type Icon = {
	box_width: number
	box_height?: number
	svg: string
}

export type IconProps = {
	name: IconName
	class?: string
}
