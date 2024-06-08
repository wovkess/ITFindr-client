import {
    Flex,
} from "@chakra-ui/react";

import { Link } from "react-router-dom";
import "../styles/App.css";


function Footer(){
    return(
        <Flex className="h-fit w-fit mt-20 mb-10" gap={6}>
            <Link className="f-link">ITFindr&copy; 2024</Link>
            <Link className="f-link">Privacy & Legal</Link>
            <Link className="f-link">News</Link>
            <Link className="f-link">Contacts</Link>
        </Flex>
    );
};


export default Footer;



