<script lang="ts">
	import { InputState } from '$lib/components/common/common-states.svelte'
	import Input from '$lib/components/common/input.svelte'
	import Label from '$lib/components/common/label.svelte'
	import { formatMoney } from '$lib/utils/numberHelper'

	const money = new InputState()

	const onInput = (event: Event) => {
		const input = event.target as HTMLInputElement
		input.value = formatMoney(input.value)
		money.changeValue(input.value)
	}
</script>

<div class="border border-red-600 p-3">
	<div class="flex justify-between gap-2 p-2">
		<Label name="Giá Tiền" forLabel="money" />
		<Input name="money" value={money.value} {onInput} />
	</div>
</div>
