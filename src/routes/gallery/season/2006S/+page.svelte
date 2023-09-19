<script lang="ts">
    import { numberOfPhotos } from "$lib";
    import BackButton from "$lib/BackButton.svelte";
    import Masonry from "$lib/Masonry.svelte";
    import Banner from "$lib/Banner.svelte";
    import { page } from "$app/stores";
    import "$lib/heights.css";

    const slug = $page.url.pathname.split("/")[3];

    const year = slug.slice(0, 4);

    var num = numberOfPhotos.get(slug);
    const images = Array.from({length: (num ?? 0)}, (_, i) => (num ?? 0) - i);
</script>

<svelte:head>
    <title>Catatronics | {year} Season</title>
</svelte:head>

<BackButton href="/photos"/>

<Banner banner="{year} Season"/>

<Masonry images={images} hightClass="s{year}" src={`/img/seasons/${slug}/${slug.toLowerCase()}`} alt="{year} Season"/>