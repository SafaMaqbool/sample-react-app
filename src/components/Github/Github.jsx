import React from "react";
import { useLoaderData } from "react-router-dom";

function Github() {
  const data = useLoaderData();

  return (
    <div className="text-center m-4 bg-gray-600 text-white p-4 rounded-lg shadow-md">
      {/* Followers Section */}
      <h1 className="text-3xl sm:text-4xl font-semibold mb-4">
        Github followers: {data.followers}
      </h1>
      {/* Flex Container for Avatar and Bio */}
      <div className="flex flex-col sm:flex-row gap-8 justify-center items-center sm:gap-16">
        {/* Avatar Section */}
        <div className="w-full sm:w-1/3">
          <img
            src={data.avatar_url}
            alt="GitHub Avatar"
            className="rounded-full mx-auto sm:w-80 sm:h-80 w-48 h-48 object-cover"
          />
        </div>
        {/* Bio Section */}
        <div className="w-full sm:w-2/3">
          <p className="mt-5 text-left text-sm sm:text-base">{data.bio}</p>
        </div>
      </div>
    </div>
  );
}

export default Github;

export const githubInfoLoader = async () => {
  const response = await fetch("https://api.github.com/users/SafaMaqbool");
  return response.json();
};
