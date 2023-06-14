<script lang="ts">
    import "../app.css";
</script>

<nav class="flex justify-evenly items-center bg-fg text-w font-bold h-[8vh]">
    <h1 class="uppercase letterspace-wide text-xl group">
        Catatronics
        <span class="block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-w max-md:hidden"></span>
    </h1>
    <ul class="letterspace-thin relative text-sm flex justify-around w-4/5">
        <li class="group">
            <a href="/">Home</a>
            <span class="block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-w max-md:hidden"></span>
        </li>
        <li class="group">
            <a href="https://www.usd232.org/Page/5145" target="_blank">Calendar</a>
            <span class="block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-w max-md:hidden"></span>
        </li>
        <li class="group">
            <a href="https://www.usd232.org/Page/6757" target="_blank">Regional Info</a>
            <span class="block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-w max-md:hidden"></span>
        </li>
        <li class="group">
            <a href="/photos">Photo Gallery</a>
            <span class="block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-w max-md:hidden"></span>
        </li>
        <li class="group">
            <a href="https://www.usd232.org/Page/8007" target="_blank">Links & Articles</a>
            <span class="block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-w max-md:hidden"></span>
        </li>
        <li class="group">
            <a href="https://www.usd232.org/Page/6811" target="_blank">Forms</a>
            <span class="block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-w max-md:hidden"></span>
        </li>
        <li class="group">
            <a href="/sponsors">Sponsors</a>
            <span class="block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-w max-md:hidden"></span>
        </li>
    </ul>
</nav>

<slot/>

<style lang="postcss">
    .letterspace-wide {
        letter-spacing: 5px;
    }
    .letterspace-thin {
        letter-spacing: 2px;
    }
</style>