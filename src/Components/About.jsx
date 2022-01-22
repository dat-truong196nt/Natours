import photo_nat_1 from '../assets/img/nat-1.jpg'
import photo_nat_1_large from '../assets/img/nat-1-large.jpg'
import photo_nat_2 from '../assets/img/nat-2.jpg'
import photo_nat_2_large from '../assets/img/nat-2-large.jpg'
import photo_nat_3 from '../assets/img/nat-3.jpg'
import photo_nat_3_large from '../assets/img/nat-3-large.jpg'

export const About = () => {
	return (
		<section className="section-about">
			<div className="text-center">
				<div className="heading-secondary">
					Exciting tours for adventurous people
				</div>
			</div>
			<div className="row">
				<div className="col-1-2">
					<div className="heading-tertiary">
						You're going to fall in love with nature
					</div>
					<div className="paragraph">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Error vitae
						quia neque delectus cum laborum, expedita quasi doloribus maiores
						sequi consectetur omnis ullam sapiente harum magni, et, fugit quas
						ratione?
					</div>
					<div className="heading-tertiary">
						Live adventures like you never have before
					</div>
					<div className="paragraph">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Error vitae
						quia neque delectus cum laborum, expedita quasi doloribus maiores
						sequi consectetur omnis ullam sapiente harum magni, et, fugit quas
						ratione?
					</div>
					<div className="btn--secondary">Lean more &rarr;</div>
				</div>
				<div className="col-1-2">
					<div className="composition">
						<img
							srcSet={`${photo_nat_1} 300w, ${photo_nat_1_large} 1000w`}
							sizes="(max-width: 900px) 27vw, (max-width: 600px) 32vw, 300px"
							src={photo_nat_1_large}
							className="composition__photo composition__photo-1"
							alt="nat 1" />
						<img
							srcSet={`${photo_nat_2} 300w, ${photo_nat_2_large} 1000w`}
							sizes="(max-width: 900px) 27vw, (max-width: 600px) 32vw, 300px"
							src={photo_nat_2_large}
							className="composition__photo composition__photo-2"
							alt="nat 2" />
						<img
							srcSet={`${photo_nat_3} 300w, ${photo_nat_3_large} 1000w`}
							sizes="(max-width: 900px) 27vw, (max-width: 600px) 32vw, 300px"
							src={photo_nat_3_large}
							className="composition__photo composition__photo-3"
							alt="nat 3" />
					</div>
				</div>
			</div>
		</section>
	);
};
