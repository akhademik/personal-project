interface BaseFields {
	labelName: string
	fieldName: string
}

interface TextForm extends BaseFields {
	inputType: 'text'
	value: string
	onInput: (event: Event) => void
}

interface DateForm extends BaseFields {
	inputType: 'date'
	value: Date | null
	min?: Date
	onSelect: (event: CustomEvent<Date>) => void
}

interface RadioForm extends BaseFields {
	inputType: 'radio'
	onSelect: (event: Event) => void
}

export type FormField = TextForm | DateForm | RadioForm