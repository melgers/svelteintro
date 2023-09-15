<script lang="ts">

    let story = {
        id: 0,
        title: "",
        description: "",
        storypoints: 0
    };

</script>


<form method="POST" action="?/save">
    <label>
        ID
        <input name="id" type="text" bind:value={story.id}/>
    </label>

    <label>
        Title
        <input name="title" type="text" bind:value={story.title}/>
    </label>

    <label>
        Description
        <input name="description" type="text" bind:value={story.description}/>
    </label>

    <label>
        Storypoints
        <input name="storypoints" type="number" bind:value={story.storypoints}/>
    </label>

    <button type="submit">save</button>
    <button formaction="?/delete">delete</button>
</form>