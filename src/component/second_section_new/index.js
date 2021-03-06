import './style/index.css'
import GORILLA from '../../assets/images/gorilla.png'
import { Fade } from 'react-awesome-reveal';

function NewSection() {
    return (

        <div className="new_container">
            <Fade triggerOnce={true} direction='right'>
                <h1>The Story</h1>
                <p>
                    July 20th, 1969 “the first humans landed on the Moon”…
                    <br />
                    Is that really what they teach kids in school these days on Earth?
                    <br />
                    It was actually us, the SILVERBACK LEGENDS who first went to space from our beloved Mother Earth centuries ago!
                    <br />
                    We were once a tribe, all gorillas, one big kingdom. Our thirst of knowledge and wish to see the galaxies up close was what lead us to build our spaceship; the humans made one eventually, it got them to space, but no where near what our ship can do. We might even reveal it soon in the Metaverse.
                </p>
                <p>

                    At the time we embarked on our journey into space, there were just 50 LEGENDS on the mission. Now there are thousands more of us on our new home planet in a distant galaxy not yet discovered by the humans. Things are very different there, we have seen and learned so many new things and we can’t wait to share.
                </p>
                <p className=''>
                    So let’s get to the point.
                    =                <br />
                    We have been away for about 10 years, well 10 years for us as space travellers. However from the point of view of our old gorilla kingdom on Earth, we have been away for centuries! Our space journey has brought us joy and many wonders but it also has stolen our past from us. It is known as “Time Dilation”, a human named Albert Einstein, was explaining those kinds of things to the humans.
                    <br />
                </p>
                <p className='image_para'>
                    Everyone and everything we knew is now gone, so much has changed. The old kingdom has even divided in two: one part, less interested about adventure and the universe, stayed on the lowlands, while the other part, wanting to be closer to us, moved up to the mountains.
                    <br />
                    And now that we have returned, we must ask, boy oh boy, what have the humans done to our planet? Wasn’t there enough land for all to live in peace on the earth? Have the humans really forgotten who the real leaders, protectors, inventors and mentors are? Are those really what you call cars, houses, yachts, jets?
                    <br />
                    <br />
                    SILVERBACK LEGENDS, put your suits on, it’s time to rebuild our world!
                    <br />
                    See you soon in the METAVERSE!
                </p>
            </Fade>
            <div className='g_image_container'>
                <Fade triggerOnce={true} direction='up'>

                    <img cla src={GORILLA} alt='' />
                </Fade>
            </div>


        </div >
    )
}
export default NewSection;