import React from "react";
import { FaLinkedin, FaGithub, FaStackOverflow } from "react-icons/fa";


export default function Footer() {
    return (
        <div>
            <footer>
                <ul class="list-group list-group-horizontal">
                    <a href="https://github.com/tlequernaque">
                        <FaGithub className="m-3" size={42}/>
                    </a>
                    <a href="https://www.linkedin.com/">
                        <FaLinkedin className="m-3" size={42}/>
                    </a>
                    <a href="https://stackoverflow.com/">
                        <FaStackOverflow className="m-3" size={42}/>
                    </a>
                </ul>  
            </footer>
        </div>
    );
}