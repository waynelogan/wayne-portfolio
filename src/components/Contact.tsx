import Image from "next/image"
import Link from "next/link"
import React, { FormEvent, useState } from "react"
import { AiOutlineArrowRight } from "react-icons/ai"
import { BsFillPersonLinesFill } from "react-icons/bs"
import { FaGithub, FaLinkedinIn } from "react-icons/fa"
import { HiOutlineChevronDoubleUp } from "react-icons/hi"
import ContactImg from "public/assets/contact.jpg"
import { RotateLoader } from "react-spinners"
import { LuMail } from "react-icons/lu"
import CustomModal from "./Modals"

const override = {
	display: "block",
	margin: "0 auto",
	borderColor: "#44A8B3",
}

const Loader = ({ loading }: { loading: boolean }) => {
	return (
		<div className="fixed inset-0 w-full lg:h-screen flex items-center justify-center z-40">
			<RotateLoader
				color={"#44A8B3"}
				className="scale-[150%]"
				loading={loading}
				cssOverride={override}
				size={18}
				aria-label="Loading Spinner"
				data-testid="loader"
			/>
		</div>
	)
}
const SuccessMsg = ({
	showSuccessMsg,
	setShowSuccessMsg,
}: {
	showSuccessMsg: boolean
	setShowSuccessMsg: React.Dispatch<React.SetStateAction<boolean>>
}) => {
	return (
		<>
			<CustomModal
				isOpen={showSuccessMsg}
				setIsOpen={setShowSuccessMsg}
				title="Email Sent"
				width="700px"
				isLoader={false}
			>
				<div>
					<img className="scale-75" src="/assets/success.gif" id="spinner" alt="spinner" />
				</div>
				<h3 className="text-center mt-2">Your message has been sent successfully</h3>
			</CustomModal>
		</>
	)
}

const Contact = () => {
	const [name, setName] = useState("")
	const [email, setEmail] = useState("")
	const [subject, setSubject] = useState("")
	const [message, setMessage] = useState("")
	const [loading, setLoading] = useState(false)
	const [showSuccessMsg, setShowSuccessMsg] = useState(false)

	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		setLoading(true)
		const templateParams = {
			name,
			email,
			subject,
			message,
		}
		// emailjs.send(emConfig.serviceID, emConfig.templateID, templateParams, emConfig.publicID);
		setTimeout(() => {
			setLoading(false)
			setShowSuccessMsg(true)
			setTimeout(() => {
				setShowSuccessMsg(false)
			}, 4000)
		}, 1500)
	}

	return (
		<>
			<div id="contact" className="w-full lg:h-screen mt-10">
				<div
					className="max-w-[1240px] m-auto px-2 py-16 w-full"
					data-aos="fade-left"
					data-aos-duration="1500"
				>
					<p className="text-xl tracking-widest uppercase text-primary">Contact</p>
					<h2 className="py-4">Get In Touch</h2>
					<div className="grid lg:grid-cols-2 gap-8 shadow-xl shadow-gray-400 rounded-xl p-4">
						<div
							className="md:w-full h-full"
							data-aos="flip-left"
							data-aos-duration="1000"
						>
							<Image
								className="rounded-xl hover:scale-105 ease-in duration-300 w-fit"
								src={ContactImg}
								alt="/"
								loading="lazy"
							/>
						</div>
						<div className="text-center md:text-left">
							<div>
								<h2 className="py-2">Wayne Logan</h2>
								<p className="text-xl mt-2">Full-Stack Developer</p>
							</div>
							<p className="py-4 text-lg">
								I am available for freelance or part-time positions. Contact me and
								let&apos;s talk.
							</p>
							<p className="uppercase text-lg">Connect With Me:</p>
							<div className="flex flex-col md:flex-row gap-8 w-fit py-4 mx-auto md:mx-0">
								<div className="flex gap-6 flex-col md:flex-row">
									<a
										href="mailto:loganamollo@gmail.com"
										target="_blank"
										rel="noreferrer"
									>
										<div className="flex gap-2 items-center rounded-lg shadow-sm text-white shadow-gray-400 py-2 px-4 cursor-pointer hover:scale-110 ease-in bg-secondary duration-300">
											<LuMail />
											<p>Email me</p>
										</div>
									</a>
									<Link href="/resume">
										<a>
											<div className="flex gap-2 items-center rounded-lg shadow-sm shadow-gray-400 py-2 px-4 cursor-pointer hover:text-white hover:scale-110 ease-in hover:bg-secondary duration-300">
												<p>Read Resume</p>
												<BsFillPersonLinesFill title="Resume" />
											</div>
										</a>
									</Link>
								</div>
								<div className="flex gap-4 justify-center md:justify-start">
									<a
										href="https://www.linkedin.com/in/wayne-logan/"
										target="_blank"
										rel="noreferrer"
									>
										<div className="rounded-lg shadow-sm shadow-gray-400 p-3 cursor-pointer hover:scale-110 ease-in hover:bg-secondary duration-300">
											<FaLinkedinIn title="Linkedin" />
										</div>
									</a>
									<a
										href="https://github.com/waynelogan/"
										target="_blank"
										rel="noreferrer"
									>
										<div className="rounded-lg shadow-sm shadow-gray-400 p-3 cursor-pointer hover:scale-110 ease-in hover:bg-secondary duration-300">
											<FaGithub title="GitHub" />
										</div>
									</a>
								</div>
							</div>
						</div>
					</div>
					<div className="flex justify-center py-12">
						<Link href="/">
							<a>
								<div className="rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300">
									<HiOutlineChevronDoubleUp className="text-primary" size={30} />
								</div>
							</a>
						</Link>
					</div>
				</div>
			</div>
			{loading && <Loader loading={loading} />}
			{showSuccessMsg && <SuccessMsg showSuccessMsg={showSuccessMsg} setShowSuccessMsg={setShowSuccessMsg} />}
		</>
	)
}

export default Contact
