	import { Flex, Heading, Image } from '@chakra-ui/react';
import { getDownloadURL, ref } from 'firebase/storage';

import { Cloud, Copy, CreditCard, Github, LifeBuoy, LogOut, Mail, MessageSquare, PlusCircle, Settings, User, UserPlus } from "lucide-react";
import { observer } from "mobx-react-lite";
import { useContext, useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuPortal, DropdownMenuSeparator, DropdownMenuSub, DropdownMenuSubContent, DropdownMenuSubTrigger, DropdownMenuTrigger } from "src/LibComponents/ui/dropdown-menu";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "src/LibComponents/ui/tooltip";
import { Avatar } from "../LibComponents/ui/avatar";
import { storage } from '../firebase-config';
import { Context } from "../index";
import "../styles/App.css";
import { AuthRoute, HomeRoute, ProfilesRoute, UpdateProfileRoute } from "../utils/consts";

	const NavBar = () => {
		const [isActivated, setIsActivated] = useState(false);
		const [isNavbarVisible, setIsNavbarVisible] = useState(true);
		const [isScrolled, setIsScrolled] = useState(false);
		const {store} = useContext(Context);
		const prevScrollY = useRef(0);
		const location = useLocation();
		const [photo, setPhoto] = useState(null);
		const [username, setUsername] = useState('');
		const [userEmail, setUserEmail] = useState('');
		const [specialization, setSpecialization] = useState('')


		useEffect(() => {
			const handleScroll = () => {
				const currentScrollY = window.scrollY;
				const scrollDirection = currentScrollY > prevScrollY.current ? "down" : "up";
				if (scrollDirection === "down" && currentScrollY > 50) { 
					setIsNavbarVisible(false);
				} else if (scrollDirection === "up" || currentScrollY <= 50) {
					setIsNavbarVisible(true);
				}
				if(currentScrollY === 0){
					setIsScrolled(false)
				}else{
					setIsScrolled(true)
				}

				prevScrollY.current = currentScrollY;
			};

			window.addEventListener("scroll", handleScroll);

			return () => window.removeEventListener("scroll", handleScroll); 
		}, []);

		useEffect(() => {
			const scrollToSection = location.hash.substring(1);
		
			if (scrollToSection) {
				const section = document.getElementById(scrollToSection);
				if (section) {
					section.scrollIntoView({
					behavior: 'smooth',
					});
				}
			}
		}, [location]);
		
		useEffect(() => {
			const script = document.createElement('script');
			script.src = 'https://cdn.lordicon.com/lordicon.js';
			script.async = true;
			script.defer = true;
			document.body.appendChild(script);
		
			return () => {
			document.body.removeChild(script);
			};
		}, []);

		const handleCopy = () => {
			navigator.clipboard.writeText("http://foreste.vercel.app")
		};

		
		useEffect(() => {
			const fetchData = async () => {
				let url;
				if (localStorage.getItem('token')) {
					if (store.userId) {
						const profile = await store.getProfile(store.userId);
						if (profile) {
							setUsername(profile.username);
							setSpecialization(profile.specialization);

							try {
								const imageStorageRef = ref(storage,  `profile-photo/${profile.photo}`);
								url = await getDownloadURL(imageStorageRef);
								
							} catch (error) {
								console.error('Error fetching profile photo:', error);
							}
						} else {
							setUserEmail(store.userEmail);
							setSpecialization('Visitor');
						}
						setIsActivated(store.isActivated);
						if(isActivated){
							setPhoto(url);
						}else{
							const emptyPhotoRef = ref(storage, `profile-photo/empty.webp`);
        			const emptyPhotoUrl = await getDownloadURL(emptyPhotoRef);
							setPhoto(emptyPhotoUrl)
						}
					}
				}
			};
		
			fetchData();
		}, [store, store.userId, storage]);
		
	
		
	return (
			<Flex
				justifyContent='space-between'
				alignItems='center'
				borderRadius={10}
				padding='15px 7%'
				width='100%'
				position={isScrolled ? 'fixed' : 'absolute'}
				height='65px'
				id='main-head'
				className='header'
				style={{
					transition: "opacity .3s ease-in-out", 
					opacity: isNavbarVisible ? 1 : 0,
					visibility: isNavbarVisible ? 'visible' : 'hidden',
				}}
			>
				<Link 
					className='logo'
					textDecoration='none !important'
					to={`${HomeRoute}#home`}
				>
					<Heading
						color={"#fff"}
						className="heading"
					>
						{`<ITFindr `}<span className='text-orange-400'>{`/>`}</span>
					</Heading>
				</Link>
				<Flex
					placeItems={'center'}
					color='#000'
					fontSize='18px'
					fontWeight='semibold'
					gap={5}
					justifyContent='center'
					position={'relative'}
				>
					<Link className='nav-link' to={ProfilesRoute}>{'Profiles'}<span className='text-slate-400'>{` />`}</span></Link>
					<Link className='nav-link' to={`${HomeRoute}#about`}>{"About"}<span className='text-slate-400'>{` />`}</span></Link>
					<Link className='nav-link' to={`${HomeRoute}#products`}>{"Contacts"}<span className='text-slate-400'>{` />`}</span></Link>
					{store.isAuth ? 
					(
						<DropdownMenu>
							<DropdownMenuTrigger asChild>
								
								<div className="flex items-center space-x-4">
									<Avatar>
										<Image className="h-10 w-10 object-cover" src={photo} />
									</Avatar>
									<div className="space-y-2">
										<div className="h-4 w-fit text-slate-200 text-base" >{username ? username : userEmail}</div>
										<div className="h-4 w-fit text-slate-200 text-xs opacity-8" >{specialization}</div>
									</div>
								</div>
							</DropdownMenuTrigger>
							<DropdownMenuContent className="w-56">
							<DropdownMenuLabel>Hi, {username ? username : userEmail} </DropdownMenuLabel>
								<DropdownMenuSeparator />
								<DropdownMenuGroup>
								{isActivated ? (
									<TooltipProvider>
										<Tooltip>
											<TooltipTrigger>
												<DropdownMenuItem>
													<User className="mr-2 h-4 w-4" />
													<Link to={UpdateProfileRoute} >
														<span>Update profile</span>
													</Link>
												</DropdownMenuItem>
											</TooltipTrigger>
											<TooltipContent className="text-white bg-gray-800 border-none">
												<p>Here you can update your profile info</p>
											</TooltipContent>
										</Tooltip>
									</TooltipProvider>
								) : (
									<TooltipProvider>
										<Tooltip>
											<TooltipTrigger>
												<Link disabled>
													<DropdownMenuItem>
														<User className="mr-2 h-4 w-4 opacity-30" />
														<span className="opacity-30">Profile</span>
													</DropdownMenuItem>
												</Link>
											</TooltipTrigger>
											<TooltipContent className="text-white bg-gray-800 border-none">
												<p>You should activate your account to unlock this tab</p>
											</TooltipContent>
										</Tooltip>
									</TooltipProvider>
								)}
								
								<DropdownMenuItem>
									<CreditCard className="mr-2 h-4 w-4" />
									<span>Billing</span>
								</DropdownMenuItem>
								<DropdownMenuItem>
									<Settings className="mr-2 h-4 w-4" />
									<span>Settings</span>
								</DropdownMenuItem>
								</DropdownMenuGroup>
								<DropdownMenuSeparator />
								<DropdownMenuGroup>
								<DropdownMenuSub>
									<DropdownMenuSubTrigger>
									<UserPlus className="mr-2 h-4 w-4" />
									<span>Invite users</span>
									</DropdownMenuSubTrigger>
									<DropdownMenuPortal>
									<DropdownMenuSubContent>
										<TooltipProvider>
											<Tooltip>
												<TooltipTrigger>
													<Link onClick={handleCopy}>
														<DropdownMenuItem>
															<Copy className="mr-2 h-4 w-4" />
															<span>Copy URL</span>
														</DropdownMenuItem>
													</Link>
												</TooltipTrigger>
												<TooltipContent className="text-white bg-gray-800 border-none">
													<p>Copy to clipboard</p>
												</TooltipContent>
											</Tooltip>
										</TooltipProvider>
										<DropdownMenuItem>
										<Mail className="mr-2 h-4 w-4" />
										<span>Email</span>
										</DropdownMenuItem>
										<DropdownMenuItem>
										<MessageSquare className="mr-2 h-4 w-4" />
										<span>Message</span>
										</DropdownMenuItem>
										<DropdownMenuSeparator />
										<DropdownMenuItem>
											<PlusCircle className="mr-2 h-4 w-4" />
											<span>More...</span>
										</DropdownMenuItem>
									</DropdownMenuSubContent>
									</DropdownMenuPortal>
								</DropdownMenuSub>
								</DropdownMenuGroup>
								<DropdownMenuSeparator />
								<DropdownMenuItem>
								<Github className="mr-2 h-4 w-4" />
								<span>GitHub</span>
								</DropdownMenuItem>
								<DropdownMenuItem>
								<LifeBuoy className="mr-2 h-4 w-4" />
								<span>Support</span>
								</DropdownMenuItem>
								<DropdownMenuItem disabled>
								<Cloud className="mr-2 h-4 w-4" />
								<span>API</span>
								</DropdownMenuItem>
								<DropdownMenuSeparator />
								<Link onClick={() => store.logout()}>
									<DropdownMenuItem>
									<LogOut className="mr-2 h-4 w-4" />
									<span>Log out</span>
									</DropdownMenuItem>
								</Link>
							</DropdownMenuContent>
						</DropdownMenu>

					)
					
					: (
						<Link
							to={AuthRoute}
							style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
						>
							<lord-icon
								src="https://cdn.lordicon.com/kthelypq.json"
								trigger="hover"
								colors="primary:#ffffff"
								style={{ width: '30px', height: '30px' }}
							></lord-icon>
						</Link>
					)}
					
				</Flex>
			</Flex>
	)}

	export default observer(NavBar);