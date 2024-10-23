<script>

import Step from "./Step.svelte";

let steps = [
    {
        name: "Riverside",
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
    {
        name: 'Paul Ricard',
        icon: "fa-solid fa-robot",
    },
    {
        name: "Vegas",
        icon: "fa-solid fa-tv"
    },
    {
        name: "Mugello",
        icon: "fa-solid fa-envelope"
    },
    {
        name: "Sebring",
        icon: "fa-brands fa-space-awesome"
    },
    {
        name: "Adelaide",
        icon: "fa-solid fa-image"
    },
    {
        name: "Suzuka",
        icon: "fa-brands fa-bluesky"
    }
]


let benefits = [
    {
        metric: "10x",
        name: "Website Development",
        description: "Making full stack websites using React, NextJS, ExpressJS, Django, FastAPI. Got good command in Javascript and Python.",
    },
    {
        name: "Application Development",
        description: "Making cross-platform mobile application (specifically for Android and iOS using Flutter.",
    },
    {
        name: "Dev-Ops",
        description: "Doing CI/CD using Gitlab and contenerization using Docker. Knowledge of cloud platforms like AWS.",
    },
    {
        name: "Design and UI/UX",
        description: "Making designs, templates and architecture workflow diagrams and demonstrations using Figma and Canva.",
    }
]

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
                <p> Riverside is a Blog Web Application made using <strong class="text-violet-400"> React | Tailwind | Appwrite</strong>. Users can login and write their own blogs or read others blogs. </p>
            </Step>
            <Step step={steps[1]}>
                <p> Marina Bay is a Hotel Booking website made using <strong class="text-violet-400"> NextJS | React | Sanity.IO | Tailwind | Stripe</strong>. Users can book hotels with regular leave applications. </p>
            </Step>
            <Step step={steps[2]}>
                <p> Kyalami is a music web application made using <strong class="text-violet-400"> Django</strong>. Users can listen to music here. </p>
            </Step>
            <Step step={steps[3]}>
                <p> Paul Ricard is a SaaS AI Chatbot made using <strong class="text-violet-400"> React | Node | MongoDB | Express</strong>. Users can chat with it for fun. </p>
            </Step>
            <Step step={steps[4]}>
                <p> Vegas is a video streaming and creating mobile app made using <strong class="text-violet-400"> Flutter | Firebase | Riverpod</strong>. Users can chat with it for fun. </p>
            </Step>
            <Step step={steps[5]}>
                <p> Mugello is a E-mail web application made using <strong class="text-violet-400"> VueJS | Laravel</strong>. Users can send and receive mail. </p>
            </Step>
            <Step step={steps[6]}>
                <p> Sebring is a Wormhole Shooting mini-game made using <strong class="text-violet-400"> 3JS</strong>. Users can shoot objects inside wormhole and have tons of fun. </p>
            </Step>
            <Step step={steps[7]}>
                <p> Adelaide is a image storing website made using <strong class="text-violet-400"> NextJS | Cloudinary</strong>. Users can shoot objects inside wormhole and have tons of fun. </p>
            </Step>
            <Step step={steps[8]}>
                <p> Suzuka is a Twitter-clone made using <strong class="text-violet-400"> NextJS | Supabase</strong>. Users can do tweets and follows and comments to each other. </p>
            </Step>
        </div>
    </section>
    <section id="about" class="py-20 pt-10 lg:pt-16 lg:py-32 flex flex-col gap-16 sm:gap-20 md:gap-24 relative">
        <div class="flex flex-col gap-2 text-center relative before:absolute before:top-0 before:left-0 before:w-2/3 before:h-1.5 before:bg-violet-700 after:absolute after:bottom-0 after:right-0 after:w-2/3 after:h-1.5 after:bg-violet-700 py-4">
            <h6 class="text-lg sm:text-xl md:text-2xl"> Want to know me more? </h6>
            <h3 class="font-semibold text-3xl sm:text-4xl md:text-5xl">
                A bit <span class="text-violet-400"> about </span> me.
            </h3>
        </div>
        <div class="flex flex-col gap-20 w-full mx-auto max-w-[800px]">
            {#each benefits as benefit, index}
                <div class="flex gap-6 sm:gap-8">
                    <p
                        class="poppins text-4xl sm:text-5xl md:text-6xl text-slate-500 font-semibold"
                    >
                        0{index + 1}
                    </p>
                    <div class="flex flex-col gap-6 sm:gap-8">
                        <h3 class="text-2xl sm:text-3xl md:text-5xl">
                            {benefit.name}
                        </h3>
                        <p>{benefit.description}</p>
                    </div>
                </div>
            {/each}
        </div>
    </section>
</main>