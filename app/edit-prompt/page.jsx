"use client";

import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Form from "@components/Form";

const EditPrompt = () => {
    const router = useRouter();
    const searchParams = useSearchParams();
    const promptId = searchParams.get("id");

    const [post, setPost] = useState({ prompt: "", tag: "" });
    const [submitting, setSubmitting] = useState(false);

    useEffect(() => {
        const getPromptDetails = async () => {
            const response = await fetch(`/api/prompt/${promptId}`);
            const data = await response.json();

            setPost({
                prompt: data.prompt,
                tag: data.tag,
            });
        };

        if (promptId) getPromptDetails();
    }, [promptId]);

    const editPrompt = async (e) => {
        e.preventDefault();
        setSubmitting(true);

        const response = await fetch(`/api/prompt/${promptId}`, {
            method: "PATCH",
            body: JSON.stringify({
                prompt: post.prompt,
                tag: post.tag,
            }),
        });

        try {
            const response = await fetch(`/api/prompt/${promptId}`, {
                method: "PATCH",
                body: JSON.stringify({
                    prompt: post.prompt,
                    tag: post.tag,
                }),
            });

            if (response.ok) {
                router.push("/");
            }
        } catch (error) {
            console.log(error);
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <Form
            type="Éditer"
            post={post}
            setPost={setPost}
            submitting={submitting}
            handleSubmit={editPrompt}
        />
    );
};

export default EditPrompt;
