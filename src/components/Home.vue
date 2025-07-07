<template>
    <section class=" flex flex-col items-center justify-center text-center h-screen w-full bg-[url('https://videos.openai.com/vg-assets/assets%2Ftask_01jzjvf678ft1scv243prv2dy0%2F1751905868_img_0.webp?st=2025-07-07T15%3A00%3A30Z&se=2025-07-13T16%3A00%3A30Z&sks=b&skt=2025-07-07T15%3A00%3A30Z&ske=2025-07-13T16%3A00%3A30Z&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skoid=8ebb0df1-a278-4e2e-9c20-f2d373479b3a&skv=2019-02-02&sv=2018-11-09&sr=b&sp=r&spr=https%2Chttp&sig=m6uIA6XpUDUOcmCtvsN0rHaJL6xMH9Eri0NqsfC%2B%2BNs%3D&az=oaivgprodscus')] bg-center bg-no-repeat bg-cover">
        <img src="C:\Users\ASUS\Desktop\VueTailwindTest\vite-project\src\assets\LeftLeaves.png" 
        class="select-none pointer-events-none absolute left-0 top-0 h-full w-48"/>
        <img src="C:\Users\ASUS\Desktop\VueTailwindTest\vite-project\src\assets\RightLeaves.png" 
        class="absolute right-0 bottom-0 pointer-events-none h-full w-60"/>
        <div class="relative z-10 px-6">
            <h1 class="text-4xl sm:text-6xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-[#0f3901] via-[#3fa11e] to-[#a2c73d] font-RubikDirt drop-shadow-md">
                Home Sweet Home
            </h1>
            <p class="mt-6 max-w-xl text-lg bg-gradient-to-r from-[#704f29] via-[#935e38] to-[#c6a47acd] bg-clip-text text-transparent [text-shadow:_1px_1px_0px_#d8c1a5,_1px_1px_0px_#d8c1a5,_-1px_-1px_0px_#00000040]  font-Frijole">
                    Just now the lilac is in bloom,<br/>

                    All before my little room;<br/>

                    And in my flower-beds, I think,<br/>

                    Smile the carnation and the pink;<br/>

                    <p class="pl-55">-Rupert Brooke (The Old Vicarage)</p>
            </p>
            <div class="mt-10 flex gap-4 justify-center pr-25">
                <router-link to="/about" class="relative inline-block hover:brightness-110 transition-all duration-300">
                    <img src="https://videos.openai.com/vg-assets/assets%2Ftask_01jzj21dcge0db655bfs3pvbyx%2F1751879098_img_1.webp?st=2025-07-07T07%3A31%3A48Z&se=2025-07-13T08%3A31%3A48Z&sks=b&skt=2025-07-07T07%3A31%3A48Z&ske=2025-07-13T08%3A31%3A48Z&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skoid=8ebb0df1-a278-4e2e-9c20-f2d373479b3a&skv=2019-02-02&sv=2018-11-09&sr=b&sp=r&spr=https%2Chttp&sig=oQxrRhNAwTYoiwtGz9IVrOiKBeY21u8WJkxZGTY1nuI%3D&az=oaivgprodscus"
                    alt="Enter the Garden"
                    class="w-40 h-40"/>
                    <span class="absolute inset-0 flex items-center justify-center font-Frijole bg-gradient-to-r from-[#704f29] via-[#935e38] to-[#c6a47acd] bg-clip-text text-transparent [text-shadow:_1px_1px_0px_#d8c1a5,_1px_1px_0px_#d8c1a5,_-1px_-1px_0px_#00000040] pointer-events-none">
                        Enter your Home
                    </span>
                </router-link>
            </div>
        </div>
    </section>
</template>