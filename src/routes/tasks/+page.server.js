import { tasks} from '../../lib/server/tasks.js';// import { tasks} from '../../lib/server/tasks.js'; 

/** @type {import('./$types').PageServerLoad} */
export function load({ params }) {
    return {
        tasks        
    };
}