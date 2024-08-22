"use client";

import Profile from "@components/Profile";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const UserProfile = ({ params }) => {
    const searchParams = useSearchParams();
    const userName = searchParams.get("name");
    const [userPosts, setUserPosts] = useState([]);

    useEffect(() => {
        const fetchPosts = async () => {
            const response = await fetch(`/api/user/${params?.id}/posts`);
            const data = await response.json();

            setUserPosts(data);
        };
        if (params?.id) fetchPosts();
    }, [params?.id]);

    return (
        <Profile
            name={userName}
            desc={`Bienvenue sur le profil de ${userName}. Consulter ses prompts et n'hésitez pas à vous en inspirer !`}
            data={userPosts}
        />
    );
};

export default UserProfile;
