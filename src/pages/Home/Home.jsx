import { Header } from "../../Components/Header";
import { About } from "../../Components/About";
import { Feature } from "../../Components/Feature";
import { Category } from "../../Components/Category";
import { Story } from "../../Components/Story";
import { Booking } from "../../Components/Booking/Booking";
import { Footer } from "../../Components/Footer";
import { Navigation } from "../../Components/Navigation";
import { Popup } from "../../Components/Popup";

export const Home = () => (
	<>
		<Navigation/>
		<Header/>
		<main>
			<About/>
			<Feature/>
			<Category/>
			<Story/>
			<Booking/>
		</main>
		<Footer/>
		<Popup/>
	</>
)