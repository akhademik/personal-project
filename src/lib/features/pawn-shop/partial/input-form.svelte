<script lang="ts">
	import { PawnItem } from '$lib/features/pawn-shop/states.svelte'

	import { updateInterestRate, updatePawnValue, updatePickedDate } from '../services'
	import Fieldset from './fieldset.svelte'

	const pawnItem = new PawnItem()

	const onInput = (event: Event) => updatePawnValue(event, pawnItem.setValue)
	const onUpdateInterestRate = (event: Event) => updateInterestRate(event, pawnItem.setInterestRate)

	const onUpdatePawnDate = (event: CustomEvent<Date>) =>
		updatePickedDate(event, pawnItem.setPawnDate)

	const onUpdateRedemptionDate = (event: CustomEvent<Date>) =>
		updatePickedDate(event, pawnItem.setRedemptionDate)
</script>

<form
	class="border border-red-600 pb-4 font-bold text-red-400"
	on:submit|preventDefault={() => console.log('form submit')}>
	<Fieldset
		labelName="Giá Tiền"
		fieldName="pawn-item-value"
		inputType="text"
		value={pawnItem.value}
		{onInput} />
	<Fieldset
		labelName="Ngày Cầm"
		fieldName="pawn-date"
		inputType="date"
		value={pawnItem.pawnDate}
		min={pawnItem.minPickDate}
		onSelect={onUpdatePawnDate} />
	<Fieldset
		labelName="Ngày Chuộc"
		fieldName="redemption-date"
		inputType="date"
		value={pawnItem.redemptionDate}
		onSelect={onUpdateRedemptionDate} />
	<Fieldset
		labelName="Lãi Suất"
		fieldName="pawn-interest-rate"
		onSelect={onUpdateInterestRate}
		inputType="radio" />
	<button class="m-auto block border px-4 hover:bg-lime-300">Tính Giá</button>
	<div>
		<h1>Money: {pawnItem.value}</h1>
		<h1>Rate: {pawnItem.interestRate}</h1>
		<h1>Days: {pawnItem.totalPawnDays}</h1>
		<h1>Interest: {pawnItem.interestValue}</h1>
	</div>
</form>
