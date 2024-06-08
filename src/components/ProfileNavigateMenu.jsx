import "../styles/App.css";
import FilterProfiles from './FilterProfiles';
import SortButton from './SortButton';
import SortTechnologiesButton from './SortTechnologiesButton';

const ProfileNavigateMenu = ({ profiles, setProfiles, setSortByTechnologyCount, sortByTechnologyCount, setFilteredProfiles, filteredProfiles  }) => {


  return (
    <div className='flex justify-center items-center bg-midnight900 w-full h-16 mt-20 rounded-md'>
      <nav className='flex w-4/5 justify-end gap-5'>
        <FilterProfiles profiles={profiles} setFilteredProfiles ={ setFilteredProfiles } filteredProfiles={filteredProfiles} />
        <SortButton profiles={profiles} setProfiles={setProfiles}/>
        <SortTechnologiesButton setProfiles={setProfiles} setSortByTechnologyCount={setSortByTechnologyCount} sortByTechnologyCount={sortByTechnologyCount} />
      </nav>
      
    </div>
  );
};

export default ProfileNavigateMenu;
