import { Client } from '@elastic/elasticsearch';
import { SECRET_ELASTIC_USERNAME,  SECRET_ELASTIC_PASSWORD } from '$env/static/private';
import { s } from 'vitest/dist/types-198fd1d9';

export type Story = {
    id: number
    title: string,
    description?: string,
    createdAt?: Date,
    storyPoints?:number
}

const client = new Client(
    { node: 'https://localhost:9200' ,
        auth: {
            username: SECRET_ELASTIC_USERNAME,
            password: SECRET_ELASTIC_PASSWORD
        },
        tls: {
            ca: process.env.elasticsearch_certificate,
            rejectUnauthorized: false
        }
    }
);

const indexName = "stories";

let createIndex = async () => {
    let createIndexResponse = await client.indices.create({
        index: indexName,
    });
    return createIndexResponse;
}

let doesIndexExist = async () => {
    let doesIndexExistResponse = await client.indices.exists({
        index: indexName,
    });
    return doesIndexExistResponse;
}

export let createStory = async ( story:Story) => {    
    let createTaskResponse = await client.index(
        { index: indexName,
        id : story.id.toString(),
        document : story
    });
    return createTaskResponse;    
}

export let loadStory = async ( id:string ) => { 
    let loadTaskResponse = await client.get({
        index: indexName,
        id: id
    });
    return loadTaskResponse;
}

export let updateStory = async ( id:string, task:Story) => {
}

export let deleteStory = async ( id:string ) => {
}
export async function loadStories():Promise<Story[]> {
    let loadTasksResponse = await client.search({
        index: indexName        
    });
    console.log(loadTasksResponse.hits.hits);
    let test =  loadTasksResponse.hits.hits.map( (task:any) => { 
        return { 
            id : task._id as number , 
            title : task._source. title as string}
        });
        
    console.log(test);    
    return test;
}

if (! await doesIndexExist()) {
    createIndex();
}
