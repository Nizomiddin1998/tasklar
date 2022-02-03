export function addTodo(title) {
    return {
        type: 'ADD_TITLE',
        payload: title
    }
}
export function deleteTodo(id) {
    return {
        type: 'DELETE_TITLE',
        payload: id
    }
}
export function editTodo(info,id) {
    console.log(id)
    return {
        type: 'EDIT_TITLE',
        payload: info,
        Id:id
    }
}
