import Logo from '../assets/img/logo-white.png'

export const Header = () => (
	<header>
		<div className='logo'>
			<img className='logo__item' src={Logo} alt='Logo'></img>
		</div>
		<div className='box-text'>
			<div className='heading-primary'>
				<div className='heading-primary__main'>Out doors</div>
				<div className='heading-primary__sub'>is where life happens</div>
			</div>
		</div>
	</header>
)