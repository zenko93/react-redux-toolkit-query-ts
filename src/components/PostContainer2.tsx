import React, { useEffect, useState } from "react";
import { postAPI } from "../services/PostService";
import PostItem from "./PostItem";

const PostContainer = () => {
  const { data: posts, error, isLoading } = postAPI.useFetchAllPostsQuery(10);

  return (
    <div>
      <div className="post__list">
        {isLoading && <h1>Loading...</h1>}
        {error && <h1>Error</h1>}
        {/*{posts &&*/}
        {/*  posts.map((post) => {*/}
        {/*    return <PostItem key={post.id} post={post} />;*/}
        {/*  })}*/}
      </div>
    </div>
  );
};

export default PostContainer;
