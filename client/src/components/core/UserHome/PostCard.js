import React, { useState } from "react";
import { SlLike } from "react-icons/sl";
import { SlShareAlt } from "react-icons/sl";
import { LiaCommentAlt } from "react-icons/lia";
import { FaRegEyeSlash } from "react-icons/fa";
import { VscAccount } from "react-icons/vsc";

const PostCard = ({ postcard }) => {
  const [show, setShow] = useState(false);
  
  function classChangeHandler() {
    setShow(!show);
  }
  return (
    <div className="mx-auto my-4 bg-white border border-gray-200 p-6 rounded-md max-w-3xl shadow-sm hover:bg-gray-100">
      <div className="items-center mb-4 flex">
        <VscAccount className="w-10 h-10 rounded-md object-cover mr-2" />
        <div className="flex flex-col w-full">
          <div className="font-bold text-lg">{postcard.heading}</div>
          <div className="text-gray-600 flex justify-between items-center">
            <div className="text-sm">{postcard.author}</div>
            <div className="flex items-center ml-4 relative">
              <p className="text-sm text-gray-500 mr-2">
                {postcard.creationDate}
                <span className="ml-1">ago</span>
              </p>
              <div className="flex cursor-pointer" onClick={classChangeHandler}>
                <svg
                  className="w-3 h-3 fill-current text-gray-400"
                  viewBox="0 0 20 20"
                >
                  <circle cx="10" cy="10" r="2" />
                </svg>
                <svg
                  className="w-3 h-3 fill-current text-gray-400"
                  viewBox="0 0 20 20"
                >
                  <circle cx="10" cy="10" r="2" />
                </svg>
                <svg
                  className="w-3 h-3 fill-current text-gray-400"
                  viewBox="0 0 20 20"
                >
                  <circle cx="10" cy="10" r="2" />
                </svg>
              </div>
              <div
                className={`border flex items-center gap-2 p-2  ${
                  show === false ? "hidden" : "absolute top-6 bg-white w-40 left-12"
                }`}
              >
                <FaRegEyeSlash />
                <p>Not Interested</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mb-6">{postcard.description}</div>
      <div className="flex items-center text-gray-600 text-sm">
        <button className="flex items-center hover:text-blue-600">
          <SlLike className="mr-1.5" />
          Like
        </button>
        <button className="flex items-center ml-4 hover:text-green-600">
          <LiaCommentAlt className="mr-1.5" />
          Comment
        </button>
        <button className="flex items-center ml-4 hover:text-indigo-600">
          <SlShareAlt className="mr-1.5" />
          Share
        </button>
      </div>
    </div>
  );
};

export default PostCard;
