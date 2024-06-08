// SortButton.js
import { Button } from '@chakra-ui/react';
import { ArrowDown, ArrowUp } from 'lucide-react';
import { useState } from 'react';
const SortButton = ({ profiles, setProfiles }) => {
  const [sortOrder, setSortOrder] = useState("asc");

  const sortBySalary = () => {
    const sortedProfiles = [...profiles].sort((a, b) => {
      if (sortOrder === "asc") {
        return a.salary - b.salary;
      } else {
        return b.salary - a.salary;
      }
    });
    setProfiles(sortedProfiles);
    setSortOrder(sortOrder === "asc" ? "desc" : "asc");
  };

  return (
    <Button className='!bg-midnight50' onClick={sortBySalary}>
      Salary{sortOrder === 'asc' 
        ? <div className='flex mt-1 ml-0.5'><ArrowDown className='size-4' /></div>
        : <div className='flex mt-1 ml-0.5'><ArrowUp className='size-4' /></div>}
    </Button>
  );
};

export default SortButton;
