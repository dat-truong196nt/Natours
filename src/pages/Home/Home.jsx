import { Header } from "../../Components/Header";
import { Grid } from "../../Components/Grid";
import { About } from "../../Components/About";
import { Feature } from "../../Components/Feature";
import { Category } from "../../Components/Category";
import { Story } from "../../Components/Story";
import { Booking } from "../../Components/Booking/Booking";
import { Footer } from "../../Components/Footer";
import { Navigation } from "../../Components/Navigation";

export const Home = () => (
	<>
		<Navigation/>
		<Header/>
		<main>
			{/* <Grid/> */}
			<About/>
			<Feature/>
			<Category/>
			<Story/>
			<Booking/>
		</main>
		<Footer/>
	</>
)