export const reducer = (state,action) =>{
    if(action.type === 'ADD_COMMENT'){
        return {
            ...state,
            isModalOpen: true,
            modalContent: 'your comment is posted successfully!'
        }
    }
}