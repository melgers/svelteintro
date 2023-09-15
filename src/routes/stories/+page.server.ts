import { loadStories, createStory, type Story } from '$lib/storyapi';
import { parse } from 'path';


/** @type {import('./$types').PageServerLoad} */
export async function load({ params }) {
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
            console.log(response);
        }        
    },
    delete: async (event) => {

    }

};