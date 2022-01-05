import Logo from '../assets/img/logo-white.png'

export const Header = () => (
	<header>
		<div className='logo'>
			<img className='logo__item' src={Logo} alt='Logo'></img>
		</div>
		<div className='box-text'>
			<div className='heading-primary mb-60'>
				<div className='heading-primary__main'>Out doors</div>
				<div className='heading-primary__sub'>is where life happens</div>
			</div>
			<div className='btn btn-primary btn--animation'>Discover our tour</div>
		</div>
	</header>
)