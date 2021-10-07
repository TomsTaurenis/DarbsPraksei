import React, { Component } from 'react';
import { Form, Button, ListGroup, } from 'react-bootstrap';



class TodoList extends Component{
    constructor() {
        super();
        this.state = {
            todoList:[]
        }
    }

    addTodo = (event)=> {
        event.preventDefault();
        const data = event.target,
        newTodo = {
            taskTitle: data.taskTitle.value,
            date: data.date.value,
        }
        this.state.todoList.push(newTodo);
        this.setState({
            todoList: this.state.todoList
        })
        
    }
    deleteTask = (event)=> {
        this.state.todoList.splice(event.target.value, 1)
        this.setState({
            todoList: this.state.todoList
        })
    }




    render() {
        
        console.log(this.state.todoList)
        return(
            <div>


            <Form onSubmit={this.addTodo}>
            <Form.Group controlID="formBasicTaskTitle">
                    <Form.Label>Uzdevuma nosaukums:</Form.Label>
                    <Form.Control type="text" placeholder="Enter A Task"
                    name="taskTitle"/>
                </Form.Group>
                <Form.Group controlID="formBasicDate">
                    <Form.Label>Uzdevuma datums:</Form.Label>
                    <Form.Control type="date" placeholder="mm/dd/yy"
                    name="date"/>
                </Form.Group>
                <Button type="submit" className="btn btn-success">
                    Pievienot
                </Button>
            </Form>
            <ListGroup>
                {
                    this.state.todoList.map((task, index)=> {
                        return(
                            <ListGroup.Item key={index} variant="success">
                                {task.taskTitle}, Datums: {task.date}
                                <Button type="button" variant="danger" onClick={this.deleteTask} value={index}>
                                    Izdzēst</Button>
                                    <input id="todo-0" type="checkbox" defaultChecked={false} />
                                    <label className="todo-label" htmlFor="todo-0">  
                                    </label>
                            </ListGroup.Item>

                        )
                    })
                } 


            </ListGroup>
            </div>
        )
    }
}


export default TodoList;




