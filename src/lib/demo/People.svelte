<script>
	import Hello from "./Hello.svelte";
    import { people } from '$lib/stores/peoplestore.js';
	import NewPerson from "./NewPerson.svelte";

</script>

{#each $people as person}
    <Hello name={person.name} />
{/each}

<NewPerson/>
