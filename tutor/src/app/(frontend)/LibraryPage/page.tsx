"use client"
import { useRouter } from "next/navigation"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Headphones, BookOpen, Mic, PenTool } from "lucide-react"
import Navbar from "@/app/(frontend)/HomePage/components/NavBar/page"

const skills = [
    {
        id: "listening",
        title: "Listening",
        icon: Headphones,
        color: "blue",
        description: "Practice understanding spoken English with real IELTS-style recordings."
    },
    {
        id: "reading",
        title: "Reading",
        icon: BookOpen,
        color: "green",
        description: "Improve your reading comprehension with authentic IELTS passages."
    },
    {
        id: "speaking",
        title: "Speaking",
        icon: Mic,
        color: "orange",
        description: "Develop your spoken English through topic-based questions and responses."
    },
    {
        id: "writing",
        title: "Writing",
        icon: PenTool,
        color: "red",
        description: "Enhance your writing skills with Task 1 and Task 2 practice exercises."
    },
]

export default function LibraryTestPage() {

    const router = useRouter()

    return (
        <div className="min-h-screen bg-gray-50">
            <Navbar />
            <div className="max-w-5xl mx-auto text-center mb-10 mt-10">
                
                <p className="text-black text-2xl">
                    Chọn 1 kỹ năng để luyện tập
                </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
                {skills.map((skill) => {

                    const Icon = skill.icon

                    const colorClasses = {
                        blue: "border-blue-500 hover:bg-blue-50 hover:shadow-blue-200",
                        green: "border-green-500 hover:bg-green-50 hover:shadow-green-200",
                        orange: "border-orange-500 hover:bg-orange-50 hover:shadow-orange-200",
                        red: "border-red-500 hover:bg-red-50 hover:shadow-red-200",
                    }[skill.color]

                    const iconColor = {
                        blue: "text-blue-600",
                        green: "text-green-600",
                        orange: "text-orange-600",
                        red: "text-red-600",
                    }[skill.color]

                    return (
                        <Card
                            key={skill.id}
                            className={`cursor-pointer transition-all transform hover:scale-105 hover:shadow-lg border-2 bg-white ${colorClasses}`}
                            onClick={() => router.push(`/library-test/${skill.id}`)}
                        >
                            <CardHeader className="flex flex-col items-center space-y-3">
                                <Icon className={`w-12 h-12 ${iconColor}`} />
                                <CardTitle className="text-2xl font-semibold text-black">{skill.title}</CardTitle>
                            </CardHeader>
                            <CardContent className="text-gray-600 text-center px-4">
                                {skill.description}
                            </CardContent>
                        </Card>
                    )
                })}
            </div>
        </div>
    )
}
