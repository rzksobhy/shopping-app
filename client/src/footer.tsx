import "./styles/footer.scss";

const Footer: React.FC<{}> = () => {
    return (
        <footer>
            <h1>This project is for learning purposes</h1>
            <div>
                <h3>Links</h3>
                <ul>
                    <li>
                        repo: <a href="https://github.com/rzksobhy27/shopping-app">GitHub</a>
                    </li>
                    <li>
                        author: <a href="https://twitter.com/rzksobhy27">twitter</a>
                    </li>
                </ul>
            </div>
        </footer>
    );
};

export default Footer;
