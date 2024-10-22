<script>

import Step from "./Step.svelte";

let steps = [
    {
        name: "Nebula",
        icon: "fa-solid fa-blog",
        description: "LoL",
    },
    {
        name: "Marina Bay",
        icon: "fa-solid fa-hotel",
        description: "LoL",
    },
    {
        name: "Kyalami",
        icon: "fa-solid fa-music",
        description: "LoL",
    },
];

</script>

<main class="flex flex-col flex-1 p-4">
    <section id="introPage" class="grid grid-cols-1 lg:grid-cols-2 gap-10 py-8 sm:py-14">
        <div class="flex flex-col lg:justify-center text-center lg:text-left gap-6 md:gap-8 lg:gap-10">
            <h2 class="font-semibold text-xl sm:text-2xl md:text-3xl">
                Hi! I am <span class="text-violet-400"> Anurag </span> Bhattacharjee <br>
                Software <span class="text-violet-400"> Developer </span> from 
                <span class="text-orange-600">In</span>d<span class="text-green-600">ia</span>
            </h2>
            <p class="text-base sm:text-lg md:text-xl">
                <span class="text-violet-400"> Working with </span> Javascript | Python | C++
            </p>
            <a class="blueShadow mx-auto lg:mr-auto text-base sm:text-lg md:text-xl relative overflow-hidden px-6 py-3 group rounded-full bg-white text-slate-950 cursor-pointer" href="#" target="_blank">
                <div class="absolute top-0 right-full w-full h-full bg-violet-400 opacity-20 group-hover:translate-x-full z-0 duration-200" />
                <h4 class="relative z-9"> Get In Touch &rarr; </h4>
            </a>
        </div>
        <div class="relative shadow-2xl grid place-items-center">
            <img src={"images/port-removebg-preview.png"} alt="Profile Image" class="object-cover z-[2] max-h-[70vh]" />
        </div>
    </section>
    <section id="projects" class="py-20 lg:py-32 flex flex-col gap-24">
        <div class="flex flex-col gap-2 text-center">
            <h6 class="text-lg sm:text-xl md:text-2xl">
                Projects I have worked upon
            </h6>
            <h3 class="font-semibold text-3xl sm:text-4xl md:text-5xl">
                Wanna have <span class="text-violet-400"> a look </span> at my works?
            </h3>
        </div>
        <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank" class="mx-auto px-4 py-2 rounded-md border border-solid border-white flex items-center gap-2 -mb-4 sm:-mb-0 -mt-10 hover:border-violet-700 duration-200">
            <i class="fa-regular fa-circle-play" />
            <p> Watch the video </p>
        </a>
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-10">
            <Step step={steps[0]}>
                <p> Nebula is a Blog Web Application made using <strong class="text-violet-400"> React | Tailwind | Appwrite</strong>. Users can login and write their own blogs or read others blogs. </p>
            </Step>
            <Step step={steps[1]}>
                <p> Marina Bay is a Hotel Booking website made using <strong class="text-violet-400"> NextJS | React | Sanity.IO | Tailwind | Stripe</strong>. Users can book hotels with regular leave applications. </p>
            </Step>
            <Step step={steps[2]}>
                <p> Kyalami is a music web application made using <strong class="text-violet-400"> Django</strong>. Users can listen to music here. </p>
            </Step>
        </div>
    </section>
</main>