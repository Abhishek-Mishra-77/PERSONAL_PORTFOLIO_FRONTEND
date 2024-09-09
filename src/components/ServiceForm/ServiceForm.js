import React from 'react'

const ServiceForm = () => {

    const serviceDetails = {
        description: " I'm excited to collaborate with you! Whether you're looking for mentorship or custom website design, I’m here to help.Fill out the form, and let’s get started on bringing your ideas to life.",
        phoneNumber: "8577887978",
        email: "abhishekmishra992016@gmail.com",
        services: ["Mentorship", "Website Design", "Consultation"]
    }

    return (
        <section className="bg-gradient-to-r from-blue-400 to-blue-600 min-h-screen py-36">
            <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
                    <div className="lg:col-span-2 lg:py-12 text-white">
                        <h2 className="text-3xl font-bold mb-4">Let's Work Together</h2>
                        <p className="max-w-xl text-lg">
                            {serviceDetails?.description}
                        </p>

                        <div className="mt-8">
                            <a href="tel:+1514754450" className="text-2xl font-bold text-pink-300">Call: {serviceDetails?.phoneNumber}</a>
                            <address className="mt-2 not-italic">Email : {serviceDetails?.email}</address>
                        </div>
                    </div>

                    <div className="rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-12">
                        <form action="#" className="space-y-4">
                            <div>
                                <label className="sr-only" htmlFor="name">Name</label>
                                <input
                                    className="w-full rounded-lg border border-gray-300 p-4 text-sm"
                                    placeholder="Your Name"
                                    type="text"
                                    id="name"
                                    required
                                />
                            </div>

                            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                                <div>
                                    <label className="sr-only" htmlFor="email">Email</label>
                                    <input
                                        className="w-full rounded-lg border border-gray-300 p-4 text-sm"
                                        placeholder="Email Address"
                                        type="email"
                                        id="email"
                                        required
                                    />
                                </div>

                                <div>
                                    <label className="sr-only" htmlFor="phone">Phone</label>
                                    <input
                                        className="w-full rounded-lg border border-gray-300 p-4 text-sm"
                                        placeholder="Phone Number"
                                        type="tel"
                                        id="phone"
                                        required
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="sr-only" htmlFor="service">Service Required</label>
                                <select
                                    className="w-full rounded-lg border border-gray-300 p-4 text-sm"
                                    id="service"
                                    required
                                >
                                    <option value="">Select a Service</option>
                                    {serviceDetails?.services?.map((service, i) => (
                                        <option key={i} value={service}>{service}</option>
                                    ))}
                                </select>
                            </div>

                            <div>
                                <label className="sr-only" htmlFor="message">Message</label>
                                <textarea
                                    className="w-full rounded-lg border border-gray-300 p-4 text-sm"
                                    placeholder="Tell me more about your project or what you're looking for."
                                    rows="6"
                                    id="message"
                                    required
                                ></textarea>
                            </div>

                            <div className="mt-4">
                                <button
                                    type="submit"
                                    className="inline-block w-full rounded-lg bg-blue-600 px-5 py-3 font-medium text-white sm:w-auto hover:bg-blue-700"
                                >
                                    Submit
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ServiceForm
