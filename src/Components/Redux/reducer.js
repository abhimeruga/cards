const initialState ={
    lists : []
}

export const reducer = (state = initialState, action) => {
    switch(action.type){
        case 'add' : 
            return state.lists.push(action.payload);
        case 'delete' :
            return state.lists.pop();
        default:
            return state;
    }
}