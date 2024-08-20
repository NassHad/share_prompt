"use client";

import { useState, useEffect } from "react";

import PromptCard from "./PromptCard";

const PromptCardList = ({ data, handleTagClick }) => {
    return (
        <div className="mt-16 prompt_layout">
            {data.map((post) => (
                <PromptCard
                    key={post._id}
                    post={post}
                    handleTagClick={handleTagClick}
                />
            ))}
        </div>
    );
};

const Feed = () => {
    const [searchText, setSearchText] = useState("");
    const [posts, setPosts] = useState([]);
    const [originalPosts, setOriginalPosts] = useState([]);

    const fetchPosts = async () => {
        const response = await fetch("/api/prompt");
        const data = await response.json();
        setOriginalPosts(data);
        setPosts(data);
    };

    useEffect(() => {
        fetchPosts();
    }, []);

    const handleSearchChange = (e) => {
        const newSearchText = e.target.value;
        setSearchText(newSearchText);
        filterPosts(newSearchText);
    };

    const handleTagClick = (tagName) => {
        filterPosts(tagName);
        setSearchText(tagName);
    };

    const filterPosts = (newSearchText) => {
        if (newSearchText.trim() === "") {
            // Si l'input est vide, réinitialiser la liste des posts
            setPosts(originalPosts);
        } else {
            const filteredPosts = originalPosts.filter((post) => {
                if (
                    post.prompt.includes(newSearchText) ||
                    post.tag.includes(newSearchText)
                )
                    return post;
            });
            setPosts(filteredPosts);
        }
    };

    return (
        <section className="feed">
            <form action="" className="relative w-full flex-center">
                <input
                    type="text"
                    placeholder="Search for a tag or a username"
                    value={searchText}
                    onChange={handleSearchChange}
                    className="search_input peer"
                    required
                />
            </form>
            <PromptCardList data={posts} handleTagClick={handleTagClick} />
        </section>
    );
};

export default Feed;
