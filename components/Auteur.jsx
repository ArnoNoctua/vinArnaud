import React from 'react'
import Image from 'next/image'

const Auteur = ({ auteur }) => {
  return (
    <div className="text-center mt-20 mb-8 p-12 relative rounded-lg bg-black bg-opacity-50">
      <div className="absolute left-0 right-0 -top-14">
      <Image
        alt={auteur.name}
        unoptimized
        height="100px"
        width="100px"
        className="align-middle rounded-full"
        src={auteur.photo.url}
      />
      </div>
      <h3 className='text-white my-4 text-xl font-bold'>{auteur.nom}</h3>
      <p className='text-white text-lg'>{auteur.bio}</p>
  </div>
  )
}

export default Auteur