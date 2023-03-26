import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "../../redux/slices/postSlices/postSlice";
import { AppDispatch } from "../../redux/store/store";

const AllPosts = () => {
  const dispatch = useDispatch<AppDispatch>();
  const posts = useSelector((state: any) => state.posts.posts);
  console.log(posts);
  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);
  return <div></div>;
};

export default AllPosts;
