import Logo from '../assets/img/logo-white.png'

export const Header = () => (
	<header className='header'>
		<div className='header__logo-box'>
			<img className='header__logo' src={Logo} alt='Logo'></img>
		</div>
		<div className='header__box-text'>
			<div className='heading-primary mb-60'>
				<div className='heading-primary--main'>Out doors</div>
				<div className='heading-primary--sub'>is where life happens</div>
			</div>
			<div className='btn btn--primary btn--animation'>Discover our tour</div>
		</div>
	</header>
)