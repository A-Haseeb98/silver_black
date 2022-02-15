import LOGO from '../../assets/images/newLogo.png'
import './style/index.css'
function Footer() {
    return (
        <div className='footer_container'>
            <div className='small_container '>
                <div className='footer_wrapper'> 
                    <div className=''>
                        <h2>SILVERBACK <br/> LEGENDS</h2>
                        <br/><small className='footer_credit'>&copy; 2022 SilverBack Legend. All rights reserved.</small>
                    </div>
                    <div className=''>
                        <ul className='foooterItem'>
                            <li>Home</li>
                            <li>Terms & Conditions</li>
                            <li>Contact Us</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;