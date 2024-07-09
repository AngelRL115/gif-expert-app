import { useState } from 'react'
import PropTypes from 'prop-types'

export const AddCategory = ({ onNewCategory }) => {
	const [inputValue, setInputValue] = useState('')

	const onInputChange = ({ target }) => {
		setInputValue(target.value)
	}

	const onSubmit = (event) => {
		event.preventDefault()
		const cleanValue = inputValue.trim()
		if (cleanValue.length <= 1) {
			return
		}
		onNewCategory(cleanValue)
		setInputValue('')
	}

	return (
		<>
			<form onSubmit={(event) => onSubmit(event)}>
				<input
					type='text'
					placeholder='Buscar gifs'
					value={inputValue}
					onChange={(event) => onInputChange(event)}
				/>
			</form>
		</>
	)
}
