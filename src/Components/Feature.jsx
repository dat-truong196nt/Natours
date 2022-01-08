import { Card } from "./Card"

export const Feature = () => {
	return (
		<section className="section-feature">
			<div className="row">
				<div className="col-1-4">
					<Card
						icon='icon-basic-world'
						heading='explore the world'
						details='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum, nostrum fugiat! Sit, nostrum odio!'
					/>
				</div>
				<div className="col-1-4">
					<Card
						icon='icon-basic-compass'
						heading='meet nature'
						details='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum, nostrum fugiat! Sit, nostrum odio!'
					/>
				</div>
				<div className="col-1-4">
					<Card
						icon='icon-basic-map'
						heading='find your way'
						details='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum, nostrum fugiat! Sit, nostrum odio!'
					/>
				</div>
				<div className="col-1-4">
					<Card
						icon='icon-basic-heart'
						heading='live a heathier life'
						details='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum, nostrum fugiat! Sit, nostrum odio!'
					/>
				</div>
			</div>
		</section>
	)
}