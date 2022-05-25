import React, { useState, useEffect } from 'react'
import moment from 'moment';
import Link from 'next/link';
import { getSimilarPosts, getRecentPosts } from '../services';

const PostWidget = ({categories, slug}) => {
  const [relatedPosts, setRelatedPosts] = useState([]);

  useEffect(() => {
    if (slug) {
      getSimilarPosts(categories, slug).then((result) => {
        setRelatedPosts(result);
      });
    } else {
      getRecentPosts().then((result) => {
        setRelatedPosts(result);
      });
    }
  }, [slug]);

  return (
    <div className="bg-white shadow-lg rounded-lg p-8 pb-12 mb-8">
      <h3 className="text-xl mb-8 font-semibold border-b pb-4">{slug ? 'Avis Récents' : 'Avis Récents'}</h3>
      {relatedPosts.map((post) => (
        <div key={post.titre} className="flex items-center w-full mb-4">
          <div>
            <img alt=""
            height="60px"
            width="60px"
            className="align-middle rounded-full"
            src={post.photoVin.url}
            />
          </div>
          <div className="flex-grow ml-4">
            <p className="text-gray-500 font-xs">{moment(post.createdAt).format('MMM DD, YYYY')}</p>
            <Link href={`/post/${post.slug}`} className="text-md" key={post.titre}>{post.titre}</Link>
          </div>
        </div>
      ))}
    </div>
  )
}

export default PostWidget