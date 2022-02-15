import './style/index.css'
// import ICON from '../../../assets/images/six_dots.png'
import { Fade } from "react-awesome-reveal";

function Card() {
    return (
        <div className='col-12 steps_container'>
            <Fade triggerOnce={true} direction='left' >
                <div className='row steps_section'>
                    <div><h3 className='roadMap_steps_heading'><span className='roadMap_steps_heading_blue'>{`0${1}. `}</span> ART & COMMUNITY IS OUR FOCUS  </h3> </div>
                    <div className='roadMap_steps_content'><p>
                        7474 unique and digital SILVERBACK LEGENDS, each with their own assets and characteristics, reflect our commitment to the artwork. Our community comes first and so does our dedication to provide invaluable quality and bespoke creations to every enthusiast entering our passionate project.
                    </p></div>
                </div>
            </Fade >
            <Fade triggerOnce={true} direction='left'>
                <div className='row steps_section'>
                    <div><h3 className='roadMap_steps_heading'><span className='roadMap_steps_heading_blue'>{`0${2}. `}</span>THE BEGINNING </h3> </div>
                    <div className='roadMap_steps_content'><p>
                        The main goal is to make sure your investment and our mint are as successful as possible. If you are lucky and mint one of our rare NFTs you can very quickly make a big return on your investment within a few days, also you can hold it for longer to let the price grow.
                    </p>
                    </div>
                </div>
            </Fade >
            <Fade triggerOnce={true} direction='left'>
                <div className='row steps_section'>
                    <div><h3 className='roadMap_steps_heading'><span className='roadMap_steps_heading_blue'>{`0${3}. `}</span>  SECOND COLLECTION FREE MINT  </h3> </div>
                    <div className='roadMap_steps_content'>
                        <p>We will be launching a female SILVERBACK LEGENDS collection. There will be special benefits and perks unlocked to those who hold both a male & female LEGENDS NFT. All SILVERBACK LEGENDS holders will be able to mint their female LEGENDS NFT for a mint price of 0$.</p></div>
                </div>
            </Fade >
            <Fade triggerOnce={true} direction='left'>
                <div className='row steps_section'>
                    <div><h3 className='roadMap_steps_heading'><span className='roadMap_steps_heading_blue'>{`0${4}. `}</span>  MONTHLY DRAW FOR HOLDERS TO WIN </h3> </div>
                    <div className='roadMap_steps_content'><p>
                        50% of SILVERBACK LEGENDS second-market royalties will go back to the holders every month in the form of a draw that verified holders have a chance to win. Second-market transaction royalties will be set at 10%. Each month a special draw will take place that the holders can enter. The amount of winners will alternate between 100 winners and 10 winners consecutively, and 50% of the past month second-market royalties will be split between the winners. To enter this monthly draw, you must hold a SILVERBACK LEGENDS NFT for at least 60 days. The first draw will be with 100 winners and will take place 60 days after sellout. The more SBL NFTs you hold the better chance you have of winning!
                    </p></div>
                </div>
            </Fade >
            <Fade triggerOnce={true} direction='left'>
                <div className='row steps_section'>
                    <div><h3 className='roadMap_steps_heading'><span className='roadMap_steps_heading_blue'>{`0${5}. `}</span>   MARKETING FOR SUCCESS  </h3> </div>
                    <div className='roadMap_steps_content'><p>Meanwhile, we will also be partnering with wisely-selected enterpreneurs, celebrities, and cryptomaniacs, to let them be apart of our journey and we will do the next moves together including but not limited to collaborations, meet ups, and advertisements in the biggest cities in the world.
                    </p></div>
                </div>
            </Fade >
            <Fade triggerOnce={true} direction='left'>
                <div className='row steps_section'>
                    <div><h3 className='roadMap_steps_heading'><span className='roadMap_steps_heading_blue'>{`0${6}. `}</span>   CHARITY TO GIVE BACK   </h3> </div>
                    <div className='roadMap_steps_content'><p>After sellout and reveal of the SILVERBACK LEGENDS, we pledge to donate $100,000 to a gorillas charity or foundation selected by our members. Let’s give back to these amazing creatures, our inspiration, the gorillas.</p></div>
                </div>
            </Fade >
            <Fade triggerOnce={true} direction='left'>
                <div className='row steps_section'>
                    <div><h3 className='roadMap_steps_heading'><span className='roadMap_steps_heading_blue'>{`0${7}. `}</span>COMMUNITY PROJECTS - WAGMI
                    </h3> </div>
                    <div className='roadMap_steps_content'><p>We are committed to support, invest, reward, and collaborate with the best projects and project ideas of our members. We will hold contests in our discord and reward and recruit the most creative & innovative ideas and members to join certain projects.</p></div>
                </div>
            </Fade >
            <Fade triggerOnce={true} direction='left'>
                <div className='row steps_section'>
                    <div><h3 className='roadMap_steps_heading'><span className='roadMap_steps_heading_blue'>{`0${8}. `}</span>METAVERSE IS MANDATORY   </h3> </div>
                    <div className='roadMap_steps_content'><p>

                        Metaverse is mandatory for SILVERBACK LEGENDS | SBL holders as this is the virtualized habitat for the SBL and your future environment to be a part of. Whether you want to use your LEGEND as your 3D avatar in the Metaverse for events or hanging out, or even to use it in games or other activities, we will be ready, will you? We are also planning to buy land for our community, where the SBL community will have exclusive access.
                        <br />
                        <br />

                        Some of the things we are already planning in the metaverse:
                        <br />
                        <br />
                        <ul>

                            <li> Exclusive SBL holders only events.</li>
                            <li>CAREER Help Meetings for SBL holders with special guests.
                            </li><li> SBL HEALTH SPA (mental health) will create and develop projects with psychologists, health professionals, and experienced trauma survivors to bring awareness and access in the Metaverse about self-care, mental health, mental guidance, trauma awareness & healing, addiction prevention & healing, grieving support, loneliness care-station and many more.
                            </li><li> SBL DESIGN AREA for meetings with Artists, Designers, Architects to work on the first SBL 8 Meta-Star Hotel which will not only take place in the Metaverse.
                            </li><li>SBL FASHION STUDIO for meetings with Fashion Designers, Artists & Enthusiasts to work on the very first SBL Fashion Collection.
                            </li>
                        </ul>
                    </p></div>

                </div>
            </Fade>
        </div >
    )
}

export default Card

//<span><img src={ICON} alt='icon' /></span>