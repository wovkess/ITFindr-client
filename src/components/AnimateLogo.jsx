import React from 'react';
import { Flex } from '@chakra-ui/react';
import colors from '../styles/colors';
import Foreste from '../media/Foreste.mp4'

const AnimateLogo = () => {

    const colorPallet = colors();
    const { midnight } = colorPallet;
  return (

    <Flex
        width={'100%'}
        h={'100vh'}
        justify={'center'}
        align={'center'}
        backgroundColor={midnight}
    >
        <video loading="lazy" width={'800px'} height={'800px'} autoPlay muted loop preload="none">
            <source src={Foreste} type="video/mp4" />
        </video>
    </Flex>
  );
};

export default AnimateLogo;
