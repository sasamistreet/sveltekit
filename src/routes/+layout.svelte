<script>
	//import Header from './Header.svelte';
	import '../../node_modules/uikit/dist/css/uikit.css';
    import '../../node_modules/uikit/dist/js/uikit.min.js';
    import '../../node_modules/uikit/dist/js/uikit-icons.min.js';
</script>

<div class="app">
	<main>
		<slot />
	</main>

	<footer>
		<p>visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to learn SvelteKit</p>
	</footer>
</div>