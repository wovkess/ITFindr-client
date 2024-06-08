import { Flex } from "@chakra-ui/react";
import { observer } from "mobx-react-lite";
import { useContext, useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import CardItem from '../components/CardItem';
import Footer from "../components/Footer";
import Loader from '../components/Loader';
import NavHome from "../components/NavBar";
import ProfileNavigateMenu from '../components/ProfileNavigateMenu';
import ToTopButton from '../components/ToTopButton';
import { Context } from "../index";
import colors from "../styles/colors";
import { AuthRoute } from '../utils/consts';


const ProfilesPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isAuth, setIsAuth] = useState(false);
  const colorPallet = colors();
  const midnight = colorPallet.midnight;
  const { store } = useContext(Context);
  const [isAuthChecked, setIsAuthChecked] = useState(false);
  const [sortByTechnologyCount, setSortByTechnologyCount] = useState(false); 
  const [profiles, setProfiles] = useState([]);
  const [filteredProfiles, setFilteredProfiles] = useState([]); 




  useEffect(() => {
    const fetchData = async () => {
      if (localStorage.getItem('token')) {
        await store.checkAuth();
        setIsAuth(store.isAuth);
      } else {
        setIsAuth(false);
      }
      setIsAuthChecked(true);
    };
    fetchData();
  }, [store]);

  if(!isAuthChecked){
    return <Loader />
  }

  if (!isAuth) {
    return (
      <>
        {/* <Cursor2 /> */}
        <main className="grid h-screen place-items-center bg-midnight px-6 py-24 sm:py-32 lg:px-8">
              <div className='flex flex-wrap items-center justify-center w-2/6 h-20'>
                <p className="text-3xl font-semibold text-midnight50">401</p>
                <div className='w-0.5 h-12 bg-midnight50 mx-7'></div>
                <h1 className="text-xl font-semibold text-midnight50 sm:text-2xl">User not authorized</h1>
                <p className="flex justify-center mt-6 w-full text-midnight400">Sorry, we couldn’t load the page, cause you are not authorized</p>
                <Link to={AuthRoute} className='text-midnight50 transition ease-in-out delay-550 hover:underline underline-offset-4'>Login</Link>
              </div>
              
        </main>
      </>
    )
  }

  return (
    <>
      {/* <Cursor2 /> */}
      <Flex
        width="100%"
        backgroundColor={midnight}
        justify="center"
        className="flex-wrap"
        minHeight="100vh"
      >
        <NavHome />
        <ProfileNavigateMenu profiles={profiles} setProfiles={setProfiles} setSortByTechnologyCount={setSortByTechnologyCount} sortByTechnologyCount={sortByTechnologyCount} setFilteredProfiles={setFilteredProfiles} filteredProfiles={filteredProfiles}/>
        <div className='flex mt-14 w-10/12 flex-wrap gap-8 justify-center'>
          <CardItem setProfiles={setProfiles} profiles={filteredProfiles} />
        </div>
        <Flex className = 'bottom-0 h-fit w-full justify-center'>
          <Footer />
          <ToTopButton />
        </Flex>
      </Flex>
    </>
  );
};

export default observer(ProfilesPage);
