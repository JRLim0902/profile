import './contact.css'
import { useRef, useState } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
    const formRef = useRef()
    const [done, setDone] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_r3ed45c', 'template_uv9wlqi', formRef.current, 'MmUjvWRF_CJ9pDuN1')
            .then((result) => {
                console.log(result.text);
                setDone(true);
            }, (error) => {
                console.log(error.text);
            });
    }

    return (
        <div className='contact'>
            <div className='contact-bg'></div>
            <div className="contact-wrapper">
                <div className="c-left">
                    <h1 className="c-title">Contact Me</h1>
                    <div className="c-info">
                        <div className="c-info-item">
                            <div
                                className='fa fa-fax con'>
                                <p className='para'> 9035xxxx</p></div>
                            <div
                                className='fa fa-envelope con'>
                                <p className='para'> jinrulim96@gmail.com</p></div>
                        </div>

                    </div>
                </div>
                <div className="c-right">
                    <p className="c-desc">
                        <b>Contact me</b> for detailed resume!
                    </p>
                    <form ref={formRef} onSubmit={handleSubmit}>
                        <input type="text" placeholder='Name' name='user_name' />
                        <input type="text" placeholder='Subject' name='user_subject' />
                        <input type="text" placeholder='Email' name='user_email' />
                        <textarea rows="5" placeholder='Message' name='message' />
                        <button>Submit</button>
                        {done && "Thank you!"}
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact