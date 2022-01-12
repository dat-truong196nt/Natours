import logo from '../assets/img/logo-green-2x.png'

export const Footer = () => (
	<footer className="footer">
		<div className="footer__logo-box"><img className="footer__logo-img" src={logo} alt="logo" /></div>
		<div className="row">
			<div className="col-1-2">
				<div className="footer__nav">
					<ul className="footer__list">
						<li className="footer__item"><a href="##" className="footer__link">Company</a></li>
						<li className="footer__item"><a href="##" className="footer__link">Contact us</a></li>
						<li className="footer__item"><a href="##" className="footer__link">Carrers</a></li>
						<li className="footer__item"><a href="##" className="footer__link">Privacy policy</a></li>
						<li className="footer__item"><a href="##" className="footer__link">Terms</a></li>
					</ul>
				</div>
			</div>
			<div className="col-1-2">
				<p className="footer__copyright">
					Clone by <a href="##" className="footer__link">Dat Truong</a> from the "Advanced CSS and Sass" course.
					Feel free to check it out with Jonas Schmedtmann.
				</p>
			</div>
		</div>
	</footer>
)