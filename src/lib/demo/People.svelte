<script>
	import Hello from "./Hello.svelte";

    let people = [
        { id:1 , name: "Hans", age: 42 },
        { id:2 , name: "Greta", age: 16 },
        { id:3 , name: "Peter", age: 12 }
    ];
</script>

{#each people as person}
    <Hello name={person.name} />
{/each}

