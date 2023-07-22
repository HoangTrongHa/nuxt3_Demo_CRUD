<template>
    <header class="bg-white">
        <div class="container mx-auto px-4 py-8 flex items-center">
            <div class="mr-auto md:w-48 flex-shrink-0">
                <NuxtLink to="/">
                    <img class="h-8 md:h-10" src="https://scontent.fsgn2-9.fna.fbcdn.net/v/t1.6435-1/123397936_827697024651999_695676154837020040_n.jpg?stp=dst-jpg_p160x160&_nc_cat=105&ccb=1-7&_nc_sid=7206a8&_nc_ohc=n0L6meAOClEAX8T9REV&_nc_ht=scontent.fsgn2-9.fna&oh=00_AfA-9X8TCr_0KGLnfrLt36WrKG2cOqKDAgf-iV19r-jzyg&oe=64E2EB9B" alt="logo">
                </NuxtLink>
            </div>
            <div class="ml-auto md:w-48 hidden sm:flex flex-col place-items-end">
                <span class="font-bold md:text-xl">+838584663</span>
            </div>
        </div>
    </header>
    <div class="px-2.5 w-full z-0">
        <slot />
    </div>
  </template>
  