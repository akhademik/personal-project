<script lang="ts">
	import DatePicker from '$components/date-picker.svelte'
	import Input from '$components/input.svelte'
	import Label from '$components/label.svelte'

	import type { FormField } from '../types'

	const rates = [
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
		<ul class="flex w-[190px] items-center justify-center gap-5">
			{#each rates as { rate, text }}
				<li class="relative">
					<input
						name="pawn-interest-rate"
						value={rate}
						checked={rate === 0.05}
						onchange={props.onSelect}
						type="radio"
						class="peer absolute h-full w-full cursor-pointer appearance-none" />
					<span
						class="border-2 border-transparent px-2 peer-checked:border-t-blue-600 peer-checked:font-bold peer-checked:text-red-400 peer-hover:border-b-blue-600"
						>{text}</span>
				</li>
			{/each}
		</ul>
	{/if}
</div>
