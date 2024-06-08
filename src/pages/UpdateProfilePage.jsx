import { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import Loader from '../components/Loader';
import NavBar from '../components/NavBar';
import NotFoundPage from '../components/NotFoundPage';
import SelectSpecialization from '../components/SelectSpecialization';
import SelectTechnology from '../components/SelectTechnology';
import { Context } from '../index';

import { Box, Flex, InputGroup, InputLeftAddon, InputLeftElement, useToast } from "@chakra-ui/react";
import { Alert, AlertDescription, AlertTitle } from "../LibComponents/ui/alert";
import { Button } from "../LibComponents/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../LibComponents/ui/card";
import { Input } from "../LibComponents/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../LibComponents/ui/select";
import { Textarea } from "../LibComponents/ui/textarea";

import { AlertCircle, DollarSign, UserCog } from "lucide-react";
import colors from '../styles/colors';

const UpdateProfilePage = () => {
    const { midnight, white } = colors();
    const { store } = useContext(Context);
    const [isActivate, setIsActivate] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [showMessage, setShowMessage] = useState(false);
    const toast = useToast();

    const [profileData, setProfileData] = useState({
        userId: '',
        firstName: '',
        lastName: '',
        username: '',
        about: '',
        experience: '',
        country: '',
        birthDate: '',
        salary: '',
        phoneNumber: '',
        telegramUrl: '',
        githubUrl: '',
        LinkedInUrl: '',
        specialization: '',
        technologies: [],
        photo: null,
    });

    const initialData = { ...profileData };

    useEffect(() => {
        const fetchData = async () => {
            if (localStorage.getItem('token')) {
                await store.checkAuth();
                setIsActivate(store.isActivated);
                if (store.userId) {
                    setProfileData(prevProfileData => ({ ...prevProfileData, userId: store.userId }));
                }
            }
            setIsLoading(false);
        };

        fetchData();
    }, [store]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setProfileData(prevProfileData => ({ ...prevProfileData, [name]: value }));
    };

    const handleFileChange = (event) => {
        const selectedFile = event.target.files[0];
        if (selectedFile) {
            setProfileData(prevProfileData => ({ ...prevProfileData, photo: selectedFile }));
        }
    };

    const handleUpdateProfile = async () => {
        try {
            console.log(profileData)
            await store.updateProfile(profileData);
            toast({
                title: 'Profile updated',
                description: "You have successfully updated your profile information",
                status: 'success',
                duration: 2000,
                isClosable: true,
            });
        } catch (e) {
            console.log(e);
        }
    };

    if (isLoading) {
        return <Loader />;
    }

    return (
        <>
            {isActivate ? (
                <Flex 
                    w={'100%'}
                    bg={midnight}
                    flexWrap={'wrap'}
                    justify={'center'}
                >
                    <NavBar />
                    <Flex
                        width={"85%"}
                        mt={'5%'}
                    >
                        <main style={{backgroundColor: white}} className="flex min-h-[calc(100vh_-_theme(spacing.16))] flex-1 flex-col gap-4 bg-muted/40 p-4 md:gap-8 md:p-10 rounded-xl">
                            <div className="mx-auto grid w-full max-w-6xl gap-2 mt-5">
                                <h1 className="text-4xl font-semibold">Settings</h1>
                            </div>
                            <div className="mx-auto grid w-full max-w-6xl items-start gap-6 md:grid-cols-[180px_1fr] lg:grid-cols-[250px_1fr]">
                                <nav className="grid gap-4 text-sm text-muted-foreground">
                                    <Flex align={'center'}>
                                        <UserCog className='size-5 mr-1 text-justify text-slate-500' />
                                        <Link href="" className="text-lg font-semibold text-primary text-slate-500">UpdateProfile</Link>
                                    </Flex>
                                </nav>
                                <div className="grid gap-6">
                                    <Card>
                                        <CardHeader>
                                            <CardTitle>First and last name</CardTitle>
                                            <CardDescription>
                                                Enter your surname and name
                                            </CardDescription>
                                        </CardHeader>
                                        <CardContent>
                                            <form>
                                                <Input 
                                                    name="firstName"
                                                    placeholder="Surname"
                                                    onChange={handleInputChange}
                                                    value={profileData.firstName}
                                                />
                                                <Input 
                                                    className='mt-3'
                                                    name="lastName"
                                                    placeholder="Name"
                                                    onChange={handleInputChange}
                                                    value={profileData.lastName}
                                                />
                                            </form>
                                        </CardContent>
                                    </Card>
                                    <Card>
                                        <CardHeader>
                                            <CardTitle>Username</CardTitle>
                                            <CardDescription>
                                                Enter your new username, which will be publicly accessible
                                            </CardDescription>
                                        </CardHeader>
                                        <CardContent>
                                            <form>
                                                <Input 
                                                    name="username"
                                                    placeholder="Username"
                                                    onChange={handleInputChange}
                                                    value={profileData.username}
                                                />
                                            </form>
                                        </CardContent>
                                    </Card>
                                    <Card>
                                        <CardHeader>
                                            <CardTitle>Photo</CardTitle>
                                            <CardDescription>
                                                Here you can load your avatar
                                            </CardDescription>
                                        </CardHeader>
                                        <CardContent>
                                            <form>
                                                <Input 
                                                    type='file'
                                                    name="photo"
                                                    placeholder="Photo"
                                                    onChange={handleFileChange}
                                                />
                                            </form>
                                        </CardContent>
                                    </Card>
                                    <Card>
                                        <CardHeader>
                                            <CardTitle>About</CardTitle>
                                            <CardDescription>
                                                Please share your strengths and advantages as a professional
                                            </CardDescription>
                                        </CardHeader>
                                        <CardContent>
                                            <Textarea 
                                                name="about"
                                                placeholder="Type your message here."
                                                onChange={handleInputChange}
                                                value={profileData.about}
                                            />
                                        </CardContent>
                                    </Card>
                                    <Card>
                                        <CardHeader>
                                            <CardTitle>Experience</CardTitle>
                                            <CardDescription>
                                                Please share your work experience
                                            </CardDescription>
                                        </CardHeader>
                                        <CardContent>
                                            <Textarea 
                                                name="experience"
                                                placeholder="If you have no work experience, describe your experience in your own projects, what challenges you faced and how you solved them"
                                                onChange={handleInputChange}
                                                value={profileData.experience}
                                            />
                                        </CardContent>
                                    </Card>
                                    <Card>
                                        <CardHeader>
                                            <CardTitle>Country</CardTitle>
                                            <CardDescription>
                                                Please select your country
                                            </CardDescription>
                                        </CardHeader>
                                        <CardContent>
                                            <Select 
                                                name="country" 
                                                onValueChange={value => setProfileData(prevProfileData => ({ ...prevProfileData, country: value }))} 
                                                value={profileData.country}
                                            >
                                                <SelectTrigger className="w-[280px]">
                                                    <SelectValue placeholder="Select your country" />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    <SelectItem value="Belarus">Belarus</SelectItem>
                                                    <SelectItem value="Russia">Russia</SelectItem>
                                                    <SelectItem value="Kazakhstan">Kazakhstan</SelectItem>
                                                </SelectContent>
                                            </Select>
                                        </CardContent>
                                    </Card>
                                    <Card>
                                        <CardHeader>
                                            <CardTitle>Date of birth</CardTitle>
                                            <CardDescription>
                                                Please enter your date of birth so we can verify your age
                                            </CardDescription>
                                        </CardHeader>
                                        <CardContent>
                                            <Input 
                                                name="birthDate"
                                                placeholder='Select Date and Time' 
                                                size='md' 
                                                type='date' 
                                                onChange={handleInputChange}
                                                value={profileData.birthDate}
                                            />
                                        </CardContent>
                                    </Card>
                                    <Card>
                                        <CardHeader>
                                            <CardTitle>Salary</CardTitle>
                                            <CardDescription>
                                                Enter your salary expectations so that the employer can understand what salary you are willing to start with
                                            </CardDescription>
                                        </CardHeader>
                                        <CardContent>
                                            <InputGroup>
                                                <InputLeftElement pointerEvents='none' className='text-slate-600' fontSize='1.2em'>
                                                    <DollarSign className='size-4' />
                                                </InputLeftElement>
                                                <Input 
                                                    name="salary"
                                                    className='px-10' 
                                                    placeholder="Salary expectations" 
                                                    type="number" 
                                                    onChange={handleInputChange} 
                                                    value={profileData.salary}
                                                />
                                            </InputGroup>
                                        </CardContent>
                                    </Card>
                                    <Card>
                                        <CardHeader>
                                            <CardTitle>Phone</CardTitle>
                                            <CardDescription>
                                                Enter your personal phone number so that the employer can contact you to more specifically discuss your next course of action
                                            </CardDescription>
                                        </CardHeader>
                                        <CardContent>
                                            <InputGroup>
                                                {profileData.country === 'Belarus' ? (
                                                    <InputLeftAddon className='!bg-gray-100 !text-slate-800'>+375</InputLeftAddon>
                                                ) : (profileData.country === 'Russia' ? (
                                                    <InputLeftAddon>+7</InputLeftAddon>
                                                ) : (
                                                    <InputLeftAddon>+7</InputLeftAddon>
                                                ))}
                                                <Input 
                                                    name="phoneNumber"
                                                    className='px-10' 
                                                    placeholder="Phone number" 
                                                    type="text" 
                                                    onChange={handleInputChange} 
                                                    value={profileData.phoneNumber}
                                                />
                                            </InputGroup>
                                        </CardContent>
                                    </Card>
                                    <Card>
                                        <CardHeader>
                                            <CardTitle>Telegram</CardTitle>
                                            <CardDescription>
                                                Enter your username in telegram
                                            </CardDescription>
                                        </CardHeader>
                                        <CardContent>
                                            <Input 
                                                name="telegramUrl"
                                                placeholder="@username" 
                                                type="text" 
                                                onChange={handleInputChange} 
                                                value={profileData.telegramUrl}
                                            />
                                        </CardContent>
                                    </Card>
                                    <Card>
                                        <CardHeader>
                                            <CardTitle>Github</CardTitle>
                                            <CardDescription>
                                                Enter a link to your github
                                            </CardDescription>
                                        </CardHeader>
                                        <CardContent>
                                            <Input 
                                                name="githubUrl"
                                                placeholder="Github" 
                                                type="text" 
                                                onChange={handleInputChange} 
                                                value={profileData.githubUrl}
                                            />
                                        </CardContent>
                                    </Card>
                                    <Card>
                                        <CardHeader>
                                            <CardTitle>LinkedIn</CardTitle>
                                            <CardDescription>
                                                Enter a link to your linkedIn
                                            </CardDescription>
                                        </CardHeader>
                                        <CardContent>
                                            <Input 
                                                name="LinkedInUrl"
                                                placeholder="LinkedIn" 
                                                type="text" 
                                                onChange={handleInputChange} 
                                                value={profileData.LinkedInUrl}
                                            />
                                        </CardContent>
                                    </Card>
                                    <SelectSpecialization 
                                        specialization={profileData.specialization} 
                                        setSpecialization={value => setProfileData(prevProfileData => ({ ...prevProfileData, specialization: value }))}
                                    />
                                    <SelectTechnology 
                                        technologies={profileData.technologies} 
                                        setTechnologies={value => setProfileData(prevProfileData => ({ ...prevProfileData, technologies: value }))}
                                    />
                                    <Button 
                                        onClick={handleUpdateProfile} 
                                        className="w-52"
                                    >
                                        Save
                                    </Button>
                                </div>
                            </div>
                        </main>
                    </Flex>
                    <Flex className='w-full justify-center'>
                        <Footer />
                    </Flex>
                </Flex>
            ) : (
                <NotFoundPage />
            )}
            {showMessage && (
                <Box position={'absolute'} bottom="30" right={'10'}>
                    <Alert variant="destructive">
                        <AlertCircle className="h-4 w-4" />
                        <AlertTitle>Info</AlertTitle>
                        <AlertDescription>Your profile changed</AlertDescription>
                    </Alert>
                </Box>
            )}
        </>
    );
};

export default UpdateProfilePage;
