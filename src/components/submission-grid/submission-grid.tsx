import { api } from "~/utils/api";

const SubmissionGrid = () => {
    
    const { data } = api.submissions.getAll.useQuery();
    
    return <div className="flex flex-col ">
        <h1 className="text-white text-2xl mt-20">Contact Form Submissions:</h1>
        
        <div className="container flex flex-col bg-slate-400 p-4 my-2 shadow-md border-white border-2 rounded">
            <div className="container flex">
                <span className="font-bold min-w-[8rem] pl-2 py-1 text-lg uppercase">NAME</span>
                <span className="font-bold min-w-[16rem] pl-2 py-1 text-lg">EMAIL ADDRESS</span>
                <span className="font-bold min-w-[10rem] pl-2 py-1 text-lg">PHONE</span>
                <span className="font-bold w-full pl-2 py-1 text-lg">MESSAGE</span>
            </div>
            {
                data?.map(submission => <div key={submission.id} className="flex py-2">
                    <span className="min-w-[8rem] pl-2  text-lg">{submission.name}</span>
                    <span className="min-w-[16rem] pl-2 text-lg">{submission.email}</span>
                    <span className="min-w-[10rem] pl-2 text-lg">{submission.phone}</span>
                    <span className="w-full pl-2 text-lg">{submission.message}</span>
                </div>)
            }
        </div>
    </div>
}


export default SubmissionGrid