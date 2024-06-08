import { SquareArrowDownRight, SquareArrowUpRight } from 'lucide-react';
import { Button } from '../LibComponents/ui/button';


const SortTechnologiesButton = ({setProfiles, setSortByTechnologyCount, sortByTechnologyCount}) => {
  const handleSortByTechnologyCount = () => {
    setSortByTechnologyCount(!sortByTechnologyCount);
    setProfiles(prevProfiles => {
      return sortByTechnologyCount 
        ? prevProfiles.slice().sort((a, b) => b.technologies.length - a.technologies.length) 
        : prevProfiles.slice().sort((a, b) => a.technologies.length - b.technologies.length);
    });
  };
  return (
    <div>
      <Button className='!bg-midnight50 text-midnight' onClick={handleSortByTechnologyCount}>
      Technologies{sortByTechnologyCount
        ? <div className='flex mt-1 ml-1'><SquareArrowDownRight className='size-4' /></div>
        : <div className='flex mt-1 ml-1'><SquareArrowUpRight className='size-4' /></div>}</Button>
    </div>
  );
};

export default SortTechnologiesButton;

