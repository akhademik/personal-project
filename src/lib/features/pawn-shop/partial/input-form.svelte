<script lang="ts">
	import { PawnItem } from '$lib/features/pawn-shop/states.svelte'

	import {
		handleDateSelect,
		handleFormSubmit,
		handlePawnValueChange,
		handleRateChange,
	} from '../services'
	import Fieldset from './fieldset.svelte'

	const pawn = new PawnItem()

	const onPawnValueInput = (event: Event) =>
		handlePawnValueChange(event, pawn.setValue)
	const onInterestRateChange = (event: Event) =>
		handleRateChange(event, pawn.setRate)
	const onEndDateChange = (event: CustomEvent<Date>) =>
		handleDateSelect(event, pawn.setEndDate)
	const onStartDateChange = (event: CustomEvent<Date>) =>
		handleDateSelect(event, pawn.setStartDate)
</script>

<form
	class="border border-red-600 px-4 pb-4 [&_label]:font-bold [&_label]:text-red-400"
	on:submit|preventDefault={handleFormSubmit}>
	<Fieldset
		labelName="Giá Tiền"
		fieldName="pawn-value"
		placeholder="Số tiền cầm"
		inputType="text"
		value={pawn.value}
		onInput={onPawnValueInput} />
	<Fieldset
		labelName="Ngày Cầm"
		fieldName="start-date"
		inputType="date"
		value={pawn.startDate}
		min={pawn.minPickDate}
		onSelect={onStartDateChange} />
	<Fieldset
		labelName="Ngày Chuộc"
		fieldName="end-date"
		inputType="date"
		value={pawn.endDate}
		onSelect={onEndDateChange} />
	<Fieldset
		labelName="Lãi Suất"
		fieldName="interest-rate"
		onSelect={onInterestRateChange}
		inputType="radio" />
	<button
		type="submit"
		class="m-auto block rounded-lg border-2 border-red-400 px-5 py-1 font-bold hover:border-transparent hover:bg-lime-300 hover:text-red-400"
		>Tính Giá</button>
	<div>
		<h1>Money: {pawn.value}</h1>
		<h1>Rate: {pawn.rate}</h1>
		<h1>Days: {pawn.duration}</h1>
		<h1>Interest: {pawn.interest}</h1>
	</div>
</form>
