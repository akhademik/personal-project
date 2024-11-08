<script lang="ts">
	import DatePicker from '$components/date-picker.svelte'
	import Input from '$components/input.svelte'
	import Label from '$components/label.svelte'

	import type { FormField } from '../types'

	const rateOptions = [
		{ text: '5%', rate: 0.05 },
		{ text: '4,5%', rate: 0.045 },
		{ text: '4%', rate: 0.04 },
	]

	const props: FormField = $props()
</script>

<div class="my-3 flex items-center justify-between gap-2">
	<Label
		name={props.labelName}
		forLabel={props.fieldName} />

	{#if props.inputType === 'text'}
		<Input
			name={props.fieldName}
			value={props.value}
			placeholder={props.placeholder}
			onInput={props.onInput} />
	{:else if props.inputType === 'date'}
		<DatePicker
			min={props.min}
			value={props.value}
			onSelect={props.onSelect} />
	{:else if props.inputType === 'radio'}
		<ul class="flex w-[190px] items-center justify-center gap-4">
			{#each rateOptions as rate}
				<li class="flex gap-2 text-black">
					<input
						name="pawn-interest-rate"
						value={rate.rate}
						checked={rate.rate === 0.05}
						onchange={props.onSelect}
						type="radio" /><span
						class={rate.rate === 0.05 ? 'text-red-600' : ''}>{rate.text}</span>
				</li>
			{/each}
		</ul>
	{/if}
</div>
