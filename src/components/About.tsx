import React from "react"
import Image from "next/image"
import Link from "next/link"
import AboutImg from "public/assets/about.png"

const About = () => {
	return (
		<div id="about" className="w-full md:h-screen p-2 flex items-center py-16">
			<div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
				<div className="col-span-2" data-aos="fade-right" data-aos-duration="1000">
					<p className="uppercase text-xl tracking-widest text-primary">About</p>
					<h2 className="py-4">Who I Am</h2>
					<p className="py-2 text-gray-600 text-lg">
						An artistic full stack developer (frontend heavy) with over 3 years of experience in designing
						and developing artsy, intuitive and accessible web apps that meet customer needs and achieve
						business objectives. I do this using modern technologies including TypeScript, React/Next JS, Tailwind CSS/Chakra UI,
						Figma and Git/GitHub among others.
					</p>
					<p className="py-2 text-gray-600 text-lg">
						I specialize in building highly performant and graphics rich User Interfaces that deliver on
						usability and aesthetics. This comes from my vast experience in writing quality code collaboratively
						in a Scrum based Agile team for several years. I believe that what makes me great at what I do is:
						my work ethic, my knowledge of appropriate tools and technologies, and the ability to learn and adapt
						to current demands.
					</p>
					<p className="py-2 text-gray-600 text-lg">
						I am an avid learner of web technologies and I pride myself being an early adopter ⚡ of the Next JS framework, and Shadcn UI library .
						Beyond web design and development, I also practice as an embedded systems engineer(ing student),
						which is my second love 💗.
					</p>
					<div className="w-[50%]">
						<Link href="/#projects">
							<p className="py-2 text-gray-600 underline cursor-pointer text-lg hover:text-primary">
								Check out some of my latest projects.
							</p>
						</Link>
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
