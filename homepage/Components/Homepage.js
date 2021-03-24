import homepageStyles from '../styles/Homepage.module.css';
import Link from 'next/link'

const Homepage = () => {
    return (
        <div className={homepageStyles.background}>

            <div className={homepageStyles.leftdiv}>
                <Link href="/">Join Our Community Of Monthly donors!</Link>
                <span>To help provide safe water vital to the health of families around the world.</span>
                <p>1 in every 10 people lack access to clean drinking water on earth. Access to clean 
                    water during the tough times of COVID – 19 is more critical than ever. We can overcome the water crisis together.
                </p>
            </div>

            <div className={homepageStyles.rightdiv}>
                <nav>
                    Your GENEROSITY creates a long-lasting ripple effect
                </nav>

                <div className={homepageStyles.donatebutton}>
                    <button className={homepageStyles.button1}>Donate Once</button>
                    <button className={homepageStyles.button2}>Donate Monthly</button>
                </div>

                <div className={homepageStyles.outerdiv}>
                   <div className={homepageStyles.innerdiv}>
                       <div>$10/MONTH</div>
                       <div>$20/MONTH</div>
                       <div>$40/MONTH</div>
                   </div>
                   <div className={homepageStyles.innerdiv}>
                       <div>$60/MONTH</div>
                       <div>$100/MONTH</div>
                       <div>OTHER</div>
                   </div>
                </div>
                <button className={homepageStyles.donate}><span>Donate</span></button>
                <div className={homepageStyles.bottomText}>
                    1 in every 10 people lack access to clean drinking water on earth. Access to clean 
                    water during the tough times of COVID – 19 is more critical than ever. We can overcome the water crisis together.
                </div>
            </div>

        </div>
    )
}

export default Homepage
