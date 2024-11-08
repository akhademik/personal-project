<script lang="ts">
	import type { InputProps } from './types'

	let { value = $bindable(), onInput, name, placeholder }: InputProps = $props()
</script>

<input
	{name}
	{value}
	{placeholder}
	class="h-[35px] w-[190px] border px-2 text-center focus:outline-none"
	type="text"
	oninput={onInput} />
