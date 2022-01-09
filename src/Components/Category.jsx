import { CardFlip } from "./Card"

export const Category = () => (
	<section className="section-category">
		<div className="text-center">
			<div className="heading-secondary">most popular tours</div>
		</div>
		<div className="row">
			<div className="col-1-3">
				<br/>
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
				<br/>
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
				<br/>
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
	</section>
)