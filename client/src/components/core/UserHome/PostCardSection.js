import React from 'react';
import PostCard from './PostCard';
import assestsData from '../../../assests/data/data.json';

const PostCardSection = () => {
  const postCards = assestsData.postcards;

  return (
    <div className='mx-auto '>
      {postCards.map((postcard) => (
        <PostCard key={postcard.id} postcard={postcard} />
      ))}
    </div>
  );
};

export default PostCardSection;
