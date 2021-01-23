import React, { useState } from 'react'

const Item = ({content}) => {
	const [isDone, setIsDone] = useState(false)
	return (
		<li>
			<input type="checkbox" onChange={() => {
				console.log('変更がありました')
				setIsDone(!isDone)
			}} />
			<span style={{textDecoration: isDone ? 'line-through' : 'none'}}>
			{content}</span>
			{/* 三項演算子 */}
			{/* const data = 条件式 ? trueのときの値 : falseのときの値 */}
		</li>
	)
}

export default Item