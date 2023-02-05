import React from "react";

// TODO: fetch this data from database
const results: Array<{ imgPath: string; item: string; category: string }> = [
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

const Results: React.FC<{}> = () => {
    return (
        <div className="results">
            <h1>Results</h1>
            <div className="cards">
                {results.map((result, idx) => {
                    return (
                        <a href="/" key={`${result.imgPath}-${idx}`}>
                            <img src={result.imgPath} alt="" />
                            <div className="info">
                                <p>{`${result.item}-${result.category}`}</p>
                            </div>
                        </a>
                    );
                })}
            </div>
        </div>
    );
};

export default Results;
