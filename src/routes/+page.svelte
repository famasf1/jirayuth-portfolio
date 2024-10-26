<script lang="ts">
    import {Button} from "$lib/components/ui/button";
    import Sun from "lucide-svelte/icons/sun"
    import Moon from "lucide-svelte/icons/moon";
    import { toggleMode } from "mode-watcher";

    /// After getting the word, 
    /// 1. loop through the words inside the list, put them into array
    /// 1.5 if word already exist inside array, remove it out one by one. Otherwise go to step 2
    /// 2. loop each letter from array and display it
    /// 3. repeat
    let displayWord:string[] = [];

    function _addLetter(word: string) {
        let letters = word.split("");
        for (let i = 0; i < letters.length; i++) {
            displayWord += letters[i];
        }
    }

    function _removeLetter(displayWord: string[]) {
        for (let i = 0; i < displayWord.length; i++) {
            displayWord.splice(i, 1);
        }
    }

    function randomWord() {
        let words = ["Jirayuth's Portfolio", "Jumbo's Jet", "My Little Tiny World", "My Hidden Lair", "What?"];
        return words[Math.floor(Math.random() * words.length)];
    }
</script>
<main>
    <div class="mr-12">
        <nav class="justify-end my-12 mx-auto flex flex-row gap-4">
            <Button onclick={toggleMode} variant="outline" size="icon">
                <Sun class="h-[1-2rem] w-[1-2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                <Moon class="absolute h-[1-2rem] w-[1-2rem] rotate-45 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                <span class="sr-only">Toggle theme</span>
            </Button>
            <Button href="/" class="text-2xl font-bold" variant="outline">About Me</Button>
            <Button href="/contact" class="text-2xl font-bold"  variant="outline">Work</Button>
            <Button href="/about" class="text-2xl font-bold"  variant="outline">Contact</Button>
        </nav>
        <h1 class="text-6xl font-bold text-start px-12">
            Welcome to {randomWord()}
        </h1>
    </div>
</main>
