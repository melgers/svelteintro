<script>
	import { page } from '$app/stores';
    import { findById } from '$lib/stores/peoplestore.js';
       
    const person = findById( new Number($page.params.person_id));
    

</script>

<h2>Show details of person {$page.params.person_id}</h2>

{#if person}
    <p>id : {person.id}, name :  {person.name}, age : {person.age}</p>
{/if}

