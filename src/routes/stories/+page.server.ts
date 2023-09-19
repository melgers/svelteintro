import { loadStories, createStory, deleteStory, type Story } from '$lib/storyapi';
import { fail , redirect } from '@sveltejs/kit';


/** @type {import('./$types').PageServerLoad} */
export async function load({ params }) {
    console.log('load stories');
    return {
        stories : await loadStories()
    };
}

/** @type {import('./$types').Actions} */
export const actions = {
    save: async (event) => {
        let formData = await event.request.formData();
        let id:number = parseInt(formData.get('id') as string);
        let title:string = formData.get('title') as string;
        let description:string = formData.get('description') as string;
        let storyPoints:number = parseInt(formData.get('storyPoints') as string);

        if (id && title && description) {
            let response = await createStory({
                id,
                title,
                description,
                createdAt: new Date(),
                storyPoints
            });            
            throw redirect(301 , `/stories`);
        } else {
            return fail(400 , { message : 'Invalid form data'});
        }
    },
    delete: async (event) => {        
        let formData = await event.request.formData();
        let id = formData.get('id');
        if (id) {
            let response = await deleteStory(`${id}`);
            return { status: 204, body : { message : 'Story deleted'}}
        }
    }

};