import './style/index.css'
import { BsInstagram } from 'react-icons/bs';
import { BsTwitter } from 'react-icons/bs';
import { BsLinkedin } from 'react-icons/bs';
import { useEffect, useState } from 'react';


function Card({ name, position, img_url, twitter, instagram, linkedin }) {

    const [tw, setTwitter] = useState(false)
    const [In, setInstagram] = useState(false)
    const [li, setLinkedin] = useState(false)

    
    useEffect(() => {
        if (twitter !== '#') {
            setTwitter(true)
        }
        if (instagram !== '#') {
            setInstagram(true)
        } if (linkedin !== '#') {
            setLinkedin(true)
        }
    }, []
)





    return (
        <div className='image_card'>

            <div className='person_image'>
                <img className='person_img' src={img_url} alt='Profile' />
            </div>

            <div>
                <h3 className='person_name'>{name}</h3>
            </div>
            <div className='person_position'>
                <h3>{position}</h3>
            </div>
            
            {/* <div className='icons_section' >

                {tw ? <span className='twitter'><a href={twitter} rel='noreferrer' target='_blank' ><BsTwitter className='twitter_icon' color={'rgba(255,255,255,0.4)'} /></a></span> : null

                }
                {In ? <span className='instagarm'><a href={instagram} rel='noreferrer' target='_blank' ><BsInstagram className='instagram_icon' color={'rgba(255,255,255,0.4)'} /></a></span> : null

                }
                {li ? <span className='linkedin'><a href={linkedin} rel='noreferrer' target='_blank' ><BsLinkedin className='linkedin_icon' color={'rgba(255,255,255,0.4)'} /></a></span> : null

                }


            </div> */}
        </div>
    )
}

export default Card;