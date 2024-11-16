<script lang="ts">

	import { Avatar, AvatarFallback, AvatarImage } from '$lib/components/ui/avatar';
	import { HoverCard, HoverCardContent, HoverCardTrigger } from '$lib/components/ui/hover-card';
	import {mode} from 'mode-watcher';
	// import github from '@logo/github.svg';
	// import github_dark from '@logo/github-dark.svg';

	function swapColorOnThemeChange(user_icon_light: SVGElement, user_icon_dark: SVGElement) {
		if ($mode === "light") {
			return user_icon_light
		} else {
			return user_icon_dark;
		}
	}

	/// Don't put _icon suffix. Unnecessary.
	export let user_icon_id:string;
	export let user_icon_light:SVGElement;
	export let user_icon_dark:SVGElement;
	export let url: string;

	export let display_name: string;
	export let header: string;
	export let subheader: string;
	export let content: string;
	export let avatar_img_url: string;
	let user_icon: string = `${user_icon_id}_icon`;

</script>

<svg id="{user_icon}" width="32" height="32" xmlns="http://www.w3.org/2000/svg">
	<image href="{swapColorOnThemeChange(user_icon_light, user_icon_dark)}" height="32" width="32"></image>
</svg>
<HoverCard openDelay={100} closeDelay={100}>
	<HoverCardTrigger
		href={url}
		target="_blank"
		rel="noreferrer noopener"
		class="rounded-md underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-8 focus-visible:outline-black">
		{display_name}
	</HoverCardTrigger>
	<HoverCardContent class="w-80">
		<div class="flex space-x-4">
			<div class="space-y-1">
				<h3 class="font-bold text-md">{header}</h3>
				<h4 class="text-sm font-semibold">{subheader}</h4>
				<p class="text-sm">{content}</p>
			</div>
			<Avatar class="justify-end">
				<AvatarImage src={avatar_img_url}></AvatarImage>
				<AvatarFallback>GH</AvatarFallback>
			</Avatar>
		</div>
	</HoverCardContent>
</HoverCard>