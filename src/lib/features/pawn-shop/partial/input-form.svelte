<script lang="ts">
	import { PawnItem } from '$lib/features/pawn-shop/states.svelte'

	import { handleDateSelection, handlePawnValueChange, handleRateChange } from '../services'
	import Fieldset from './fieldset.svelte'

	const pawnItem = new PawnItem()

	const onPawnAmountInput = (event: Event) => handlePawnValueChange(event, pawnItem.setValue)

	const onInterestRateChange = (event: Event) => handleRateChange(event, pawnItem.setInterestRate)

	const onStartDateChange = (event: CustomEvent<Date>) =>
		handleDateSelection(event, pawnItem.setStartDate)

	const onEndDateChange = (event: CustomEvent<Date>) =>
		handleDateSelection(event, pawnItem.setEndDate)
</script>

<form
	class="border border-red-600 px-4 pb-4 font-bold text-red-400"
	on:submit|preventDefault={() => console.log('form submit')}>
	<Fieldset
		labelName="Giá Tiền"
		fieldName="pawn-item-value"
		inputType="text"
		value={pawnItem.value}
		onInput={onPawnAmountInput} />
	<Fieldset
		labelName="Ngày Cầm"
		fieldName="pawn-date"
		inputType="date"
		value={pawnItem.startDate}
		min={pawnItem.minPickDate}
		onSelect={onStartDateChange} />
	<Fieldset
		labelName="Ngày Chuộc"
		fieldName="end-date"
		inputType="date"
		value={pawnItem.endDate}
		onSelect={onEndDateChange} />
	<Fieldset
		labelName="Lãi Suất"
		fieldName="pawn-interest-rate"
		onSelect={onInterestRateChange}
		inputType="radio" />
	<button class="m-auto block border px-4 hover:bg-lime-300">Tính Giá</button>
	<div>
		<h1>Money: {pawnItem.value}</h1>
		<h1>Rate: {pawnItem.interestRate}</h1>
		<h1>Days: {pawnItem.totalPawnDays}</h1>
		<h1>Interest: {pawnItem.interestValue}</h1>
	</div>
</form>
