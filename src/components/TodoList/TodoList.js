import React from 'react';
import TodoListItem from '../TodoListItem/TodoListItem'


function TodoList ( { todoData, onDelete, changeTodoItem}) {
    
    const elements = todoData.map((item) => { 
        //создаем новый массив на основе старого, элементы получают новые id

        return (
            <li key={item.id} className="list-group-item todo__list-item">
                <TodoListItem item={ item }
                // пробрасываем состояние выполнен/важное для changeTodoItem и взять его label
                    onDelete = { () => onDelete(item.id) } 
                    changeTodoItem = { changeTodoItem }
                // пробрасываем функцию для ее вызова из айтема напрямую
                />
            </li>
        )
    })

    return (
        <ul className="list-group todo__list ">
            { elements }
        </ul>
        
    )
}

export default TodoList;