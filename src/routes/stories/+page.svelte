<script lang="ts">
	import AddStory from "$lib/story/AddStory.svelte";

    /** @type {import('./$types').PageData} */
    export let data;
</script>

<h2>Stories</h2>

<AddStory/>

<ol>
    {#each data.stories as story}
        <li>{story.title}</li>
    {/each}
</ol>




