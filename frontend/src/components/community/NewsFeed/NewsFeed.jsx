// src/components/NewsFeed/NewsFeed.js
import React from "react";
import NewsFeedItem from "./NewsFeedItem";
import "../../../components-css/Community/NewsFeed.css";
import WritePost from "../WritePost/WritePost";
import { useNewsFeedContext } from "../../../context/NewsFeedContext";
import { PostProvider } from "../../../context/PostContext";
import { getAvatar } from "../../../utils/tools";

function NewsFeed() {
  const newsFeedList = useNewsFeedContext().newsFeedList;
  if (!Array.isArray(newsFeedList)) {
    return <div>No posts available</div>;
  }

  return (
    <div>
      <WritePost />
      <div className="tw-mt-5 tw-flex tw-flex-col tw-justify-center tw-items-center tw-gap-5 tw-font-lato news-feed ">
        {newsFeedList.length === 0 ? (
          <p>No news feed available</p>
        ) : (
          newsFeedList.map((post, index) => (
            <PostProvider key={index} postId={post._id} post={post}>
              <NewsFeedItem
                authorId={post.author._id}
                authorImage={getAvatar(post.author)}
                authorName={post.author.username}
                authorHeadline={post.author.headline || "Nothing"}
                postId={post._id}
                postTitle={post.title}
                postContent={post.content}
                postImages={post.images || []}
                postCreatedTime={post.createdAt}
                numberOfLikes={post.likes.length}
                numberOfComments={post.comments.length}
              />
            </PostProvider>
          ))
        )}
      </div>
    </div>
  );
}

export default NewsFeed;
