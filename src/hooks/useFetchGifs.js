import { useEffect, useState } from 'react'
import { getGifs } from '../helpers/getGifs'

export const useFechtGifs = (category) => {
	const [images, setImages] = useState([])
	const [isLoading, setIsLoading] = useState(true)

	useEffect(() => {
		getGifs(category)
			.then((newImages) => {
				setImages(newImages)
				setIsLoading(false)
			})
			.catch((err) => {
				console.log(err)
			})
	}, [])

	return {
		images: images,
		isLoading: isLoading,
	}
}
