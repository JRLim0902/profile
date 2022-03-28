import "./about.css";
import pie from '../../img/pie.jpeg';

const About = () => {
    return (
        <div className="about">
            <div className="about-left">
                <div className="about-card bg"></div>
                <div className="about-card">
                    <img
                        src={pie}
                        alt=""
                        className="about-img"></img>
                </div>
            </div>
            <div className="about-right">
                <h1 className="about-title">About Me</h1>
                <p className="about-sub">
                    I graduated with a degree in Accounting and Finance, been working in the field ever since. That said...
                </p>
                <p className="about-desc">
                    I am trying to head in a different direction, a different career path. <br />I want to feel motivated and energized at what I do; making a difference and surrounding myself with positivity.
                    <br /><br />I enjoy spending time Youtubing, reading, eating, but most of all, with my family.
                    <br /><br />Would not say no to some pie and coffee :)
                </p>
            </div>
        </div>
    )
}

export default About;