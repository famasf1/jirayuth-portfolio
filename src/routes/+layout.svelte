<script>
	import '../app.css';
	import { i18n } from '$lib/i18n';
	import { ParaglideJS } from '@inlang/paraglide-sveltekit';
	import { ModeWatcher } from "mode-watcher";
	let { children } = $props();
</script>

<ParaglideJS {i18n}>
	<ModeWatcher />
	{@render children()}
</ParaglideJS>
