export default function movies(states = [], action){
    if(action.type === 'ADD_MOVIES'){
        return action.movies;
    }
    return states;
}