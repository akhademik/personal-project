<script lang="ts">
	// https://date-picker-svelte.kasper.space/demo
	import { DateInput } from 'date-picker-svelte'

	import { locale } from './services'

	type Props = {
		value?: Date | null
		onSelect?: (event: CustomEvent<Date>) => void
	}

	let today = new Date()
	let minDate = new Date()
	minDate.setDate(today.getDate() - 120)

	let { value = $bindable(), onSelect = () => {} }: Props = $props()
</script>

<DateInput
	{locale}
	{value}
	closeOnSelection
	min={minDate}
	max={today}
	placeholder=""
	format="dd/MM/yyyy"
	class="[--date-input-width:190px] [&_input]:h-[35px] [&_input]:text-center"
	on:select={onSelect} />
