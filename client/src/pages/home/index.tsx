import CardsSlider from "./cardsSlider";
import SliderShow from "./slidershow";
import Cards from "./cards";
import "../../styles/home.scss";

const Home: React.FC<{}> = () => {
    return (
        <div className="homeContainer">
            <SliderShow />
            <CardsSlider />
            <Cards />
        </div>
    );
};

export default Home;
