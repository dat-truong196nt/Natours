import { CardFlip } from "./Card"

export const Category = () => (
	<section className="section-category">
		<div className="text-center">
			<h2 className="heading-secondary">most popular tours</h2>
		</div>
		<div className="row">
			<div className="col-1-3">
				<CardFlip
					front={{
						index: 1,
						heading: 'the sea explorer',
						info: {day: 3, slot: 30, guide: 2, sleep: 'cozy hotels', rank: 'easy'}
					}}
					back={{price: 297}}
				/>
			</div>
			<div className="col-1-3">
				<CardFlip
					front={{
						index: 2,
						heading: 'the forest hiking',
						info: {day: 7, slot: 40, guide: 6, sleep: 'provided tents', rank: 'medium'}
					}}
					back={{price: 769}}
				/>
			</div>
			<div className="col-1-3">
				<CardFlip
					front={{
						index: 3,
						heading: 'the winter skiing',
						info: {day: 5, slot: 15, guide: 3, sleep: 'provided tents', rank: 'hard'}
					}}
					back={{price: 479}}
				/>
			</div>
		</div>
		<div className="text-center">
			<a href="##" className="btn btn--green">discover all tours</a>
		</div>
	</section>
)