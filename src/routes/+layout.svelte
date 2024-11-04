<script lang="ts">
	import NavBar from '$lib/layout/nav-bar'

	import '$lib/styles/app.css'
	import '$lib/styles/tailwind.css'

	let { children } = $props()
</script>

<NavBar />
{@render children()}
