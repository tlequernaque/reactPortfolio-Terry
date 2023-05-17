import React from "react";
import { FaLinkedin, FaGithub, FaStackOverflow } from "react-icons/fa";


export default function Footer() {
    return (
        <div>
            <footer>
                <ul className="list-group-horizontal">
                    <a href="https://github.com/tlequernaque">
                        <li>
                            <FaGithub/>
                        </li> 
                    </a>
                    <a href="https://www.linkedin.com/">
                        <li>
                            <FaLinkedin/>
                        </li>
                    </a>
                    <a href="https://stackoverflow.com/">
                        <li>
                            <FaStackOverflow/>
                        </li>
                    </a>
                </ul>  
            </footer>
        </div>
    );
}