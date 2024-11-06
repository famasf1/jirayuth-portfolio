<script lang="ts">
    import type { PageData } from './$types';
    import {HoverCard, HoverCardTrigger, HoverCardContent } from '$lib/components/ui/hover-card';
    import { Avatar, AvatarImage, AvatarFallback } from "$lib/components/ui/avatar";
    import {mode} from 'mode-watcher';
    import github from '@logo/github.svg';
    import github_dark from '@logo/github-dark.svg';
    // export let data: PageData;


    function swapColorOnThemeChange() {
        if ($mode === "light") {
            return github
        } else {
            return github_dark;
        }
    }

</script>

<h1 class="text-6xl font-bold text-start px-12">
    Contact
</h1>

<div class="flex gap-12 px-12 justify-start h-10 pt-4">
    <svg id="github-icon" width="32" height="32" xmlns="http://www.w3.org/2000/svg">
        <image href="{swapColorOnThemeChange()}" height="32" width="32"></image>
    </svg>
    <HoverCard openDelay={100} closeDelay={100}>
        <HoverCardTrigger 
            href="https://github.com/famasf1/" 
            target="_blank" 
            rel="noreferrer noopener" 
            class="rounded-md underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-8 focus-visible:outline-black">
            Jirayuth Porka
        </HoverCardTrigger>
        <HoverCardContent class="w-80">
            <div class="flex space-x-4">
                <div class="space-y-1">
                    <h3 class="font-bold text-md">Jirayuth Porka</h3>
                    <h4 class="text-sm font-semibold">@famasf1</h4>
                    <p class="text-sm">Mobile & Web Developer, \n C#, Javascript, TypeScript, Python, Dart</p>
                </div>
                <Avatar class="justify-end">
                    <AvatarImage src="https://avatars.githubusercontent.com/u/86623043"></AvatarImage>
                    <AvatarFallback>GH</AvatarFallback>
                </Avatar>
                
            </div>
        </HoverCardContent>
    </HoverCard>
</div>

<style>

</style>