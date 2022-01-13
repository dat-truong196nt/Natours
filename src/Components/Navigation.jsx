export const Navigation = () => (
	<div className="navigation">
		<input type="checkbox" id="navi-toggle" className="navigation__checkbox" />
		<label htmlFor="navi-toggle" className="navigation__toggle">
			<span className="navigation__icon"></span>
		</label>
		<div className="navigation__background"></div>

		<nav className="navigation__nav">
			<ul className="navigation__list">
				<li className="navigation__item"><a href="##" className="navigation__link">About Natours</a></li>
				<li className="navigation__item"><a href="##" className="navigation__link">Your benefits</a></li>
				<li className="navigation__item"><a href="##" className="navigation__link">Popular tours</a></li>
				<li className="navigation__item"><a href="##" className="navigation__link">Stories</a></li>
				<li className="navigation__item"><a href="##" className="navigation__link">Book now</a></li>
			</ul>
		</nav>
	</div>
)