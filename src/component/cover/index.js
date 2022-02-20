import { AiOutlineClose } from 'react-icons/ai';
import { FaAlignJustify ,FaDiscord } from 'react-icons/fa';

import { HiOutlineMenuAlt4 } from 'react-icons/hi';
import DISCORD from '../../assets/images/discord.png'
import TWITTER from '../../assets/images/twitter.png'
import './style/index.css'
import BANNER from '../../assets/images/silver_cover2.png'
import { GrInstagram } from 'react-icons/gr';
import { useState } from 'react';
import { Fade } from "react-awesome-reveal";


function Cover() {

    const [toggle, setToggle] = useState(false)
    const handleClick = (value) => {
        setToggle(!value)
    }
    return (
        <>
            <div className='top_header display_none'>
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
                        <span className='icon_ menu_instagram' ><a href='https://discord.com/invite/VwKsk7ktsp' rel="noreferrer" target='_blank'><FaDiscord size='20' color='black' /></a></span>
                        <span className='icon_'><a href='https://twitter.com/SILVERBACKLGNDS' rel="noreferrer" target='_blank'><img className='img_icon twitter_icon_mobile' src={TWITTER} alt='TWITTER' /></a></span>
                        <span className='icon_ menu_instagram'><a href='https://www.instagram.com/silverbacklegends/' target='_blank' rel="noreferrer"><GrInstagram size='17' color='black' /></a></span>
                    </div>
                    <div className='top_right_btn'>
                        <button onClick={() => window.location.href = 'https://discord.com/invite/VwKsk7ktsp'} className='navbar_btn'>JOIN OUR DISCORD</button>
                    </div>
                </div>
            </div>

            <div className='image_banner_container'>
                <img className='banner_image' src={BANNER} alt='logo' />
                <div className='center_div'>
                    <Fade direction='up' cascade={true}>

                        <h1>Welcome To The Exclusive SILVERBACK LEGENDS!<br /></h1>
                        <p>Join this super-exclusive NFT project featuring not only the coolest art, but unmatched utility!</p>
                        {/* <button onClick={() => { window.location = 'https://discord.com/invite/VwKsk7ktsp' }} className='button_banner '>JOIN DISCORD</button> */}
                    </Fade>

                </div>
            </div>

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
                <div className='mobile_banner_image_container'>
                    <img className='mobile_banner_image' src={BANNER} alt='logo' />
                    {/* <button onClick={() => { window.location = 'https://discord.com/invite/VwKsk7ktsp' }} className='button_banner '>JOIN US TO REGISTER FOR PRESALE</button> */}
                    <div className='center_div'>
                        <Fade direction='right' triggerOnce={true} cascade={true}>

                            <h1>Welcome To The Exclusive SILVERBACK LEGENDS!  </h1>
                            <p>Join this super-exclusive NFT project featuring not only the coolest art, but unmatched utility!</p>
                        </Fade>

                        <button onClick={() => { window.location = 'https://discord.com/invite/VwKsk7ktsp' }} className='button_banner '>JOIN DISCORD</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Cover;