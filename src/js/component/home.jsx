import React from "react";
import Form from "./Form";
import Header from "./Header";
import TodoList from "./TodoList";

//create your first component
const Home = () => {

	const [input, setInput] = React.useState('')
	const [todos, setTodos] = React.useState([])
	const [editTodo, setEditTodo] = React.useState(null)

	return (
		<div className="container">
			<div className="app-wrapper">
				<div>
					<Header/>
				</div>
				<div>
					<Form
						input={input}
						setInput={setInput}
						todos={todos}
						setTodos={setTodos}
						setEditTodo={setEditTodo}
						editTodo={editTodo}
					/>
				</div>
				<div>
					<TodoList 
						todos={todos} 
						setTodos={setTodos}
						setEditTodo={setEditTodo}
					/>
				</div>
			</div>
		</div>
	);
};

export default Home;
