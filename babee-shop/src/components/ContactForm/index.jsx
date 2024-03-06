import { useState } from 'react';

export function ContactForm() {
    // const [firstName, setFirstName] = useState('');
    // const [lastName, setLastName] = useState('');
    // const [city, setCity] = useState('');

    // function onTextInputChange(event) {
    //     const value = event.target.value;
    //     if (event.target.name === 'first-name') {
    //       setFirstName(value);
    //     }
    //     if (event.target.name === 'last-name') {
    //       setLastName(value);
    //     }
    //     if (event.target.name === 'city') {
    //       setCity(value);
    //     }
    //   }
    return (
        <div >
            <h1 className="text-center">Contact Form</h1>
            <form className="flex-col content-center md:w-2/4 mx-auto bg-black p-7 border-black rounded mt-4 ">
                <div className="mb-4">
                    <label htmlFor="fullName" className="block font-semibold">Full Name</label>
                    <input
                        type="text"
                        id="fullName"
                        name="fullName"
                        className="mt-1 p-2 border rounded w-full text-black"
                        required
                        minLength="3"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="subject" className="block text-gray-600 font-semibold">Subject</label>
                    <input
                        type="text"
                        id="subject"
                        name="subject"
                        className="mt-1 p-2 border rounded w-full text-black"
                        required
                        minLength="3"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="email" className="block text-gray-600 font-semibold">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        className="mt-1 p-2 border rounded w-full text-black"
                        required
                        pattern="^\S+@\S+$"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="body" className="block text-gray-600 font-semibold">Body</label>
                    <textarea
                        id="body"
                        name="body"
                        className="mt-1 p-2 border border-gray-300 rounded w-full text-black"
                        required
                        minLength="3"
                    ></textarea>
                </div>
                <div className="mt-4">
                <button type="submit" className="primary-button">Submit</button>
                </div>
            </form>
        </div>
    );
}