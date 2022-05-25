import React, { useState, useEffect } from 'react'
import Link from 'next/Link'

import { getCategories } from '../services'

const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories().then((newCategories) => {
      setCategories(newCategories);
    });
  }, []);

  return (
    <div className="bg-white shadow-lg rounded-lg p-8 pb-12 mb-8">
      <h3 className="text-xl mb-8 font-semibold border-b pb-4">
      Catégories
      </h3>
      {categories.map((categorie, index) => (
        <Link key={index} href={`/categorie/${categorie.slug}`}>
          <span className={`cursor-pointer block ${(index === categories.length - 1) ? 'border-b-0' : 'border-b'} pb-3 mb-3`}>{categorie.nom}</span>
        </Link>
      ))}
    </div>
  )
}

export default Categories