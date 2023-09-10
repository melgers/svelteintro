import { writable } from 'svelte/store';

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

let determineId = ( currentPeople   ) => {
    return Math.max( currentPeople.map( person => person.id ) ) + 1;
}