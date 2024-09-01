import React from "react"
import { GoLinkExternal } from "react-icons/go"

interface ExperienceDetails {
	experienceDetails: {
		companyName: string
		role: string
		duration: string
		activities: string[]
		link: string
	}
}

const Details: React.FC<ExperienceDetails> = ({ experienceDetails }) => {
	return (
		<div data-aos="fade-up" data-aos-duration="1000">
			<div className="flex items-center gap-x-3">
				<h3 className="">{`${experienceDetails.role}`}</h3>
				<a
					href={experienceDetails.link}
					target="_blank"
					rel="noopener noreferrer"
					className="text-primary text-2xl font-semibold flex gap-1"
				>
					<span>
						{`@${experienceDetails.companyName}`}
					</span>
					<GoLinkExternal className="text-primary font-bold text-sm" />
				</a>
			</div>
			<h4 className="mt-1">{experienceDetails.duration}</h4>

			<ul className="">
				{experienceDetails.activities.map((activity) => {
					return (
						<li key={activity} className="mt-4 text-lg cursor-text flex items-start gap-x-3">
							<span className="scale-150">&#x2022;</span>
							{activity}
						</li>
					)
				})}
			</ul>
		</div>
	)
}

export default Details
