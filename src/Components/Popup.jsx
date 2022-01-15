import img1 from '../assets/img/nat-8.jpg'
import img2 from '../assets/img/nat-9.jpg'

export const Popup = () => (
	<div className="popup" id="popup">
		<div className="popup__content">
			<div className="popup__left">
				<img src={img1} alt="img" className="popup__img" />
				<img src={img2} alt="img" className="popup__img" />
			</div>
			<div className="popup__right">
				<a href="#category" className="popup__close">&times;</a>
				<div className="text-center">
					<h2 className="heading-secondary">Start booking now</h2>
				</div>
				<h3 className="heading-tertiary">important - please read these terms before booking</h3>
				<p className="popup__term">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat iste ipsum totam voluptates! Deserunt dolorum voluptates incidunt? Tempora obcaecati officia mollitia, accusamus, inventore earum nisi natus veniam, ipsum ad nostrum. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati commodi omnis quod necessitatibus voluptates, tempora neque ratione consequuntur, laborum asperiores repellat exercitationem veniam odit. Delectus assumenda repellat ut eveniet ullam?</p>
				<a href="##" className="btn btn--green">book now</a>
			</div>
		</div>
	</div>
)