import { useForm, ValidationError } from "@formspree/react";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { FaCheckCircle } from "react-icons/fa";
import { AnimatedText } from "./AnimatedText";

export function Contact() {
    const [state, handleSubmit] = useForm("mrbgrlpg");

    const [formData, setFormData] = useState({
        firstname: "",
        lastname: "",
        email: "",
        phone: "",
        message: "",
    })


    const [showIcon, setShowIcon] = useState(false);
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;

        setFormData({
            ...formData,
            [name]: value,
        })
    }

    useEffect(() => {
        if (state.succeeded) {
            setShowIcon(true);
            setFormData({
                firstname: "",
                lastname: "",
                email: "",
                phone: "",
                message: "",
            });

            // hide the icon and revert button text after 3 seconds
            const timer = setTimeout(() => {
                setShowIcon(false);
            }, 3000);
            // clean up the timer on component unmount or before re-runing effect
            return () => clearTimeout(timer);
        }
    }, [state.succeeded])

    // handle form submission
    const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault(); // prevent default form submission
        handleSubmit(formData); // call the `handleSubmit` function
    }

    return (
        <section className="pt-5 xl:pt-12 pb-32" id="contact">
            <div className="container max-auto">
                <div className="flex flex-col items-center xl:flex-row gap-16" >
                    <div className="flex-1 max-auto xl:mx-0 flex flex-col ">


                        <AnimatedText text="Let's Work Together" textStyles="h2 mb-12 text-center xl:text-left" />
                        {/* form*/}
                        <form className="flex flex-col gap-6 w-full  max-w-[480px]" onSubmit={handleFormSubmit}>
                            {/* first name and last name */}
                            <div className="flex gap-8">

                                <div className="flex-1">
                                    <label
                                        htmlFor="firstname"
                                        className="block mb-2 text-sm font-medium text-primary">
                                        First Name <span className="text-accent">*</span>
                                    </label>
                                    <input
                                        onChange={handleChange}
                                        type="text"
                                        id="firstname"
                                        name="firstname"
                                        value={formData.firstname}
                                        className="input"
                                        placeholder="First Name"
                                        required />

                                </div>
                                <div className="flex-1">
                                    <label
                                        htmlFor="lastname"
                                        className="block mb-2 text-sm font-medium text-primary">
                                        Last Name <span className="text-accent">*</span>
                                    </label>
                                    <input
                                        onChange={handleChange}
                                        type="text"
                                        id="lastname"
                                        name="lastname"
                                        value={formData.lastname}
                                        className="input"
                                        placeholder="Last Name"
                                        required />

                                </div>
                            </div>
                            {/* email field */}
                            <div >
                                <label
                                    htmlFor="email"
                                    className="block mb-2 text-sm font-medium text-primary">
                                    Email <span className="text-accent">*</span>
                                </label>
                                <input
                                    onChange={handleChange}
                                    type="text"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    className="input"
                                    placeholder="youremail@hotmail.com"
                                    required />
                                <ValidationError
                                    prefix="Email"
                                    field="email"
                                    errors={state.errors} />

                            </div>
                            {/* phone field */}
                            <div >
                                <label
                                    htmlFor="phone"
                                    className="block mb-2 text-sm font-medium text-primary">
                                    Phone number <span className="text-accent">*</span>
                                </label>
                                <input
                                    onChange={handleChange}
                                    type="text"
                                    id="phone"
                                    name="phone"
                                    value={formData.phone}
                                    className="input"
                                    placeholder="+55 (98) 765 4321"
                                    required />
                                <ValidationError
                                    prefix="Email"
                                    field="email"
                                    errors={state.errors} />

                            </div>
                            {/* message field */}
                            <div >
                                <label
                                    htmlFor="message"
                                    className="block mb-2 text-sm font-medium text-primary">
                                    Message <span className="text-accent">*</span>
                                </label>
                                <textarea
                                    onChange={handleChange}
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    className="textarea"
                                    placeholder="Leave me a message..."
                                    rows={5}
                                    required />
                                <ValidationError
                                    prefix="Message"
                                    field="message"
                                    errors={state.errors} />

                            </div>
                            {/* submit button */}
                            <button type="submit" disabled={state.submitting} className="btn btn-accent flex items-center justify-center gap-2">
                                {state.submitting ? (
                                    <span> Sending..</span>
                                ) : (
                                    <>
                                        {/* show icon with opacity transition */}
                                        <FaCheckCircle className={` absolute text-white text-lg transition-opacity duration-500 ease-in-out ${showIcon ? "opacity-100" : "opacity-0"}`} />
                                        <span className={`transition-opacity duration-500 ease-in-out ${showIcon ? "opacity-0" : "opacity-100"}`}>
                                            Send message
                                        </span>
                                    </>
                                )}
                            </button>

                        </form>
                    </div>
                    <div className="hidden xl:flex relative w-[577px] h-[664px] rounded-lg overflow-hidden">
                        {/* Image */}
                        <Image src="/assets/contact/img.png" className="object-cover" fill quality={100} alt="" />
                    </div>

                </div>
            </div>
        </section>
    )
}