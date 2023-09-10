import { tasks} from '../../lib/server/tasks.js';// import { tasks} from '../../lib/server/tasks.js'; 

/** @type {import('./$types').PageServerLoad} */
export function load({ params }) {
    return {
        tasks        
    };
}

/** @type {import('./$types').Actions} */
export const actions = {
    addtask: async ( { request } ) => {
        const data = await request.formData();
        const id = data.get('id');
        const task = data.get('task');
        tasks.push({ id:id, task:task , done:false });
        return { success: true };
    }
};