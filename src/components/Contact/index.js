import './index.scss'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { useEffect, useState } from 'react'




const Contact = () => {
    /*const form = useRef;
    const sendEmail = (e) => {
        e.preventDefault()

        emailjs
            .sendForm(
                'gmail',
                'template_u2dcw15',
                form.current,
                'i8Lj7EonYQyK0B2Rx'
            )
            .then(
                () => {
                    alert('Message successfully sent!')
                    window.location.reload(false)
                },
                () => {
                    alert('Failed to send the message, please try again')
                }
            )
    }*/
    const [letterClass, setLetterClass] = useState('text-animate');
    useEffect(() => {
        const timer = setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 3000);
        return () => {
            clearTimeout(timer);
        }
    });

    return (
        <>
            
            <div className='container contact-page'>
                <div className='text-zone'>
                    <h1>
                        <AnimatedLetters letterClass={letterClass} strArray={'Contate-me'.split("")} idx={15} />
                    </h1>
                    <p>
                        Estou interessado em oportunidades freelance. No entanto, se você tiver outra solicitação ou pergunta, não hesite em entrar em contato comigo usando o formulário abaixo.
                    </p>
                    <div className='contact-form'>
                        <form>
                            <ul>
                                <li className='half'>
                                    <input
                                        type="text"
                                        name="name"
                                        placeholder='Name'
                                        required
                                    />
                                </li>
                                <li className='half'>
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder='Email'
                                        required
                                    />
                                </li>
                                <li>
                                    <input
                                        type="text"
                                        name="subject"
                                        placeholder='subject'
                                        required
                                    />
                                </li>
                                <li>
                                    <textarea
                                        name="message"
                                        placeholder='Message'
                                        required
                                    ></textarea>
                                </li>
                                <li>
                                    <input
                                        type="submit"
                                        className='flat-button'
                                        name="subject"
                                        value="SEND"
                                        required
                                    />
                                </li>
                            </ul>
                        </form>
                    </div>
                </div>
                <div className='info-map'>
                    Gabriel Bessi
                    <br />
                    Brasil,
                    <br />
                    São Paulo <br />
                    <span>gabriel.bessi4@outlook.com</span>
                </div>
                <div className='map-wrap'>
                    <MapContainer center={[-23.6815302, -46.8761841]} zoom={13}>
                        <TileLayer
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                        <Marker
                            position={[-23.6815302, -46.8761841]}>
                            <Popup>
                                Eu moro aqui <br />
                                por enquanto
                            </Popup>
                        </Marker>
                    </MapContainer>
                </div>
            </div>
            <Loader type="pacman" />
        </>
    )
}
//ref={form} onSubmit={sendEmail}

export default Contact