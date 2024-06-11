import { Box, Button} from '@chakra-ui/react';
import { getDownloadURL, ref } from 'firebase/storage';
import { DollarSign, Inbox, Phone } from 'lucide-react';
import { useContext, useEffect, useState } from 'react';
import { FaGithub, FaLinkedin, FaTelegramPlane } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { storage } from '../firebase-config';
import { Context } from '../index';
import DialogWindow from './DialogWindow';
import Loader from './Loader';
import technologyImages from './TechnologyImages';
import MessageWindow from './MessageWindow';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "src/LibComponents/ui/tooltip";


const CardItem = ({ profiles, setProfiles }) => {
  const { store } = useContext(Context);
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [technologiesList, setTechnologiesList] = useState([]);

  const TechnologyImages = ({ technologies }) => {
    return (
      <div className='flex flex-wrap w-5/6 justify-stretch'>
        {technologies.map((tech, index) => (
          <div key={index} className='mx-1'>
            {technologyImages[tech.name] || <span>{tech.name}</span>}
          </div>
        ))}
      </div>
    );
  };

  useEffect(() => {
    const fetchData = async () => {
      if (localStorage.getItem('token')) {
        const profilesData = await store.getAllProfiles();
        const usersData = await store.getAllUsers();
        const technologiesList = await store.getTechnologiesList();
        setUsers(usersData);
        setTechnologiesList(technologiesList);

        const emptyPhotoRef = ref(storage, `profile-photo/empty.webp`);
        const emptyPhotoUrl = await getDownloadURL(emptyPhotoRef);

        const loadProfilePhotos = profilesData.map(async (profile) => {
          try {
            const imageStorageRef = ref(storage, `profile-photo/${profile.photo}`);
            const url = await getDownloadURL(imageStorageRef);

            const compareTechnologies = profile.technologies.map((techId) => {
              return technologiesList.find((tech) => tech._id === techId);
            }).filter(tech => tech !== undefined);

            return { ...profile, photo: url, technologies: compareTechnologies };
          } catch (error) {
            const compareTechnologies = profile.technologies.map((techId) => {
              return technologiesList.find((tech) => tech._id === techId);
            }).filter(tech => tech !== undefined);

            return { ...profile, photo: emptyPhotoUrl, technologies: compareTechnologies };
          }
        });

        const updatedProfiles = await Promise.all(loadProfilePhotos);
        setProfiles(updatedProfiles);
      }
      setIsLoading(false);
    };

    fetchData();
  }, [store]);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <>
      {profiles.map((profile, index) => {
        const profileUser = users.find(user => user._id === profile.user);
        return (
          <div key={index} className="hover:scale-105 transition-transform duration-500 h-96 bg-white rounded-xl shadow-md overflow-hidden md:max-w-xl p-5">
            <div className="xl:flex justify-around md:flex">
              <div className="md:shrink-0">
                <div className='absolute z-10 w-5 h-5 mt-3 ml-40'>
                  {profile.country === 'Belarus' ? (
                    <img src='/flags/flag-belarus.svg' width={'25'} height="22" alt='flagBelarus' />
                  ) : (profile.country === 'Russia' ? (
                    <img src='/flags/flag-russia.svg' width={'25'} height="22" alt='flagRussia' />
                  ) : (
                    <img src='/flags/flag-kazakhstan.svg' width={'25'} height="22" alt='flagKazakhstan' />
                  ))}
                </div>
                <img className="h-54 object-cover md:h-48 md:w-48 rounded-xl" src={profile.photo} alt='photo' />
                <div className='flex items-center justify-left w-full text-slate-700 font-normal mt-1'>
                <TooltipProvider>
										<Tooltip>
											<TooltipTrigger>
                        <div className='flex items-center'><MessageWindow btn={<Inbox className='size-4' />} profileUser={profileUser} /></div>
											</TooltipTrigger>
											<TooltipContent className="text-white bg-gray-800 border-none ml-10">
												<p>Send email</p>
											</TooltipContent>
										</Tooltip>
									</TooltipProvider>
                  
                  <p className='text-sm ml-1'>{profileUser ? profileUser.email : 'Email not found'}</p>
                </div>
                
                <div className='flex items-center justify-left w-full text-slate-700 font-normal mt-1'>
                  <div className='flex items-center'><Phone className='size-4' /></div>
                  <p className='text-sm ml-1'>{profile.country === 'Belarus' ? '+375' : (profile.country === 'Russia' ? '+7' : '+7')}{profileUser ? profile.phoneNumber : 'No phone number'}</p>
                </div>
                <Box height="1px" className='flex w-full bg-slate-600 mt-1 rounded-full'></Box>{/* horizontal line */}
                <div className='flex flex-wrap items-center justify-left w-full font-normal mt-2 gap-1'>
                  <Link to={profile.LinkedInUrl}>
                    <FaLinkedin className='size-5 text-sky-600' />
                  </Link>
                  <Link to={profile.githubUrl}>
                    <FaGithub className='size-5 text-slate-900' />
                  </Link>
                  <Link to={`https://t.me/${profile.telegramUrl.slice(1)}`}>
                    <FaTelegramPlane className='size-5 text-slate-900' />
                  </Link>
                </div>
                <div className='flex mt-2 w-full'>
                  <p className='flex text-slate-700 w-full text-xl font-medium items-center'>Expectation: {profile.salary}<DollarSign className='flex size-4 mt-1' /></p>
                </div>
                <div className='flex mt-2 w-full'>
                  <DialogWindow key={index} profile={profile} tech />
                </div>
              </div>
              <div className='mt-3 w-3/5 h-min flex justify-center flex-wrap'>
                <h3 className='w-full text-center text-4xl font-bold text-slate-800'>{profile.username}</h3>
                <p className='w-full text-center mt-1 font-semibold text-slate-700'>{profile.specialization}</p>
                {(profile.technologies.length <= 6) ?
                  (<div className='flex flex-wrap mt-3 justify-center'>
                    <p className='font-medium text-orange-500 flex mt-0 ml-5'>{"<Major in />"}</p>
                    <TechnologyImages className="flex justify-center" technologies={profile.technologies} />
                  </div>) :
                  (<div className='flex flex-wrap mt-3 justify-center'>
                    <p style={{ writingMode: 'vertical-lr', transform: 'rotate(180deg)' }} className='font-medium text-orange-500 flex justify-end mt-0 ml-5'>{"<Major in />"}</p>
                    <TechnologyImages technologies={profile.technologies} />
                  </div>)
                }
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default CardItem;
