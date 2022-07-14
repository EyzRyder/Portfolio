import LogoS from '../../../assets/images/logo-g.png'
import './index.scss'

const Logo = () => {

    return (
        <div className="logo-container">
            <img
                className="solid-logo"
                src={LogoS}
                alt="G"
            />

        </div>
    )
}

export default Logo