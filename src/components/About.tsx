import React from "react"
import Image from "next/image"
import Link from "next/link"
import AboutImg from "public/assets/about.png"

const About = () => {
	return (
		<div id="about" className="w-full md:h-screen p-2 flex items-center pt-24">
			<div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
				<div className="col-span-2" data-aos="fade-right" data-aos-duration="1000">
					<p className="uppercase text-xl tracking-widest text-primary">About</p>
					<h2 className="py-4">Who I Am</h2>
					<p className="py-2 text-gray-600 text-lg">
						An artistic full stack developer (frontend heavy) with over 3 years of experience in designing
						and developing visually engaging, intuitive, and accessible web apps that meet customer needs and achieve
						business objectives. I achieve this using modern technologies including TypeScript, React/Next.js, Tailwind CSS/Chakra UI,
						Figma, Git/GitHub, among others.
					</p>
					<p className="py-2 text-gray-600 text-lg">
						I specialize in building highly performant, graphics-rich user interfaces that deliver on
						usability and aesthetics. My expertise is grounded in several years of experience writing quality code collaboratively
						within Scrum-based Agile teams. What sets me apart is my strong work ethic, deep knowledge of the right tools and technologies, and my ability to learn and adapt to evolving demands.
					</p>
					<p className="py-2 text-gray-600 text-lg">
						I am an avid learner of web technologies and take pride in being an early adopter ⚡ of the Next.js framework and Shadcn UI library. Beyond web design and development, I am also passionate about embedded systems engineering, which is my second love 💗.
					</p>

					<div className="w-[50%]">
						<a href="https://github.com/waynelogan/" target="_blank" rel="noreferrer" className="py-2 text-gray-600 cursor-pointer underline text-lg hover:text-primary">
							Check out some of my latest projects on GitHub.
						</a>
					</div>
				</div>
				<div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
					<div data-aos="fade-up" data-aos-duration="1000">
						<Image src={AboutImg} className="rounded-xl " alt="/" loading="lazy" />
					</div>
				</div>
			</div>
		</div>
	)
}

export default About
