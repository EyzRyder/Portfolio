import { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { useRef } from 'react'
import emailjs from '@emailjs/browser'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'

const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm(
        "service_tzxnmr5",
        "template_u2dcw15",
        form.current,
        'i8Lj7EonYQyK0B2Rx'
      )
      .then(
        () => {
          alert('Mensagem enviado com sucesso!')
          window.location.reload(false)
        },
        () => {
          alert('Falha ao enviar a mensagem, tente novamente')
        }
      )
  }

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
            <form ref={form} onSubmit={sendEmail}>
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
          <MapContainer center={[-23.5071996, -46.689129]} zoom={13}>
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker
              position={[-23.5071996, -46.689129]}>
              <Popup>
                Eu moro por aqui
              </Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Contact