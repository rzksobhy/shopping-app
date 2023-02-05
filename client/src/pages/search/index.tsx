import React from "react";
import SideBar from "./SideBar";
import Results from "./results";
import "../../styles/search.scss";

const Search: React.FC<{}> = () => {
    // prettier-ignore
    return (
        <div className="search">
            <SideBar />
            <Results />
        </div>
    )
};

export default Search;
