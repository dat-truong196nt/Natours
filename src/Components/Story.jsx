import user1 from '../assets/img/nat-8.jpg'
import user2 from '../assets/img/nat-9.jpg'
import video_mp4 from '../assets/img/video.mp4'
import video_webm from '../assets/img/video.webm'

export const Story = () => (
	<section className="section-story">
		<div className="bg-video">
			<video loop autoplay="autoplay" muted>
				<source src={video_mp4} type="video/mp4"/>
				<source src={video_webm} type="video/webm"/>
				Your browser is not supported!
			</video>
		</div>
		<div className="text-center">
			<h2 className="heading-secondary">We make people genuinely happy</h2>
		</div>
		<div className="row">
			<div className="story">
				<figure className="story__shape">
					<img src={user1} alt="user" className="story__image" />
					<h3 className="story__caption">Mary smith</h3>
				</figure>
				<div className="story__text">
					<h3 className="heading-tertiary">I had the best week ever with my family</h3>
					<p>'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum, nostrum fugiat! Sit, nostrum odio.'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum, nostrum fugiat! Sit, nostrum 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum, nostrum fugiat! Sit, nostrum  odio</p>
				</div>
			</div>
			<div className="story">
				<figure className="story__shape">
					<img src={user2} alt="user" className="story__image" />
					<h3 className="story__caption">Jack wilson</h3>
				</figure>
				<div className="story__text">
					<h3 className="heading-tertiary">Wow! My life is completetly different now</h3>
					<p>'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum, nostrum fugiat! Sit, nostrum odio.'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum, nostrum fugiat! Sit, nostrum 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum, nostrum fugiat! Sit, nostrum  odio</p>
				</div>
			</div>
		</div>
		<div className="text-center">
			<div className="btn--secondary">Read all story &rarr;</div>
		</div>
	</section>
)

