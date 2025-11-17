import { StaticImageData } from 'next/image'
import Image from 'next/image'
import React from 'react'


type petCardProps = {
    title: string,
    bDay: string | Date,
    species: string,
    photo_url: string | StaticImageData
    age: number
}


function PetCard({ title, bDay, species, photo_url, age }: petCardProps) {

    const birthday = new Date(bDay)

  return (
    <div className='w-60 h-auto bg-gray-500 border border-black'>
        <Image
            src={photo_url}
            alt="Pet Image"
            className='h-60 w-60'
        />
        <div className='flex flex-col gap-1 p-1'>
            <h2>Name: {title}</h2>
            <div>B-DAY: {birthday.toDateString()}</div>
            <div>Age: {age}</div>
            <div>Species: {species}</div>
        </div>
  
    </div>
  )
}

export default PetCard