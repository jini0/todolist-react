import React from 'react';

const CreateTodolist = ({list1, onChange, onCreate}) => {
    return (
        <div id="todoheader">
            <h1>to do list</h1>
            <div>
                <input type="text" id="todoInput" name="list1" value={list1} 
                onChange={onChange} />
                <button id="insertBtn" onClick={onCreate}><i class="material-icons">add_circle</i></button>
            </div>
        </div>
    );
};

export default CreateTodolist;