import React from 'react';

const List = ({list}) => {
    return (
        <div>
            <ul id="listUl">
                <li>{list.list1}</li>
            </ul>
        </div>
    )
} 
const TypeTodolist = ({lists}) => {
    return (
        <div id="todolist">
            {lists.map(list => (<List list={list} key={list.id}/>))}
        </div>
    );
};

export default TypeTodolist;