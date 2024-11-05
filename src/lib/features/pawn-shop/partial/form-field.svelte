<script lang="ts">
	import DatePicker from '$components/date-picker.svelte'
	import Input from '$components/input.svelte'
	import Label from '$components/label.svelte'

	interface BaseFormField {
		labelName: string
		fieldName: string
	}

	interface TextFormField extends BaseFormField {
		inputType: 'text'
		value: string
		onInput: (event: Event) => void
	}

	interface DateFormField extends BaseFormField {
		inputType: 'date'
		value: Date | null
		onSelect: (event: CustomEvent<Date>) => void
	}
	interface RadioFormField extends BaseFormField {
		inputType: 'radio'
		onSelect: (event: Event) => void
	}

	type FormField = TextFormField | DateFormField | RadioFormField

	const rateOptions = [
		{ text: '5%', rate: 0.05 },
		{ text: '4,5%', rate: 0.045 },
		{ text: '4%', rate: 0.04 },
	]

	const props: FormField = $props()
</script>

<div class="flex justify-between gap-2 p-2">
	<Label
		name={props.labelName}
		forLabel={props.fieldName} />

	{#if props.inputType === 'text'}
		<Input
			name={props.fieldName}
			value={props.value}
			onInput={props.onInput} />
	{:else if props.inputType === 'date'}
		<DatePicker
			value={props.value}
			onSelect={props.onSelect} />
	{:else if props.inputType === 'radio'}
		<ul class="flex gap-4">
			{#each rateOptions as rate}
				<li class="flex gap-2">
					<input
						name="pawn-interest-rate"
						value={rate.rate}
						checked={rate.rate === 0.05}
						onchange={props.onSelect}
						type="radio" /><span>{rate.text}</span>
				</li>
			{/each}
		</ul>
	{/if}
</div>
