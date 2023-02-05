// import { loremIpsum } from "lorem-ipsum";
import { useRef, useState } from "react";
import { Link } from "react-router-dom";

// TODO: fetch this data from database
const cards: Array<{ imgPath: string; item: string; category: string }> = [
    { imgPath: "imgs/hoodi.jpg", item: "item", category: "category" },
    { imgPath: "imgs/hoodi.jpg", item: "item", category: "category" },
    { imgPath: "imgs/hoodi.jpg", item: "item", category: "category" },
    { imgPath: "imgs/hoodi.jpg", item: "item", category: "category" },
    { imgPath: "imgs/hoodi.jpg", item: "item", category: "category" },
    { imgPath: "imgs/hoodi.jpg", item: "item", category: "category" },
    { imgPath: "imgs/hoodi.jpg", item: "item", category: "category" },
    { imgPath: "imgs/hoodi.jpg", item: "item", category: "category" },
    { imgPath: "imgs/hoodi.jpg", item: "item", category: "category" },
    { imgPath: "imgs/hoodi.jpg", item: "item", category: "category" },
    { imgPath: "imgs/hoodi.jpg", item: "item", category: "category" },
    { imgPath: "imgs/hoodi.jpg", item: "item", category: "category" },
    { imgPath: "imgs/hoodi.jpg", item: "item", category: "category" },
    { imgPath: "imgs/hoodi.jpg", item: "item", category: "category" },
    { imgPath: "imgs/hoodi.jpg", item: "item", category: "category" },
    { imgPath: "imgs/hoodi.jpg", item: "item", category: "category" },
];

const Card: React.FC<{
    idx: number;
    item: string;
    imgPath: string;
    // description: string;
    category: string;
    translateX: number;
}> = (Props) => {
    // use this temporarily instead of `Props.description`
    // const description = useRef(loremIpsum({ count: 2, units: "sentence" }));

    // prettier-ignore
    return (
        <Link to="" className="card" style={{ transform: `translateX(${Props.translateX * 255}px)` }}>
            <img src={Props.imgPath} alt="" />
            <h4>
                {
                    `${Props.item.length > 10
                        ? `${Props.item.slice(0, 10)}...`
                        : Props.item} ${Props.idx} - ${Props.category}`
                }
            </h4>
        </Link>
    );
};

const CardsSlider: React.FC<{}> = () => {
    const [x, setX] = useState(0);

    // swipe back and forth between cards using buttons
    function arrow_click(dir: number) {
        if ((x === 0 && dir === -1) || (x === -1 * (cards.length - 3) && dir === 1)) return;
        setX(x - dir);
    }

    // prettier-ignore
    return (
        <div className="cards-slider">
            <div className="arrow left" onClick={() => { arrow_click(-1); }}>{"<"}</div>
            <div className="cards">
                {cards.map((card, idx) => {
                    return (
                        <Card
                            key={idx}
                            idx={idx}
                            translateX={x}
                            imgPath={card.imgPath}
                            item={card.item}
                            category={card.category}
                        />
                    );
                })}
            </div>
            <div className="arrow right" onClick={() => { arrow_click(1); }}>{">"}</div>
        </div>
    );
};

export default CardsSlider;
