<script>
    /** @type {import('./$types').PageData} */
    export let data;
</script>

<ol>
    {#each data.tasks as task}
        <li>{task.task}</li>
    {/each}
</ol>

<form method="POST" action="?/login">
    <label>
        Tasks
        <input name="task" type="text"/>
    </label>
    <button formaction="?/addtask">Add task</button>
</form>