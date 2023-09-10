import { writable, get } from 'svelte/store';

export let people = writable([
    { id:1 , name: "Hans", age: 42 },
    { id:2 , name: "Greta", age: 16 },
    { id:3 , name: "Peter", age: 12 },
    { id:4 , name: "Tom" , age:25 }
]);

export let addPerson = ( name, age ) => {
    people.update( currentPeople => {
        return [...currentPeople, { id : determineId(currentPeople), name, age }];
    });
}

let determineId = () => {
    const peopleStore = get(people); 
    const nums = peopleStore.map( person => person.id ); 
    console.log("numbers" , nums);    
    return Math.max.apply( null, nums) + 1;
}

export let findById = ( id ) => {
    const t = Number(id);
    const peopleStore = get(people);   
    return peopleStore.find( person => person.id === t );
}