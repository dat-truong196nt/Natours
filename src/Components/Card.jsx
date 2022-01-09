export const Card = ({icon, heading, details}) => {
	return (
		<div className="card">
			<i className={`card__icon ${icon}`}></i>
			<div className="heading-tertiary">{heading}</div>
			<div className="card__text">{details}</div>
		</div>
	)
}

export const CardFlip = ({front, back}) => {
	return (
		<div className="cardflip">
			<div className="cardflip__side cardflip__side--front">
				<div className={`cardflip__picture cardflip__picture--${front.index}`}></div>
				<h4 className="cardflip__heading">
					<span className="cardflip__heading-span cardflip__heading-span--1">{front.heading}</span>
				</h4>
				<div className="cardflip__details">
					<ul>
						<li>{`${front.info.day} day tour`}</li>
						<li>{`Up to ${front.info.slot} people`}</li>
						<li>{`${front.info.guide} tour guides`}</li>
						<li>{`Sleep in ${front.info.sleep}`}</li>
						<li>{`Difficulty: ${front.info.rank}`}</li>
					</ul>
				</div>
			</div>
			<div className="cardflip__side cardflip__side--back">
				<div className="cardflip-back__price">{`$${back.price}`}</div>
				<div className="btn btn--primary">book now</div>
			</div>
		</div>
	)
}