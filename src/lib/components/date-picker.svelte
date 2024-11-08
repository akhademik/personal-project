<script lang="ts">
	import { DateInput } from 'date-picker-svelte'

	import { locale } from './services'
	import type { DatePickerProps } from './types'

	let {
		value = $bindable(new Date()),
		min,
		onSelect = () => {},
	}: DatePickerProps = $props()
</script>

<DateInput
	{locale}
	{value}
	closeOnSelection
	{min}
	max={new Date()}
	placeholder="Bấm để chọn ngày"
	format="dd/MM/yyyy"
	class="[--date-input-width:190px] [&_input]:h-[35px] [&_input]:text-center"
	on:select={onSelect} />
