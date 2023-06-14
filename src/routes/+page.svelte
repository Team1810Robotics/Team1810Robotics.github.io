<svelte:head>
    <title>Catatronics | Home</title>
</svelte:head>

<div class="overflow-hidden h-[85vh]">
    <div class="bg-home bg-fixed bg-center bg-no-repeat bg-cover h-full w-full blur-md"></div>
</div>

<div class="container text-w font-bold backdrop-blur-lg border-2 border-w bg-[#00000099] p-5">
    <h1 class="text-center text-[2.5rem]">hello, this is [Team 1810]</h1>
    <h2 class="text-center text-base border-b border-w pb-4">(this page is under construction)</h2>
</div>

<div class="bg-fg px-12 py-12">
    <h3 class="text-center text-3xl font-bold">for now check out:</h3>
    <ul class="list-disc list-outside text-xl leading-10">
        <li>our <a class="italic text-link hover:underline visited:text-link-visited" href="https://www.usd232.org/Domain/3832" target=_blank> district page</a></li>
        <li>or our <a class="italic text-link hover:underline visited:text-link-visited" href="https://github.com/Team1810Robotics" target=_blank>github</a></li>
        <hr class="mt-4">
    </ul>
    <h3 class="text-center text-2xl font-bold">contact us:</h3>
    <ul class="list-disc text-w text-xl leading-10">
        <li>Neil McLeod</li>
        <ul class="list-disc ml-12">
            <li>nmcleod@usd232.org</li>
            <li>(913) 422-4351 ext 3140</li>
        </ul>
        <br>
        <li>Dianna Worm Mayfield </li>
        <ul class="list-disc ml-12">
            <li>dworm@usd232.org</li>
            <li>(913) 620-2920</li>
        </ul>
    </ul>
</div>

<style lang="postcss">
    .container {
        /* TODO: use better way to center */
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);

        width: clamp(300px, 40%, 700px);
        box-shadow: 10px 10px 10px 5px rgba(0, 0, 32, 0.2);
    }
</style>