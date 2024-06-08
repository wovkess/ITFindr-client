import React from 'react';
import { Flex } from '@chakra-ui/react';
import colors from '../styles/colors';
import "../styles/App.css"

const Loader = () => {
    const { midnight } = colors();
  return (

    <Flex
        width={'100%'}
        h={'100vh'}
        justify={'center'}
        align={'center'}
        backgroundColor={midnight}
    >
        <div className="boxes">
            <div className="box">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
            <div className="box">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
            <div className="box">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
            <div className="box">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    </Flex>
  );
};

export default Loader;
