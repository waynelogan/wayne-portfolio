import Head from "next/head";
import About from "../components/About";
import Contact from "../components/Contact";
import Main from "../components/Main";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import Experience from "../components/Experience";

export default function Home() {
	return (
		<div>
			<Head>
				<title>WayneLogan | Full-Stack Engineer</title>
				<meta
					name="description"
					content="I'm a full-stack web developer specialized in using React, Typescript and Figma to create visually rich user interfaces."
				/>
				<link rel="icon" href="/fav.ico" />
			</Head>
			<div className="overflow-x-clip px-10 lg:px-20">
				<Main />
				<About />
				<Skills />
				<Experience />
				{/* <Projects /> */}
				<Contact />
			</div>
		</div>
	);
}
