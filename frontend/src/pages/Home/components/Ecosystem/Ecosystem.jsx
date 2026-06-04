import './Ecosystem.css'
import ecosystemImage from '../../../../assets/images/ecosystem.png'


const links = [
    {
        title: "Explore products",
        href: "#"
    },
    {
        title: "Try kite Demo",
        href: "#"
    },
];

function Ecosystem() {
    return (
        <section className='ecosystem-section'>
            <div className='ecosystem-container'>
                <div className='ecosystem-image'>
                    <img src={ecosystemImage} alt="Zerodha ecosystem" />
                </div>

                <div className="ecosystem-content">
                    <h2>The Zerodha Universe</h2>

                    <p>
                        Extend your trading and investment experience
                        even further with our partner platforms.
                    </p>

                    <div className='ecosystem-links'>
                        {links.map((link)=>(
                            <a key={link.title} href={link.href} >
                                {link.title}
                            </a>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Ecosystem