import "./intro.css";
import froggie from '../../img/froggie.jpeg'

const Intro = () => {
    return (
        <div className="i">
            <div className="i-left">
                <div className="i-left-wrapper">
                    <h2 className="i-intro">Hello, my name is</h2>
                    <h1 className="i-name">JR Lim</h1>
                    <div className="i-title">
                        <div className="i-title-wrapper">
                            <div className="i-title-item">Finance Executive</div>
                            <div className="i-title-item">Coffee lover</div>
                            <div className="i-title-item">Ukulele Learner</div>
                            <div className="i-title-item">Eat first, diet never</div>
                            <div className="i-title-item"> A Nobody that can Be</div>
                        </div>
                    </div>
                    <div className="i-desc">
                        My day job is finance excutive. I love learning new things even though they might seem like different circles on a venn diagram... <br /> <br />Thank you for visiting my website, happy exploring!!
                    </div>
                </div>
            </div>
            <div className="i-right">
                <div className="i-bg"></div>
                <img src={froggie} alt="" className="i-img"></img>
            </div>
        </div>
    )
}

export default Intro