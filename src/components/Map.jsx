import { Instagram, Mail, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
const Map = () => {
  return (
    <div className='flex w-full justify-center'>
      <div>
        <p className='w-full text-white font-bold mr-10 mt-16 text-4xl'>Our office located here</p>
        <p className='text-gray-400 font-medium mr-10 mt-1 text-2xl'>Belarus, Brest, st. Sovetskaya 3</p>
        <p className='text-gray-500 font-medium mr-10 mt-5 text-xl flex items-center'><Phone className='mr-2 size-6 text-orange-400' /> +375333564563</p>
        <p className='text-gray-500 font-medium mr-10 mt-1 text-xl flex items-center'><Mail className='mr-2 size-6 text-blue-400' /> forestedev@mail.ru</p>
        <p className='text-gray-500 font-medium mr-10 mt-1 text-xl flex items-center'><Instagram className='mr-2 size-6 text-purple-500' /> <Link to={'https://www.instagram.com/wovkess/'}>Instagram</Link></p>
      </div>
      <iframe className='rounded-xl' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2450.982384453669!2d23.683989076165506!3d52.098252167369466!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47210be5d3c05aa9%3A0x3020e0b3069b7397!2sVulica%20Saveckaja%203%2C%20Brest%2C%20Brest%20Region!5e0!3m2!1sen!2sby!4v1717404382375!5m2!1sen!2sby" width="750px" height="450px" referrerpolicy="no-referrer-when-downgrade" />
    </div>
  );
};

export default Map;
