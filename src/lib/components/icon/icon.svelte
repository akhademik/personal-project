<script lang="ts">
	import type { Icon, IconProps } from '$components/types'
	import { icons } from '$lib/components/icon/icons'

	let { name, class: _class }: IconProps = $props()

	const icon: Icon = $state(icons[name])
	const width = icon.box_width
	const height = icon.box_height || width
</script>

<svg
	class={_class || 'h-8 w-8'}
	viewBox={`0 0 ${width} ${height}`}>
	<!-- eslint-disable-next-line svelte/no-at-html-tags -->
	{@html icon.svg}
</svg>
