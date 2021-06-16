<script>
	import Router from 'svelte-spa-router'
	import routes from './router'
</script>

<Router {routes} />

<style>
	:global(.ccc) {
		color: #ccc;
	}
</style>
