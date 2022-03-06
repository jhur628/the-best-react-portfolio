import { useSpring, animated } from 'react-spring';
import ContactForm from './ContactForm'
import './Contact.css'

export default function Contact() {
    const props = useSpring({
        to: { opacity: 1 },
        from: { opacity: 0 },
        delay: 200,
    });

    return (
        <animated.div style={props} className='contact-container'>
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
        </animated.div>
    )
}