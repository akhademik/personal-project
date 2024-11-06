<script lang="ts">
	// https://date-picker-svelte.kasper.space/demo
	import { DateInput } from 'date-picker-svelte'

	import { locale } from './services'
	import type { DatePickerProps } from './types'

	let { value = $bindable(), min, onSelect = () => {} }: DatePickerProps = $props()
</script>

<DateInput
	{locale}
	{value}
	closeOnSelection
	{min}
	max={new Date()}
	placeholder=""
	format="dd/MM/yyyy"
	class="[--date-input-width:190px] [&_input]:h-[35px] [&_input]:text-center"
	on:select={onSelect} />
