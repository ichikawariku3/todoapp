import React, { useState } from 'react'
import styled from 'styled-components'

const Label = styled.label`
	display: flex;
	color: #757575;
	font-size: 14px;
	font-weight:  bold;
	`

const Input = styled.input`
	border-radius: 3px;
	padding: 4px 8px;
	border: 1px solid black;
`

const Form = ({ addTodo }) => {
	const [value, setValue] = useState('')

	const handleSubmit = e => {
		e.preventDefault()
		if(!value.trim()){
			return 
		}
		addTodo(value)
		setValue('')
	}
	return (
		<form onSubmit={handleSubmit}>
			<Label>ToDo</Label>
			<Input value={value} type='text'
			onChange={e => {
				setValue(e.target.value)
			}} 
			/>
		</form>
	)
}

export default Form