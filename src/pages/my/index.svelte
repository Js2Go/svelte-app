<script>
  import { push } from 'svelte-spa-router'

  export let params

  console.log(params)

  const p = () => {
    push('/?i=1&b=2')
  }
</script>

<div>
  My
  <button on:click={p}>去主页</button>
</div>

<style>
  div {
    color: green;
  }
</style>
