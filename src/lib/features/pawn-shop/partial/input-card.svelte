<script lang="ts">
	import { PawnItem } from '$lib/features/pawn-shop/states.svelte'

	import FormField from './form-field.svelte'
	import { updateDate, updateInterestRate, updateValue } from './input-services'

	const pawnItem = new PawnItem()

	const onInput = (event: Event) => updateValue(event, pawnItem.setValue)
	const onUpdatePawnDate = (event: CustomEvent<Date>) => updateDate(event, pawnItem.setPawnDate)
	const onUpdateInterestRate = (event: Event) => updateInterestRate(event, pawnItem.setInterestRate)

	const onUpdateRedemptionDate = (event: CustomEvent<Date>) =>
		updateDate(event, pawnItem.setRedemptionDate)
</script>

<div class="border border-red-600 p-3">
	<FormField
		labelName="Giá Tiền"
		fieldName="pawn-item-value"
		inputType="text"
		value={pawnItem.value}
		{onInput} />
	<FormField
		labelName="Ngày Cầm"
		fieldName="pawn-date"
		inputType="date"
		value={pawnItem.pawnDate}
		min={pawnItem.minPickDate}
		onSelect={onUpdatePawnDate} />
	<FormField
		labelName="Ngày Chuộc"
		fieldName="redemption-date"
		inputType="date"
		value={pawnItem.redemptionDate}
		onSelect={onUpdateRedemptionDate} />
	<FormField
		labelName="Lãi Suất"
		fieldName="pawn-interest-rate"
		onSelect={onUpdateInterestRate}
		inputType="radio" />

	<div>
		<h1>Money: {pawnItem.value}</h1>
		<h1>Rate: {pawnItem.interestRate}</h1>
		<h1>Days: {pawnItem.totalPawnDays}</h1>
	</div>
</div>
