<script lang="ts">
	import type { LabelProps } from './types'

	let { name, forLabel }: LabelProps = $props()
</script>

<label class="font-bold text-red-400" for={forLabel}>{name} :</label>
