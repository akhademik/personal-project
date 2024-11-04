<script lang="ts">
	type Prop = {
		name: string
		forLabel: string
	}
	let { name, forLabel }: Prop = $props()
</script>

<label class="font-bold text-red-400" for={forLabel}>{name} :</label>
