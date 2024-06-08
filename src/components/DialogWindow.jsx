import { DollarSign, Map, Phone } from 'lucide-react';
import React from 'react';
import { Button } from "../LibComponents/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../LibComponents/ui/dialog";
import PDFDownloadButton from './PDFDownloadButton/PDFDownloadButton';

export default function DialogWindow({ profile }) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className='px-10 bg-slate-500'>Show all</Button>
      </DialogTrigger>
      <DialogContent className="md:max-w-[985px] h-[75%] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Information</DialogTitle>
          <DialogDescription>
            Here you can see detailed information
          </DialogDescription>
        </DialogHeader>
        <div className="max-w-7/12 flex mt-5"> {/* profile data */}
          <div className="max-w-7/12 flex flex-wrap">
            <div className="flex justify-between w-full">
              <img className="h-48 object-cover md:h-56 md:w-60 rounded-xl" src={profile.photo} alt='Loading Error' />
              <div className='flex flex-wrap justify-center h-fit w-full'>
                <div className='flex w-full justify-center font-bold text-midnight900 text-4xl'>
                  <p className="mx-0.5">{profile.firstName}</p>
                  <p className="mx-0.5">{profile.lastName}</p>
                </div>
                <p className='w-full text-center text-cyan-700 text-xl mt-1'>{profile.specialization}</p>
                <div className="mt-3 w-full text-center text-lg">
                  <p className="font-semibold text-midnight900">Contact details</p>
                  <div className='flex items-center justify-center w-full text-slate-700 font-normal mt-1'>
                    <div className='flex items-center'><Phone className='size-4' /></div>
                    <p className='text-sm ml-1'>{profile.country === 'Belarus' ? '+375' : (profile.country === 'Russia' ? '+7' : '+7')}{profile.phoneNumber}</p>
                  </div>
                </div>
                <div className="flex flex-wrap justify-center items-center mt-3 w-full text-lg">
                  <p className="font-semibold text-midnight900 text-center"><Map /></p>
                  <span className='ml-0.5'>{profile.country}</span>
                </div>
              </div>
            </div>
            <div className='w-10/12 mt-4'>
              <div className='w-[700px]'>
                <p className='text-emerald-600 text-lg font-semibold'>{'About '}<span className='text-orange-500'>{'{'}</span></p>
                <p className='ml-5 text-cyan-700 whitespace-normal'>{profile.about}</p>
                <p className='text-orange-500 text-lg font-semibold'>{'}'}</p>
              </div>
            </div>
            <div className='w-10/12 mt-4'>
              <div className='w-[700px]'>
                <p className='text-emerald-600 text-lg font-semibold'>{'WorkExperience '}<span className='text-orange-500'>{'{'}</span></p>
                <p className='ml-5 text-cyan-700'>{profile.experience}</p>
                <p className='text-orange-500 text-lg font-semibold'>{'}'}</p>
              </div>
            </div>
            <div className='w-10/12 mt-4'>
              <div className='text-midnight600'>
                <p className='text-emerald-600 font-semibold mb-1 text-lg'>Technologies <span className='text-sky-500'>= [</span></p>
                <p className='ml-5'>
                  {profile.technologies.map((tech, index) => (
                    <React.Fragment key={index}>
                      <code className='text-cyan-700'>{tech.name}</code>
                      {index !== profile.technologies.length - 1 && <span>, </span>}
                    </React.Fragment>
                  ))}
                </p>
                <p className='font-semibold mb-1 text-sky-500 text-lg'>]</p>
              </div>
              <div className='w-10/12 mt-4'>
                <p className='flex text-midnight600 w-full text-xl font-medium items-center mb-3'>
                  Salary expectation: <span className='flex items-center ml-1 text-midnight700'>{profile.salary}<DollarSign className='flex size-4 mt-2' /></span>
                </p>
                <PDFDownloadButton profile={profile} />
              </div>
            </div>
          </div>
        </div>
        <DialogFooter>
          <DialogClose asChild>
            <Button type="button" variant="destructive">
              Close
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
