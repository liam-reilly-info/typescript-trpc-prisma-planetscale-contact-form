import React, { useState } from "react";
import { api } from "~/utils/api";

interface ContactFormProps {
    title: string
}

const ContactForm = ({ title }: ContactFormProps) => {

    // set up some state which will be mutated when typing into the form fields
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [message, setMessage] = useState("");

    // get a reference to our tRPC mutation for adding submissions
    // this will be used later when data is submitted
    const addSubmission = api.submissions.add.useMutation();

    // event handler for when the form data is submitted
    const collectData = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        // pass the current state values to our addSubmission procedure 
        // on our tRPC router 
        addSubmission.mutate({
            name, 
            email, 
            phone,
            message
        });

        // reset the state to clear the form
        setName("")
        setEmail("")
        setPhone("")
        setMessage("")
    }

    return <form onSubmit={collectData} 
                className="grid border-white border-2  grid-rows-7 rounded-lg shadow-2xl bg-blue-400 py-4 px-8">
        <h1 className="col-span-2 text-black text-4xl mb-8 justify-self-center py-4 font-sans uppercase">{title}</h1>

        <label>Name:</label>
        <input 
            id="name" 
            value={ name } 
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value)} 
            placeholder="full name"
            className="h-8 rounded px-2 mb-6"
            />

        <label>Email:</label>
        <input 
            id="email" 
            value= { email }
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)} 
            placeholder="email address"
            className="h-8 rounded px-2 mb-6"
            />
        
        <label>Phone:</label>
        <input 
            id="phone" 
            value= { phone }
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPhone(e.target.value)} 
            placeholder="phone"
            className="h-8 rounded px-2 mb-6"
            />

        <label className="pr-4">Message:</label>
        <textarea 
            id="message" 
            value= { message }
            onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setMessage(e.target.value)} 
            placeholder="message/query"
            className="h-20 row-span-2 rounded px-2 self-center"
            />
        
        <button 
            className="col-span-2 bg-blue-600 rounded-md h-10 mt-6 hover:h-10 text-white hover:bg-blue-500 hover:text-white" 
            type="submit">Send</button>
    </form>
}

export default ContactForm