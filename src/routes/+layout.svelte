<script>
	import '../app.css';
	import { i18n } from '$lib/i18n';
	import { ParaglideJS } from '@inlang/paraglide-sveltekit';
	import { ModeWatcher } from "mode-watcher";
	import {Button} from "$lib/components/ui/button";
    import Sun from "lucide-svelte/icons/sun"
    import Moon from "lucide-svelte/icons/moon";
    import { toggleMode } from "mode-watcher";
	let { children } = $props();
</script>

<ParaglideJS {i18n}>
	<ModeWatcher />
	<main>
		<div class="mr-12">
			<nav class="justify-end my-12 mx-auto flex flex-row gap-4">
				<Button onclick={toggleMode} variant="outline" size="icon">
					<Sun class="h-[1-2rem] w-[1-2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
					<Moon class="absolute h-[1-2rem] w-[1-2rem] rotate-45 scale-0 transition-all dark:rotate-0 dark:scale-100" />
					<span class="sr-only">Toggle theme</span>
				</Button>
				<Button href="/" class="text-2xl font-bold" variant="outline">About Me</Button>
				<Button href="/works" class="text-2xl font-bold"  variant="outline">Work</Button>
				<Button href="/contact" class="text-2xl font-bold"  variant="outline">Contact</Button>
			</nav>
			{@render children()}
		</div>
	</main>

	<footer class="flex flex-row gap-4 p-12 text-start max-h-full absolute bottom-0 w-full">
		<p>2024 © Jirayuth Porka</p>
	</footer>
</ParaglideJS>
