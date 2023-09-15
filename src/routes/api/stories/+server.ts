import { loadStories, type Story } from '$lib/storyapi';

export let GET = async () => {    
    let tasks = await loadTasks();  

    let result = tasks.hits.hits.map( (task:any) => {
         return {
             id: task._id,
             ...task._source
         }
    });

    return new Response(JSON.stringify(result));
}
