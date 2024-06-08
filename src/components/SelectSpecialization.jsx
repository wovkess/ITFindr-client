import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../LibComponents/ui/card";
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "../LibComponents/ui/select";

const SelectSpecialization = ({ specialization, setSpecialization }) => {
    return (
      <Card x-chunk="dashboard-04-chunk-2">
        <CardHeader>
					<CardTitle>Select your specialization</CardTitle>
					<CardDescription>
							Please select your main profile to be displayed on your card
					</CardDescription>
        </CardHeader>
        <CardContent>
					<Select onValueChange={e => setSpecialization(e)} value={specialization}>
						<SelectTrigger className="w-[280px]">
							<SelectValue placeholder="Choose your specialty" />
						</SelectTrigger>
						<SelectContent >
							<SelectGroup>
								<SelectItem value="Frontend Developer">
									Frontend Developer
								</SelectItem>
								<SelectItem value="Backend Developer">
									Backend Developer
								</SelectItem>
								<SelectItem value="Fullstack Developer">
									Fullstack Developer
								</SelectItem>
								<SelectItem value="Android Developer">
									Android Developer
								</SelectItem>
								<SelectItem value="IOS Developer">
									IOS Developer
								</SelectItem>
								<SelectItem value="Cross-platform Developer">
									Cross-platform Developer
								</SelectItem>
								<SelectItem value="System Programmer">
									System Programmer
								</SelectItem>
								<SelectItem value="Game Developer">
									Game Developer
								</SelectItem>
								<SelectItem value="3D Artist">
									3D Artist
								</SelectItem>
								<SelectItem value="2D Artist">
									2D Artist
								</SelectItem>
								<SelectItem value="Data Analyst">
									Data Analyst
								</SelectItem>
								<SelectItem value="Machine Learning Engineer">
									Machine Learning Engineer
								</SelectItem>
								<SelectItem value="Data Scientist">
									Data Scientist
								</SelectItem>
								<SelectItem value="DevOps Engineer">
									DevOps Engineer
								</SelectItem>
								<SelectItem value="SRE Engineer">
									SRE Engineer
								</SelectItem>
								<SelectItem value="QA Engineer">
									QA Engineer
								</SelectItem>
								<SelectItem value="Automation Engineer">
									Automation Engineer
								</SelectItem>
								<SelectItem value="1C Programmer">
									1C Programmer
								</SelectItem>
								<SelectItem value="Web Analyst">
									Web Analyst
								</SelectItem>
								<SelectItem value="Blockchain Developer">
									Blockchain Developer
								</SelectItem>
								<SelectItem value="VR/AR Developer">
									VR/AR Developer
								</SelectItem>
							</SelectGroup>
						</SelectContent>
					</Select>
        </CardContent>
      </Card>
    );
};

export default SelectSpecialization;
