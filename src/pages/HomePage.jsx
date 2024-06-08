import { Box, Flex, Text } from "@chakra-ui/react";
import { useGSAP } from "@gsap/react";
import gsap from 'gsap';
import { observer } from 'mobx-react-lite';
import { useContext, useEffect, useState } from 'react';
import AboutItems from '../components/AboutItems';
import Footer from "../components/Footer";
import IntroVideo from "../components/IntroVideo";
import Loader from '../components/Loader';
import Map from '../components/Map';
import NavBar from "../components/NavBar";
import ToTopButton from "../components/ToTopButton";
import { Context } from '../index';
import colors from "../styles/colors";


const HomePage = () =>{
    const [isLoading,setIsLoading] = useState(true);
    const {store} = useContext(Context);
    const {midnight, white} = colors();

    useEffect(()=>{
        const checkAuth = async () => {
            if(localStorage.getItem('token')){
                await store.checkAuth();
            }
            setIsLoading();
        }
        checkAuth();
    }, [store, store.isAuth]);

    useGSAP(() => {
        if (!isLoading) {
            gsap.from("#h3-welcome", { x: 300, y: -10, scale: 1.2, duration: 1.5, opacity: 0.2 });
            gsap.from("#p-welcome", { x: -200, y: 10, scale: 1.2, duration: 2, opacity: 0.2 });
            // gsap.from("#arrowBox", { y: 10, duration: 2, opacity: 0.2 });
            gsap.from('#developText', {
                scrollTrigger: {
                    trigger: '#p-welcome',
                    start: 'top top',
                    scrub: true,
                }, 
                x: 500,
                duration: 1
            });
        }

    }, [isLoading]);


    if(isLoading){
        return <Loader />
    }
    
    return(
        <>  
            <>
            {/* <Cursor2 /> */}
            <Box
            >

                <Flex>
                    <NavBar />
                </Flex>
                <Flex
                    justify="center"
                    align="center"
                    className="main"
                    zIndex="-1"
                    id="home"
                    flexWrap={'wrap'}
                    bg={'black'}
                >

                    <IntroVideo />
                    <Flex
                        color="#fff"
                        zIndex='0'
                        className="welcome_header"
                        fontWeight={"bold"}
                        fontSize={"60px"}
                        w={'100%'}
                        flexWrap={'wrap'}
                        justify={'center'}
                        marginBottom={'90px'}

                    >
                        <h3 id="h3-welcome">The start of opportunity</h3>
                        <p id="p-welcome" className="font-medium  text-4xl text-gray-800 w-full text-center" >scroll down to learn more about us</p>
                    </Flex>
                    <Box id='arrowBox'>
                        <div className="arrow arrow-first"></div>
                        <div className="arrow arrow-second"></div>
                    </Box>
                </Flex>
                <Flex
                    flexWrap={'wrap'}
                    height={'100vh'}
                    backgroundColor={midnight}
                    justify={'center'}
                    id="about"
                >

                        <Text
                            color={'white'}
                            fontSize={'50px'}
                            mt={'2%'}
                            h={'fit-content'}
                            id='developText'   
                        ><code>{`<We develop for developers />`}</code>
                        </Text>
                            <Flex w={'80%'} h={'75%'} justify={"center"} gap={5} flexWrap={'wrap'}>
                            <Flex h={'50%'} gap={7} justify={"center"} align={"center"} flexWrap={'wrap'}>
                        <AboutItems />
                    </Flex>
                </Flex>
                </Flex>  
                <Flex
                    flexWrap={'wrap'}
                    height={'100vh'}
                    backgroundColor={midnight}
                    justify={'center'}
                    id="products"
                >
                    <Flex className='w-9/12 h-96 mt-14 justify-center'>
                        <Map />
                    </Flex>
                    <Flex className="absolute bottom-0">
                        <Footer />
                    </Flex>
                    <ToTopButton />
                </Flex>
            </Box>
            </>
        </>
    )
} 
export default observer(HomePage);