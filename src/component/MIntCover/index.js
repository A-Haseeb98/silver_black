import { AiOutlineClose } from 'react-icons/ai';
import { FaAlignJustify } from 'react-icons/fa';
import DISCORD from '../../assets/images/discord.png'
import TWITTER from '../../assets/images/twitter.png'
import './style/index.css'
import BANNER from '../../assets/images/silver_cover2.png'
import { GrInstagram } from 'react-icons/gr';
import { useState } from 'react';
import { Fade } from "react-awesome-reveal";
import { HiPlus, HiMinus } from 'react-icons/hi'
import { GrFormClose } from 'react-icons/gr'

function Cover() {

    const [toggle, setToggle] = useState(false)
    const handleClick = (value) => {
        setToggle(!value)
    }
    let price = 0.09;
    const [quantity, setQuantity] = useState(1)
    const [close, setClose] = useState(false)


    let clickHandler = (num, sign) => {
        if (quantity < 2 && sign == '+') {
            setQuantity(quantity + num)
        }
        else if (quantity > 1 && sign == '-') {
            setQuantity(quantity - num)
        }
    }


    return (
        <>
            {/* Navbar for Desktop Start */}
            <div className='top_header mobile_display_none'>
                <div className='nav_left_wrapper'>
                    <div className='nav_logo_container' >
                        SILVERBACK LEGENDS
                    </div>

                    <ul className='sections_menu' >
                        <li><a href='#about'>About</a> </li>
                        {/* <li><a href='#charity'>Charity</a> </li> */}
                        <li><a href='#road_map'>Roadmap</a> </li>
                        <li><a href='#team_container'>Team</a> </li>
                        <li><a href='#faq'>FAQ</a> </li>
                    </ul>
                </div>
                <div className='nav_right_wrapper'>
                    <div className='top_icons'>
                        <span className='icon_' ><a href='https://discord.com/invite/VwKsk7ktsp' rel="noreferrer" target='_blank'> <img className='img_icon discord_icon_mobile' src={DISCORD} alt='DISCORD' /></a></span>
                        <span className='icon_'><a href='https://twitter.com/SILVERBACKLGNDS' rel="noreferrer" target='_blank'><img className='img_icon twitter_icon_mobile' src={TWITTER} alt='TWITTER' /></a></span>
                        <span className='icon_ menu_instagram'><a href='https://www.instagram.com/silverbacklegends/' target='_blank' rel="noreferrer"><GrInstagram size='17' color='black' /></a></span>
                    </div>
                    <div className='top_right_btn'>
                        <button onClick={() => window.location.href = 'https://discord.com/invite/VwKsk7ktsp'} className='navbar_btn'>JOIN OUR DISCORD</button>
                    </div>
                </div>
            </div>
            {/* Navbar for Desktop End */}

            {/* Navbar for Mobile Start */}

            <div className='navbar_mobile'>
                <div className='left_section_mobile'>
                    SILVERBACK LEGENDS
                </div>

                <div className='right_section_mobile'>
                    <button onClick={() => handleClick(toggle)} className='navbar_btn_mobile'>{toggle ? <AiOutlineClose size='24' /> : <FaAlignJustify size='28' />}</button>
                </div>
            </div>
            <div className='mobile_navbar_container'>
                <div className='small_container'>
                    <div className={toggle ? 'show_content' : 'hide_content'}>
                        <div className='mobile_sections_container'>
                            <ul className='mobile_sections_menu' >
                                <li><a href='#about'>About</a> </li>
                                <li><a href='#road_map'>Roadmap</a> </li>
                                <li><a href='#team_container'>Team</a> </li>
                                <li><a href='#faq'>FAQ</a> </li>
                            </ul>
                        </div>
                        <div className='horizontal_line'></div>
                        <div className='mobile_icon_container' >
                            <span className='icon_mobile' ><a href='https://discord.com/invite/VwKsk7ktsp' rel="noreferrer" target='_blank'> <img className='img_icon discord_icon_mobile' src={DISCORD} alt='DISCORD' /></a></span>
                            <span className='icon_mobile'><a href='https://twitter.com/SILVERBACKLGNDS' rel="noreferrer" target='_blank'><img className='img_icon twitter_icon_mobile' src={TWITTER} alt='TWITTER' /></a></span>
                            <span className='icon_mobile instagram_container'><a href='https://www.instagram.com/silverbacklegends/' rel="noreferrer"><GrInstagram size='17' color='black' /></a></span>
                        </div>
                    </div>
                </div>
            </div>
            {/* Nanbar for Mobile End */}

            {/* CoverSection for Desktop Start */}

            <div className='image_banner_container display_block_mob'>
                <img className='banner_image' src={BANNER} alt='logo' />
                <div className='mint_cover_content'>
                    <Fade direction='left' triggerOnce={true} >
                        <h1 className='mint_main_heading'>SILVERBACK LEGENDS! <br /> <span>The Godfathers of all Apes</span></h1>
                    </Fade>
                    <div className='mint_container'>

                        <div className="message_box">
                            <p className='alert-p'>Minting Is Opened <br /> For Whitelisted Addresses. </p>
                        </div>
                        {
                            close ? <div className='notification_box'>
                                <p><span className='type'>Error! </span> Email address is already registered.</p>
                                <span onClick={() => setClose(false)} className='cut'><GrFormClose /></span>
                            </div> : null
                        }

                        <div className="sellector_buttons_wrapper">
                            <button className='plus_minus_button' onClick={() => clickHandler(1, '-')}>
                                <HiMinus color='black' />
                            </button>
                            <div >
                                <span className='quantity'> QUANTITY</span>
                                <span className='mint_qantity'>{quantity}</span>

                            </div>

                            <button className='plus_minus_button' onClick={() => clickHandler(1, '+')}>
                                <HiPlus color='black' />
                            </button>
                        </div>
                        <p className='mint_price'>
                            {(price * quantity).toFixed(2)} ETH
                        </p>
                        <p className="text-center inst_para text-white ">
                            You can mint up to 2 SilverBack Legends per transaction. <br />
                        </p>
                        <button
                            onClick={() => setClose(true)}
                            className="connect_btn" >
                            Mint
                        </button>

                    </div>
                    {/* <button className='theme-btn mint_raffle_button'>Join The Raffle</button> */}

                </div>
            </div>
            {/* Cover for Desktop End */}

        </>
    )
}

export default Cover;