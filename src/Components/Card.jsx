export const Card = ({icon, heading, details}) => {
	return (
		<div className="card">
			<i className={`card__icon ${icon}`}></i>
			<div className="heading-tertiary">{heading}</div>
			<div className="card__text">{details}</div>
		</div>
	)
}