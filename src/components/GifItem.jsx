export const GifItem = ({ id, title, url }) => {
	return (
		<div className="card">
			{/* <p>{title}</p> */}
			<img
				key={id}
				src={url}
				alt={title}
			/>
            <p>{title}</p>
		</div>
	)
}
