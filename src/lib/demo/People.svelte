<script>
	import Hello from "./Hello.svelte";
    import { people } from '$lib/stores/peoplestore.js';

</script>

{#each $people as person}
    <Hello name={person.name} />
{/each}

