<script>
	import { fade } from 'svelte/transition'
  import { link, location, querystring } from 'svelte-spa-router'
  
  console.log($location)
  console.log($querystring)
</script>

<div in:fade={{ duration: 500 }}>
  Index
  <a href="/my/11/1.11.2" use:link>点我一下</a>
</div>

<style>
  div {
    color: red;
  }
</style>
