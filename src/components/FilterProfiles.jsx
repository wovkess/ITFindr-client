import { useEffect, useState } from 'react';

const FilterProfiles = ({ profiles, setFilteredProfiles, filteredProfiles }) => {
  const [inputValue, setInputValue] = useState('');
  const [isOpen, setIsOpen] = useState(true);

  useEffect(() => {
    const filterProfiles = profiles.filter(profile => {
      const specialization = profile.specialization ? profile.specialization.toLowerCase() : '';
      const username = profile.username ? profile.username.toLowerCase() : '';
      const salary = profile.salary ? profile.salary.toString().toLowerCase() : '';
      const technologies = profile.technologies ? profile.technologies.join(' ').toLowerCase() : '';
      const country = profile.country ? profile.country.toLowerCase() : '';

      return specialization.includes(inputValue.toLowerCase()) ||
        username.includes(inputValue.toLowerCase()) ||
        salary.includes(inputValue.toLowerCase()) ||
        technologies.includes(inputValue.toLowerCase()) ||
        country.includes(inputValue.toLowerCase());
    });
    setFilteredProfiles(filterProfiles);
  }, [profiles, inputValue, setFilteredProfiles]);

  const itemClickHandler = (e) => {
    setInputValue(e.target.textContent);
    setIsOpen(false);
  };

  const inputClickHandler = () => {
    setIsOpen(true);
  };

  return (
    <div>
      <div className="relative z-50 inputGroup" id="cursorBlack">
        <svg id="cursorBlack" fill="#000000" className="searchIcon" viewBox="0 0 1920 1920" xmlns="http://www.w3.org/2000/svg">
          <path d="M790.588 1468.235c-373.722 0-677.647-303.924-677.647-677.647 0-373.722 303.925-677.647 677.647-677.647 373.723 0 677.647 303.925 677.647 677.647 0 373.723-303.924 677.647-677.647 677.647Zm596.781-160.715c120.396-138.692 193.807-319.285 193.807-516.932C1581.176 354.748 1226.428 0 790.588 0S0 354.748 0 790.588s354.748 790.588 790.588 790.588c197.647 0 378.24-73.411 516.932-193.807l516.028 516.142 79.963-79.963-516.142-516.028Z" fillRule="evenodd"></path>
        </svg>
        <input
          id="cursorBlack"
          type="text"
          placeholder="Search"
          className="inputSearch"
          value={inputValue}
          onChange={e => setInputValue(e.target.value)}
          onClick={inputClickHandler}
        />
        {inputValue && isOpen && (
          <ul className="absolute left-0 top-9 rounded-sm bg-midnight50 w-full text-black p-0 m-0 z-50 max-h-[250px] h-auto overflow-auto">
            {filteredProfiles.map((profile, index) => (
              <li className="p-2.5 hover:bg-slate-300 hover:cursor-pointer" key={index} onClick={itemClickHandler}>
                {profile.specialization}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default FilterProfiles;
