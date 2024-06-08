import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../LibComponents/ui/card";
import { Toggle } from "../LibComponents/ui/toggle";
import TechnologyImages from './TechnologyImages';

const technologiesData = [
  { name: 'HTML', icon: TechnologyImages['HTML'] },
  { name: 'CSS', icon: TechnologyImages['CSS'] },
  { name: 'JavaScript', icon: TechnologyImages['JavaScript'] },
  { name: 'React', icon: TechnologyImages['React'] },
  { name: 'Vue.js', icon: TechnologyImages['VueJS'] },
  { name: 'Angular', icon: TechnologyImages['Angular'] },
  { name: 'Ember.js', icon: TechnologyImages['Ember.js'] },
  { name: 'Backbone', icon: TechnologyImages['Backbone'] },
  { name: 'Svelte', icon: TechnologyImages['Svelte'] },
  { name: 'Java', icon: TechnologyImages['Java'] },
  { name: 'Python', icon: TechnologyImages['Python'] },
  { name: 'Cpp', icon: TechnologyImages['Cpp'] },
  { name: 'C#', icon: TechnologyImages['C#'] },
  { name: 'Ruby', icon: TechnologyImages['Ruby'] },
  { name: 'Swift', icon: TechnologyImages['Swift'] },
  { name: 'Kotlin', icon: TechnologyImages['Kotlin'] },
  { name: 'TypeScript', icon: TechnologyImages['TypeScript'] },
  { name: 'PHP', icon: TechnologyImages['PHP'] },
  { name: 'GO', icon: TechnologyImages['GO'] },
  { name: 'Rust', icon: TechnologyImages['Rust'] },
  { name: 'MySQL', icon: TechnologyImages['MySQL'] },
  { name: 'MongoDB', icon: TechnologyImages['MongoDB'] },
  { name: 'PostgreSQL', icon: TechnologyImages['PostgreSQL'] },
  { name: 'SQLite', icon: TechnologyImages['SQLite'] },
  { name: 'Oracle Database', icon: TechnologyImages['Oracle Database'] },
  { name: 'Microsoft SQL Server', icon: TechnologyImages['Microsoft SQL Server'] },
  { name: 'Figma', icon: TechnologyImages['Figma'] },
  { name: 'Sketch', icon: TechnologyImages['Sketch'] },
  { name: 'Adobe XD', icon: TechnologyImages['Adobe XD'] },
  { name: 'InVision', icon: TechnologyImages['InVision'] },
  { name: 'Adobe Photoshop', icon: TechnologyImages['Adobe Photoshop'] },
  { name: 'Wix', icon: TechnologyImages['Wix'] },
  { name: 'Squarespace', icon: TechnologyImages['Squarespace'] },
  { name: 'WordPress', icon: TechnologyImages['WordPress'] },
  { name: 'Shopify', icon: TechnologyImages['Shopify'] },
  { name: 'Weebly', icon: TechnologyImages['Weebly'] },
  { name: 'Webflow', icon: TechnologyImages['Webflow'] },
  { name: 'Tilda', icon: TechnologyImages['Tilda'] },
  { name: 'Carrd', icon: TechnologyImages['Carrd'] },
];


const SelectTechnology = ({ technologies, setTechnologies }) => {
    const handleToggleChange = (technology) => {
        if (technologies.includes(technology)) {
            setTechnologies(technologies.filter(item => item !== technology));
        } else {
            setTechnologies([...technologies, technology]);
        }
    };

    return (
        <Card className="bg-slate-800" x-chunk="dashboard-04-chunk-2 ">
            <CardHeader>
                <CardTitle className="text-white">Choose the technologies you are proficient in</CardTitle>
                <CardDescription className="text-white">
                    Here, you should choose those technologies that you are familiar with and have used in practice
                </CardDescription>
            </CardHeader>
            <CardContent>
                {technologiesData.map((tech, index) => (
                    <Toggle
                        key={index}
                        variant="outline"
                        className="text-white mx-1 my-1"
                        onPressedChange={(pressed) => {
                            if (pressed) {
                                handleToggleChange(tech.name);

                            } else {
                                setTechnologies(technologies.filter(item => item !== tech.name));
                            }
                        }}>
                        {tech.icon}
                        {tech.name}
                    </Toggle>
                ))}
            </CardContent>
        </Card>
    );
};

export default SelectTechnology;
