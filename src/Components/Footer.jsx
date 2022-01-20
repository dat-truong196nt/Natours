import logo_small_1x from '../assets/img/logo-green-small-1x.png'
import logo_small_2x from '../assets/img/logo-green-small-2x.png'
import logo_1x from '../assets/img/logo-green-1x.png'
import logo_2x from '../assets/img/logo-green-2x.png'

export const Footer = () => (
	<footer className="footer">
		<div className="footer__logo-box">
			<picture>
				<source media="(max-width:37.5em)" srcset={`${logo_small_1x} 1x, ${logo_small_2x} 2x`}/>
				<img className="footer__logo-img" srcSet={`${logo_1x} 1x, ${logo_2x} 2x`} alt="logo" />
			</picture>
		</div>
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