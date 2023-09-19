<script>
	import AddStory from '$lib/story/AddStory.svelte';
    import { invalidateAll, invalidate } from '$app/navigation';
    import { enhance } from '$app/forms';
    import { onMount } from 'svelte';
    
	/** @type {import('./$types').PageData} */
	export let data;  

	/** @type {import('./$types').ActionData } */
	export let form;

    $: stories = data.stories;

    let creating = false;
</script>

<h2>Stories</h2> 

<AddStory {data} {form} />

<ol>
	{#each data.stories as story}
		<form method="post" use:enhance={() => {
			creating = true;
			return async ({ update }) => {
				await update();
				creating = false;
                setTimeout(() => {
                    invalidateAll();
                }, 1000);
			};
		}}>        
			<input type="hidden" name="id" value={story.id} />
			<li>{story.title}</li>
			<button type="submit" formaction="?/delete">delete</button>
		</form>
	{/each}
</ol>

