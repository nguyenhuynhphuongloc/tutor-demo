"use client";

import { useSearchParams } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import Navbar from "@/app/(frontend)/HomePage/components/NavBar/page";

export default function TopicDetailPage() {
    const searchParams = useSearchParams();
    const id = searchParams.get("_id");

    const [topic, setTopic] = useState<any>(null);

    const fetchTopic = useCallback(async () => {
        try {
            const res = await fetch(
                `http://localhost:3000/api/topics/${id}?depth=2&draft=false&locale=undefined&trash=false`,
                { cache: "no-store" }
            );
            if (!res.ok) throw new Error("Failed to fetch topic");
            const data = await res.json();
            setTopic(data);
        } catch (error) {
            console.error(error);
        }
    }, [id]);

    useEffect(() => {
        if (id) fetchTopic();
    }, [id, fetchTopic]);

    if (!topic)
        return <div className="p-10 text-center text-red-600">Topic not found</div>;

    return (
        <div className="min-h-screen bg-white">
            <Navbar />

            <div className="bg-gray-50 p-9">
                
                {/* Bảng từ vựng */}
                <div className="overflow-x-auto  shadow-lg rounded-2xl">
                    <table className="min-w-full border border-gray-200">
                        <thead className="bg-red-600">
                            <tr>
                                <th className="px-4 py-3 text-left text-white font-semibold border-b">
                                    New Word
                                </th>
                                <th className="px-4 py-3 text-left text-white font-semibold border-b">
                                    Meaning (EN)
                                </th>
                                <th className="px-4 py-3 text-left text-white font-semibold border-b">
                                    Meaning (VI)
                                </th>
                                <th className="px-4 py-3 text-left text-white font-semibold border-b">
                                    Level
                                </th>
                                <th className="px-4 py-3 text-left text-white font-semibold border-b">
                                    Example
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {topic.vocabulary?.map((word: any, index: number) => (
                                <tr
                                    key={word.id || index}
                                    className="hover:bg-gray-50 transition"
                                >
                                    <td className="px-4 py-3 border-b text-black">
                                        {word.newWord}
                                    </td>
                                    <td className="px-4 py-3 border-b text-black">
                                        {word.meaningEn}
                                    </td>
                                    <td className="px-4 py-3 border-b text-black">
                                        {word.meaningVi}
                                    </td>
                                    <td className="px-4 py-3 border-b text-black">
                                        {word.level}
                                    </td>
                                    <td className="px-4 py-3 border-b italic text-black">
                                        {word.example}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
