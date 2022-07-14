import './index.scss'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import emailjs from '@emailjs/browser'
import { useRef } from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'




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

    return (
        <>
            <div className='container contact-page'>
                <div className='text-zone'>
                    <h1>
                        <AnimatedLetters
                            strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
                            idx={15}
                        />
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
                    aluguma rua 620,49 <br />
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