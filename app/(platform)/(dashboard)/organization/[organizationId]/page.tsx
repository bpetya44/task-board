import { db } from "@/lib/db";


const OrganizationIdPage = () => {
    async function create(formData: FormData){
        "use server";
        const title = formData.get("title") as string;

        await db.board.create({
            data: {
                title,
            }
        });
    }


    return (
        <div>
            <form>
                <input 
                    id="title" 
                    name="title" 
                    required
                    placeholder="Enter a title"
                    className="border-2 border-gray-300 rounded-sm p-2"
                />
            </form>
        </div>
    );
    }

    export default OrganizationIdPage;