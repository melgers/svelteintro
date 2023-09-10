<script>
    /** @type {import('./$types').PageData} */
    export let data;
</script>

<ol>
    {#each data.tasks as task}
        <li>{task.name}</li>
    {/each}
</ol>
