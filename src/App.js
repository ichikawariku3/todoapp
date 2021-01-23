import React, {useState} from 'react'
import Form from './Form'
import List from './List'
const App = () => {
	const [todos, setTodos] = useState([
		{
			content: '課題をする'
		},
		{
			content: '料理をつくる'
		},
		{
			content: '作った料理を食べる'
		},
		{
			content: '御馳走様をする'
		}
	])

	const addTodo = content => {
		setTodos([
			...todos,
			{
				content
			}
		])
	}

	return (
		<>
			<h1>Todo App</h1>
			<Form addTodo={addTodo} />
			<List todos={todos} />
		</>
	)
}

export default App