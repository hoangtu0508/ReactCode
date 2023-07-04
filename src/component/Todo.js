import React from 'react'

const Todo = (props) => {
    const {list, handleDelete,} = props

    const handleDele = (id) => {
        handleDelete(id)
    }

    const handleEdit = ({index, updatetodo}) => {
        handleEdit({index, updatetodo})
    }
    
    return (
        <div>     
            {list.map((todo, index) => {
                return (
                    <div>
                        {index + 1}.{todo.name}
                        <button onClick={() => handleEdit({index: index, name: todo})}>Edit</button>
                        <button onClick={() => handleDele(todo.id)}>Dele</button>
                    </div>
                )
            })}
        </div>
    )
}

export default Todo