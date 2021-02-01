import React, { useState } from 'react'

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
			<button onClick={handleDelete}>delete</button>
		</li>
	)
}

export default Item