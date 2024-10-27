<script lang="ts">
    import { HoverCard,HoverCardContent, HoverCardTrigger } from "$lib/components/ui/hover-card";
    import { Avatar, AvatarImage, AvatarFallback } from "$lib/components/ui/avatar";
    import { 
        Disc, 
        Database, 
        CircleUserRound, 
        Briefcase, 
        MapPin, 
        GraduationCap ,
        PanelsTopLeft,
        TabletSmartphone,
        Server,
    } from "lucide-svelte"; 
    import JirayuthImage from '@images/jirayuth-img.jpg';

    /// After getting the word, 
    /// 1. loop through the words inside the list, put them into array
    /// 1.5 if word already exist inside array, remove it out one by one. Otherwise go to step 2
    /// 2. loop each letter from array and display it
    /// 3. repeat
    let displayWords: string[] = $state.raw(["_"]);
    let displayWord: string = $state("");
    let randomWord: string = _retrivedRandomWord();
    let timeUpdate: number = 120;
    const timer = (timeUpdate: number | undefined) => new Promise(res => setTimeout(res, timeUpdate));

    $effect(() => {
        renderRandomWord();
    });

    async function renderRandomWord() {
        if (displayWords.length > 1) {
            await _removeLetter(displayWords);
        }
        await _addLetter(randomWord);  
        randomWord = _retrivedRandomWord();
        setTimeout(renderRandomWord, displayWords.length * timeUpdate);
    }

    async function _addLetter(word: string) {
        let letters = word.split("");
        for (let i = 0; i < letters.length; i++) {
            displayWords.splice(i,0,letters[i]);
            // displayWords.splice(displayWords.length, 0, "_");
            displayWord = displayWords.join("");
            await timer(timeUpdate);
        }
    }

    async function _removeLetter(displayWords: string[]) {
        for (let i = displayWords.length; i > 1; i--) {
            displayWords.splice(i - 2,1);
            displayWord = displayWords.join("");
            await timer(timeUpdate);
        }
    }

    function _retrivedRandomWord():string {
        let words = [
            "The Face of Your Next Hiring Choice",
            "Jirayuth's Portfolio", 
            "Jumbo's Jet", 
            "My Little Tiny World", 
            "My Hidden Lair",
            "A Selected Showcase of My Finest Works", 
            "What?",
            "The Only Safe Space",
            "The Future"
        ];
        let selectedWord = words[Math.floor(Math.random() * words.length)];
        return selectedWord;
    }

    
</script>


<h1 class="text-6xl font-bold text-start px-12">
    Welcome to {displayWord}
</h1>
<h2 class="text-2xl font-thin text-start px-12">This is my selected portfolio</h2>
<br />
<div class="flex gap-12 px-12 justify-between h-full">
    <div class="flex-1 gap-2">
        <p class="text-lg font-thin text-start">
            Self-taught Full Stack Software Engineer with a Bachelor Degree in English from Ramkhamhaeng University. Currently in Bangkok, Thailand.
            <br />
            I'm currently working as a Junior Developer at 
            <HoverCard>
                <HoverCardTrigger 
                    href="https://www.techbusiness.co.th/" 
                    target="_blank" 
                    rel="noreferrer noopener" 
                    class="rounded-md underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-8 focus-visible:outline-black">
                    @Tech Business
                </HoverCardTrigger>
                <HoverCardContent class="w-80">
                    <div class="flex space-x-4">
                        <div class="space-y-1">
                            <h3 class="font-bold text-md">Tech Business Co,Ltd</h3>
                            <h4 class="text-sm font-semibold">@techbusiness</h4>
                            <p class="text-sm">Moving & Developing Software with Future-Forward Technologies</p>
                        </div>
                        <Avatar class="justify-end">
                            <AvatarImage src="/"></AvatarImage>
                            <AvatarFallback>TB</AvatarFallback>
                        </Avatar>
                        
                    </div>
                </HoverCardContent>
            </HoverCard>
            <br />
            As the company is growing, I've been working in all sort of tech fields. From frontend development to backend development, 
            From Web Development to Mobile Development. 
            Over the past year, I've been focusing on building user-friendly and responsive websites and mobile applications. 
            I'm also passionate about learning new technologies and staying up-to-date with the latest trends in the industry.
            <br />
            If you're interested in working with me, please feel free to reach out to me through my contact page.
            <br />
            Thank you for visiting my portfolio!
        </p>
    </div>
    <div class="flex-1 gap-4">
        <ul class="text-lg font-bold text-start list-disc">
            <li class="flex flex-row gap-2 items-center"><CircleUserRound />Name - Jirayuth Porka (Jumbo or Bo in short)</li>
            <li class="flex flex-row gap-2 items-center"><Briefcase />Current Role - Full Stack Software Engineer</li>
            <li class="flex flex-row gap-2 items-center"><MapPin />Location - Bangkok, Thailand</li>
            <li class="flex flex-row gap-2 items-center"><GraduationCap />Education - Bachelor Degree in English, Ramkhamhaeng University</li>
            <li >Focused on - 
                <ul class="list-disc pl-4">
                    <li class="flex flex-row gap-2 items-center"><PanelsTopLeft />Frontend Development</li>
                    <li class="flex flex-row gap-2 items-center"><TabletSmartphone />Mobile Development</li>
                </ul>
            </li>
            <li>
                Nice to have - 
                <ul class="list-none pl-4">
                    <li class="flex flex-row gap-2 items-center"><Server />Backend Development</li>
                    <li class="flex flex-row gap-2 items-center"><Database />Database Management</li>
                </ul>
            </li>
            <li>
                Technologies - 
                <ul class="list-disc pl-4">
                    <li class="gap-2 items-center">Comfortable - 
                        <ul class="list-disc pl-4">
                            <li class="flex flex-row gap-2 items-center">C# (.NET Framework, .NET Core, Winforms)</li>
                            <li class="flex flex-row gap-2 items-center">Dart (Flutter)</li>
                            <li class="flex flex-row gap-2 items-center">Python (Scripting)</li>
                            <li class="flex flex-row gap-2 items-center">Javascript (Node.js)</li>
                        </ul>
                    </li>
                    <li class="gap-2 items-center">Learning - 
                        <ul class="list-disc pl-4">
                            <li class="flex flex-row gap-2 items-center">C++, Rust (Embedded)</li>
                            <li class="flex flex-row gap-2 items-center">Swift & Kotlin (Flutter Native Development)</li>
                            <li class="flex flex-row gap-2 items-center">Typescript (SvelteKit)</li>
                        </ul>
                    </li>
                    
                </ul>
            </li>
        </ul>
    </div>
    <Avatar class="rounded-full justify-end w-48 h-48">
        <AvatarImage src={JirayuthImage}></AvatarImage>
        <AvatarFallback>JP</AvatarFallback>
    </Avatar>
</div>