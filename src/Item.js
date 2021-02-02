import React, { useState } from 'react'
import Button from "./components/button"

const Item = ({ content, id, deleteTodo }) => {
	const [isDone, setIsDone] = useState(false)

	const handleDelete = () => {
		deleteTodo(id)
	}

	return (
		<li>
			<input type="checkbox" onChange={() => {
				console.log('変更がありました')
				setIsDone(!isDone)
			}} />
			<span style={{textDecoration: isDone ? 'line-through' : 'none'}}>
			{content}</span>
			<Button onClick={handleDelete}>Delete</Button>
		</li>
	)
}

export default Item