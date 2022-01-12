export const Form = () => (
	<form action="#" className="form">
		<div className="heading-secondary">Start booking now</div>
		<div className="form__group">
			<input
				className="form__input"
				type="text"
				id="name"
				placeholder="Full name"
			/>
			<label className="form__label" htmlFor="name">
				Full name
			</label>
		</div>
		<div className="form__group">
			<input
				className="form__input"
				type="email"
				id="email"
				placeholder="Email address"
			/>
			<label className="form__label" htmlFor="email">
				Email address
			</label>
		</div>
		<div className="form__group">
			<div className="form__radio-group">
				<input type="radio" className="form__radio-input" id="small" name="size"/>
				<label htmlFor="small" className="form__radio-label">
					<span className="form__radio-btn"></span>
					Small tour group
				</label>
			</div>
			<div className="form__radio-group pb-30">
				<input type="radio" className="form__radio-input" id="large" name="size"/>
				<label htmlFor="large" className="form__radio-label">
					<span className="form__radio-btn"></span>
					Large tour group
				</label>
			</div>
			<a href="##" className="btn btn--green">{"next step -->"}</a>
		</div>
	</form>
);
