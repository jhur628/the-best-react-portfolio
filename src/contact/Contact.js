import ContactForm from './ContactForm'
import './Contact.css'

export default function Contact() {
    return (
        <div className='contact-container'>
            <h1>Contact</h1>
            <div className='contact-row'>
                <div className='contact-info'>
                    <p>email</p>
                    <h3>hur.john628@gmail.com</h3>
                    <p>phone</p>
                    <h3>(925)234-6197</h3>
                </div>
                <ContactForm />
            </div>
        </div>
    )
}