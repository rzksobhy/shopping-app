import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// TODO: fetch catagories data from the database
const slides: Array<{ imgPath: string; item: string; url: string }> = [
    { imgPath: "imgs/laptop.jpg", item: "electronics", url: "/products/electronics" },
    { imgPath: "imgs/clothes.jpg", item: "clothes", url: "/products/clothes" },
    {
        imgPath: "imgs/beauty_and_personal_care.jpg",
        item: "beauty and personal care",
        url: "/products/beauty_and_personal_care",
    },
    { imgPath: "imgs/video_games.jpg", item: "video games", url: "/products/video_games" },
    { imgPath: "imgs/music.jpg", item: "music tools", url: "/products/music" },
    { imgPath: "imgs/tools.jpg", item: "tools", url: "/products/tools" },
];

const SilderCard: React.FC<{
    imgPath: string;
    item: string;
    url: string;
    idx: number;
}> = (Props) => {
    // set div background to `Props.imgPath`
    const style: React.CSSProperties = {
        background: `linear-gradient(to top, black, rgba(0, 0, 0, 0)), url("${Props.imgPath}") no-repeat`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        transform: `translateX(${Props.idx * 100}%)`,
    };

    return (
        <Link to={Props.url} style={style}>
            <h1>{Props.item.toUpperCase()}</h1>
        </Link>
    );
};

const SliderShow: React.FC<{}> = () => {
    // keeps track of which cared is current visible
    const [visible, setVisible] = useState(0);

    // swipe to next card every 3 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setVisible((visible - 1) % slides.length);
        }, 3 * 1000);

        return () => clearInterval(interval);
    });

    // swipe back and forth between cards using buttons
    const click_arrow = (dir: number) => {
        setVisible(
            visible === 0 && dir === -1
                ? -1 * (slides.length - 1)
                : (visible - dir) % slides.length,
        );
    };

    // prettier-ignore
    return (
        <div className="slidshow">
            <div className="arrow left" onClick={() => { click_arrow(-1); }} >{"<"}</div>
            <div className="content">
                {slides.map((slide, idx) => {
                    return (
                        <SilderCard
                            key={idx}
                            imgPath={slide.imgPath}
                            item={slide.item}
                            url={slide.url}
                            idx={visible}
                        />
                    );
                })}
            </div>
            <div className="arrow right" onClick={() => { click_arrow(1); }} >{">"}</div>
        </div>
    );
};

export default SliderShow;
