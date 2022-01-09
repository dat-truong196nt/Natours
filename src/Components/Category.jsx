import { CardFlip } from "./Card"

export const Category = () => (
	<section className="section-category">
		<div className="text-center">
			<div className="heading-secondary">most popular tours</div>
		</div>
		<div className="row">
			<div className="col-1-3">
				<CardFlip
					front={{
						index: 1,
						heading: 'the sea explorer',
						info: {day: 3, slot: 30, guide: 2, sleep: 'cozy hotels', rank: 'easy'}
					}}
					back={{price: 20}}
				/>
			</div>
			<div className="col-1-3">
			</div>
			<div className="col-1-3"></div>
		</div>
	</section>
)