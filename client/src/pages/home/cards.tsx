// import { loremIpsum } from "lorem-ipsum";
import React, { useRef } from "react";
import { Link } from "react-router-dom";

// TODO: fetch this data from database
const cards: Array<{ imgPath: string; item: string; category: string }> = [
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
}> = (Props) => {
    // use this temporarily instead of `Props.description`
    // const description = useRef(loremIpsum({ count: 2, units: "sentence" }));

    // prettier-ignore
    return (
        <Link to="" className="card">
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

const Cards: React.FC<{}> = () => {
    // prettier-ignore
    return (
        <div className="cards">
            {
                cards.map((card, idx) => {
                    return (
                        <Card key={idx}
                            idx={idx}
                            item={card.item}
                            imgPath={card.imgPath}
                            category={card.category}
                        />
                    );
                })
            }
        </div>
    );
};

export default Cards;
