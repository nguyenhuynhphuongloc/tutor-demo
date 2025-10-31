// app/topics/page.tsx
import { getPayload } from "payload";
import configPromise from "@payload-config";
import Image from "next/image";
import Link from "next/link"; 
import Navbar from "@/app/(frontend)/HomePage/components/NavBar/page";

export default async function TopicsPage() {

    const payload = await getPayload({ config: configPromise });
    const res = await payload.find({ collection: "topics", limit: 50 });

    const topics = res.docs.map((t: any) => ({
        id: t.id,
        title: t.title,
        description: t.description,
        image: t.image?.url || null,
    }));

    return (
        <div className="min-h-screen bg-gray-50">

            <Navbar />

            <div className="min-h-screen bg-gray-50 p-10">
                <h1 className="text-3xl font-bold mb-8 text-red-600 text-center">
                    Topics
                </h1>

                <div
                    className="grid gap-6"
                    style={{
                        gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
                    }}
                >
                    {topics.map((topic) => (
                        <Link
                            key={topic.id}
                            href={`/TopicPage/TopicDetailPage?_id=${topic.id}`}
                            className="cursor-pointer bg-white shadow-md rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-200 hover:-translate-y-1 border border-gray-200"
                        >
                            <Image
                                src={topic.image}
                                alt={topic.title}
                                width={300}
                                height={300}
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-5">
                                <h2 className="text-xl font-semibold text-gray-800 mb-2">
                                    {topic.title}
                                </h2>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}
