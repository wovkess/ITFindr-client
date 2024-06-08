import { Box, Button, Flex, Heading, Input, Text } from "@chakra-ui/react";
import { AlertCircle, UserRoundCheck } from "lucide-react";
import { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Alert, AlertDescription, AlertTitle } from "../LibComponents/ui/alert";
import NavSh from "../components/NavBarShorted";
import { Context } from "../index";
import '../styles/App.css';
import colors from "../styles/colors";
import { AuthRoute, HomeRoute } from "../utils/consts";
 


const RegisterPage = () => {
	const colorPallete = colors();
	const {mediumGreen, midnight, lightBlue, white} = colorPallete;
	const [showPassword, setShowPassword] = useState(false);
	const navigate = useNavigate();
	const [error, setError] = useState({});
	const [findError, setFindError] = useState(false);
	const [showWelcomeMessage, setShowWelcomeMessage] = useState(false);
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const { store } = useContext(Context);



	
	const togglePasswordVisibility = () => {
		setShowPassword(!showPassword);
	};

	const handleRegister = async(email, password) => {
		try{
			await store.registration(email, password);
			if(store.isAuth) {
				setShowWelcomeMessage(true);
				setTimeout(()=>{
					navigate(HomeRoute)
				}, 2500)
			}
		}
		catch(error){
			console.log(error)
		}
	}

	useEffect(() => {
		if (findError) {
			const timeout = setTimeout(() => {
				setFindError(false);
				setError({});
			}, 2500);
			return () => clearTimeout(timeout);
		}
	}, [findError]);

	useEffect(() => {
		const timeout = setTimeout(() => {
		  setShowWelcomeMessage(false);
		}, 2500);
		return () => clearTimeout(timeout);
	  }, [showWelcomeMessage]);


	return(
		<>
		{/* <Cursor2 /> */}
		<NavSh />
		<Flex
			justify="center"
			align="center"
			height="100vh"
			width="100vw"
			bgColor={midnight}
		>
			{/* <Cursor /> */}
			<Box // форма
				width="350px"
				height="450px"
				boxShadow="rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;"
				borderRadius="8px"
				textAlign="center"
				bg={white}
			>
				<Box
					mt="45px"
				>
					<Heading
						color={midnight}
						fontSize="30px"
						fontWeight="550"
					>
						Create account
					</Heading>
				</Box>
				<Box
					mt="80px"
				>
					<Flex
							position={"relative"}
							align={"center"}
							justify={"center"}
							mb="10px"
						>
							<svg  strokeWidth="2" className="input_icon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
								<path fill="currentColor" d="M512 512a192 192 0 1 0 0-384a192 192 0 0 0 0 384m0 64a256 256 0 1 1 0-512a256 256 0 0 1 0 512m320 320v-96a96 96 0 0 0-96-96H288a96 96 0 0 0-96 96v96a32 32 0 1 1-64 0v-96a160 160 0 0 1 160-160h448a160 160 0 0 1 160 160v96a32 32 0 1 1-64 0"/>
							</svg>
							<Input 
								placeholder="email"
								type='email'
								className='email_input'
								paddingLeft={'2.5rem'}
	
								value={email}
								onChange={e => setEmail(e.target.value)}
							/>
					</Flex>
					<Flex
							position={"relative"}
							align={"center"}
							justify={"center"}
						>
							<Link 
								className='input_icon'
								onClick={togglePasswordVisibility}

							>
								<svg strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
									<path d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" strokeLinejoin="round" strokeLinecap="round"></path>
								</svg>
							</Link>
							<Input 
								paddingLeft={'2.5rem'}
								className="pass_input" 
								placeholder="password"
								type={showPassword ? 'text' : 'password'}
          						value={password}
          						onChange={(e) => setPassword(e.target.value)}

							></Input>
					</Flex>
					</Box>
				
				<Box
					mt="50px"

				>
					<Button
						color={white}
						backgroundColor={mediumGreen}
						borderRadius="8px"
						colorScheme='teal'
						width="150px"
						id="cursorBlack"
						onClick={() => handleRegister(email, password)}
					>Sign up</Button>
					<Flex
							mt="25px"
							align={'center'}
							justify={'center'}
						>
							<Text
								mr={'5px'}
								fontSize="15px"
								color={midnight}
							>
								Don't have an account?
							</Text>
							<Link
								to={AuthRoute}
								mt="25px"
								fontSize="15px"
							>
								<Text color={lightBlue}>Login</Text>
							</Link>
						</Flex>
				</Box>
				
			</Box>
		</Flex>
		<Box position={'absolute'} bottom="30" right={'10'}>
			{showWelcomeMessage && (
				<Alert>
				<UserRoundCheck className="h-4 w-4" />
				<AlertTitle>Thanks, {store.user.email}</AlertTitle>
				<AlertDescription>
					Now you can dive into the world of our service
				</AlertDescription>
				</Alert>
			)}
			{findError && (
				<Alert variant="destructive">
				<AlertCircle className="h-4 w-4" />
					<AlertTitle>Error</AlertTitle>
					<AlertDescription>{error}</AlertDescription>
				</Alert>
			)}
		</Box>
	</>
	)
}

export default RegisterPage;