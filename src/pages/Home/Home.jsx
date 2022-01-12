import { Header } from "../../Components/Header";
import { Grid } from "../../Components/Grid";
import { About } from "../../Components/About";
import { Feature } from "../../Components/Feature";
import { Category } from "../../Components/Category";
import { Story } from "../../Components/Story";
import { Booking } from "../../Components/Booking/Booking";

export const Home = () => (
	<>
		<Header/>
		{/* <Grid/> */}
		<About/>
		<Feature/>
		<Category/>
		<Story/>
		<Booking/>
	</>
)