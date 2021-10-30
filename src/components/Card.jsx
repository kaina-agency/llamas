import Children from './Children'
import responsive from './utils/responsive'

export default function Card(props) {
	const { blok } = props

	const classes = () => {
		let classes = ['card']
		blok.style === "elevated" && classes.push('card--elevated')
		blok.style === "outlined" && classes.push('card--outlined')
		return classes.join(' ').trim()
	}

	return (
		<div className={classes()} style={responsive(blok.responsive)}>
			{blok.media.map((media) => (
				<Children blok={media} />
			))}
			{blok.content.length > 0 && (
				<div className="card__content">
					{blok.content.map((content) => (
						<Children blok={content} />
					))}
				</div>
			)}
			{blok.actions.length > 0 && (
				<div className="card__actions">
					{blok.actions.map((action) => (
						<Children blok={action} />
					))}
				</div>
			)}
		</div>
	)
}
