<script lang="ts">
	import type { LabelProps } from './types'

	let { name, forLabel }: LabelProps = $props()
</script>

<label
	class="pr-3 text-lg"
	for={forLabel}>{name} :</label>
