import { Link } from "react-router-dom";

export default function HeaderModule() {
    return (
        <div>
            <nav>
                <ul>
                    <li>
                        <Link to={"/"}> Inicio </Link>
                    </li>
                    <li>
                        <Link to={"/blog"}> Blog </Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
}