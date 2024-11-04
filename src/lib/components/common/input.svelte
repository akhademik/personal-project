<script lang="ts">
	type Props = {
		name: string
		value: string
		onInput: (e: Event) => void
	}

	let { value = $bindable(), onInput, name }: Props = $props()
</script>

<input class="border px-2 focus:outline-none" type="text" {name} {value} oninput={onInput} />
