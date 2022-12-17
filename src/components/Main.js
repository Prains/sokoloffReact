import icondown from '../assets/icondown.svg'
import mainscreen from '../assets/mainscreen.jpg'
const Main = () => {
    return (
        <section className="main" style={{
            backgroundImage: `url(${mainscreen})`,
        }}>
            <div></div>
            <div className="main__lead">
                <h1 className="main__title">Красная икра и рыба с Камчатки
                </h1>
                <p className="main__subtitle">с бесплатной доставкой по Новосибирску
                </p>
            </div>
            <img src={icondown} alt="" className="icondown"></img>
        </section >
    );
}

export default Main;