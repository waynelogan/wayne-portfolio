import React from "react"
import Details from "./ExperienceDetails"
import BasicTabs from "./Tabs"

const Experience = () => {
	const MedNowExperience = {
		companyName: "MedNow Africa",
		role: "Front-End Developer",
		duration: "June 2024 - Present",
		link: "https://mednowafrica.com",
		activities: [
			'Implementing integration with KCB Funds Transfer API and Payment Notification API.',
			'UI/UX development of client-side applications for staff and clients using React JS and Chakra UI.',
			'Implementing CI/CD for both applications using Docker.',
			'Implementing custom business logic in GraphQL using Hasura.',
			'Implementing authentication and role-based access using Auth0.',
			'Creating and managing organizational emails on Google Workspace.'
		]
	}

	const GowiExperience = {
		companyName: "Gowi Odera",
		role: "Full Stack Developer (Contract)",
		duration: "June 2024",
		link: "https://oderagowi.com",
		activities: [
			'Creating a design system using Tailwind CSS and Figma.',
			'UI development using Next JS.',
			'Implementing a blog and blog editor using Sanity headless CMS.',
			'Deployment and hosting with a custom domain.'
		]
	}

	const BadilicoExperience = {
		companyName: "Badilico",
		role: "Full Stack Developer (Contract)",
		duration: "November 2023",
		link: "https://badilico.com",
		activities: [
			'Creating a design system using Tailwind CSS and Figma.',
			'Implementing a graphics-rich gamified website using Next JS.',
			'Deployment and hosting on a custom domain.'
		]
	}

	const ExecutiveCarHubExperience = {
		companyName: "Executive Car Hub",
		role: "UI/UX Designer and Developer",
		duration: "2023",
		link: "https://executive-car-hub.vercel.app",
		activities: [
			'Designing and prototyping of an online car rental website using Figma.',
			'Creating a design system using Figma and Tailwind CSS.',
			'Implementing business logic for car renting and tracking.'
		]
	}

	return (
		<div id="experience" className="w-full lg:h-screen p-2 pt-36 mt-24">
			<div
				className="max-w-[1240px] mx-auto flex flex-col justify-center h-full"
				data-aos="fade-right"
				data-aos-duration="1500"
			>
				<p className="text-xl tracking-widest uppercase text-primary">Experience</p>
				<h2 className="py-4">Where I&apos;ve Worked</h2>
				<div className="mt-2">
					<BasicTabs
						tabList={["MedNow", "Gowi Odera", "Badilico", "Executive Car Hub"]}
						tabPanel={[
							<Details key={"MedNow"} experienceDetails={MedNowExperience} />,
							<Details key={"Gowi Odera"} experienceDetails={GowiExperience} />,
							<Details key={"Badilico"} experienceDetails={BadilicoExperience} />,
							<Details key={"Executive Car Hub"} experienceDetails={ExecutiveCarHubExperience} />
						]}
					/>
				</div>
			</div>
		</div>
	)
}

export default Experience
