<script>
    import { addPerson } from "$lib/stores/peoplestore";

    let age = 0;
    let name = "";
    
</script>

<form>
    <label>Name
        <input type="text" bind:value={name} />            
    </label>
    <label>Age
        <input type="number" bind:value={age} />    
    </label>
    <button on:click={() => addPerson(name, age)}>Add Person</button>
</form>