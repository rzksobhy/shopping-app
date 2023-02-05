import React from "react";
import { Link } from "react-router-dom";
import "../styles/products.scss";

// TODO: fetch catagories data from the database
const categories: Array<{ imgPath: string; category: string; url: string }> = [
    { imgPath: "imgs/laptop.jpg", category: "electronics", url: "/search?category=electronics" },
    { imgPath: "imgs/clothes.jpg", category: "clothes", url: "/search?category=clothes" },
    {
        imgPath: "imgs/beauty_and_personal_care.jpg",
        category: "beauty and personal care",
        url: "/search?category=beauty_and_personal_care",
    },
    {
        imgPath: "imgs/video_games.jpg",
        category: "video games",
        url: "/search?category=video_games",
    },
    { imgPath: "imgs/music.jpg", category: "music tools", url: "/search?category=music" },
    { imgPath: "imgs/tools.jpg", category: "tools", url: "/search?category=tools" },
];

const Category: React.FC<{ category: string; imgPath: string; url: string }> = (Props) => {
    return (
        <Link to={Props.url}>
            <img src={Props.imgPath} alt={Props.category} />
            <p>{Props.category}</p>
        </Link>
    );
};

const Products: React.FC<{}> = () => {
    // prettier-ignore
    return (
        <div className="products">
            <h1>Categories</h1>
            <ul>
                {
                    categories.map((category, idx) => {
                        // render category
                        return <Category key={idx}
                            category={category.category}
                            imgPath={category.imgPath}
                            url={category.url}
                        />
                    })
                }
            </ul>
        </div>
    );
};

export default Products;
