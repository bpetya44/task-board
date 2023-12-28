import Link from "next/link";
import { Medal } from "lucide-react";
import { Button } from "@/components/ui/button";

const MarketingPage = ()=>{
    return (
        <div className="flex items-center justify-center flex-col">
            <div className="flex items-center justify-center flex-col">
                <div className="mb-4 flex items-center border shadow-sm p-4 bg-amber-100 text-amber-700 rounded-full uppercase">
                    <Medal className="h-6 w-6 mr-2" />
                    №1 task manager
                </div>
            <h1 className="text-3xl md:text-6xl text-center text-neutral-800 mb-6">
            Task-Board Fuels Your Workflow
            </h1>
            <div className="text-3xl md:text-6xl text-center bg-gradient-to-r from-fuchsia-600 to-pink-600 text-white px-4 p-2 rounded-md pb-4 w-fit">
               Moving Work Forward
            </div>
            </div>
            <div className="text-small md:text-xl text-neutral-500 mt-4 max-w-xs md:max-w-2xl text-center mx-auto">
            Elevate Collaboration, Project Management, and Productivity to New Heights. 
            Whether in bustling office or the comfort of your home, Task-Board is the key to unlocking your distinctive workflow achievements
            </div>
            <Button className="mt-6" size="lg" asChild>
                <Link href="/sign-up">
                 Get Task-Board for free
                </Link>
            </Button>
        </div>
    )
}

export default MarketingPage;