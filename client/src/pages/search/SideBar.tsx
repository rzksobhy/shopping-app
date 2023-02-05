import React, { useState } from "react";

// TODO: fetch this from database
const Categories = [
    "electronics",
    "clothes",
    "beauty_and_personal_care",
    "video_games",
    "music",
    "tools",
];

const SelectCategories: React.FC<{}> = () => {
    return (
        <div className="categories">
            <h3 className="label">categories</h3>

            <div className="container">
                {Categories.map((category) => {
                    let id = `checkbox-${category}`;

                    return (
                        <label htmlFor={id} key={id}>
                            <input type="checkbox" id={id} />
                            <span>{category.replaceAll("_", " ")}</span>
                        </label>
                    );
                })}
            </div>
        </div>
    );
};

const PriceRange: React.FC<{}> = () => {
    const [min, setMin] = useState(0);
    const [max, setMax] = useState(100);

    const onMinChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();

        let val = e.target.valueAsNumber;
        if (val > max) val = max;
        else if (isNaN(val)) val = 0;

        setMin(val);
    };

    const onMaxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();

        let val = e.target.valueAsNumber;
        if (val < min) val = min;
        else if (isNaN(val)) val = 100;

        setMax(val);
    };

    return (
        <div className="price-range">
            <div className="label">Price</div>
            <div className="price-input">
                <div className="field">
                    <span>Min</span>
                    <input type="number" className="input-min" value={min} onChange={onMinChange} />
                </div>
                <div className="separator">-</div>
                <div className="field">
                    <span>Max</span>
                    <input type="number" className="input-max" value={max} onChange={onMaxChange} />
                </div>
            </div>
        </div>
    );
};

const SideBar: React.FC<{}> = () => {
    // prettier-ignore
    return (
        <div className="sidebar">
            <div className="container">
                <SelectCategories />
                <PriceRange />
            </div>
        </div>
    );
};

export default SideBar;
