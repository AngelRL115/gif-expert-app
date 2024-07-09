import { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { getGifs } from '../helpers/getGifs'
import { GifItem } from './GifItem'
import { useFechtGifs } from '../hooks/useFetchGifs'

export const GifGrid = ({ category }) => {
	const [images, setImages] = useState([])

	// const getImages = async() =>{
	// 	const newImages = await getGifs(category)
	// 	setImages(newImages)
	// }

	useEffect(() => {
		//getImages()
		getGifs(category).then((newImages) => {
			setImages(newImages)
		})
	}, [])

	// const { images, isLoading } = useFechtGifs({ category })

	return (
		<>
			<h3>{category}</h3>
			{/* {isLoading ? <h2>cargando...</h2> : null} */}
			<div className='card-grid'>
				{images.map(({ id, title, url }) => {
					return (
						<GifItem
							key={id}
							id={id}
							title={title}
							url={url}
						/>
					)
				})}
			</div>
		</>
	)
}

GifGrid.propTypes = {
	category: PropTypes.string.isRequired,
}
