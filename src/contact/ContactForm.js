import './Contact.css'
import { useState } from 'react';

export default function ContactForm() {
    const [ formValues, setFormValues ] = useState({

    })



    return (
        <form
            // onSubmit={}
            className='contact-form'
        >
            <label>Send me a message:</label>
            <input 
                className='name-input'
                type='text'
                placeholder='Your name...'
                name='name'
                required
            />
            <input 
                className='email-input'
                type='email'
                placeholder='Your email...'
                name='email'
                required
            />
            <textarea 
                className='message-input'
                placeholder='Your message...'
                name='message'
                required
            />
            <button className='form-button' type='submit'>Send Message!</button>
        </form>
    )
}