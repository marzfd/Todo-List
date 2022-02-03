import Image from "next/image";
import NewTask from "../components/Modal/NewTask";
import UpdateTask from "../components/Modal/UpdateTask";
import prisma from "../db/prisma";

export async function getServerSideProps() {
  try {
    const data = await prisma.task.findMany();
    const tasks = JSON.parse(JSON.stringify(data));
    console.log(tasks);
    return {
      props: { tasks },
    };
  } catch (err) {
    console.log(err);
  }
}

const tasks = ({ tasks }) => {
  return (
    <>
      <main className='mx-auto lg:w-9/12 p-5 md:p-10 flex flex-wrap'>
        <div className='mb-3'>
          <div className='lg:mb-6 mb-3 md:mt-10 sm:mt-1'>
            <Image src="/logo.png" alt="Logo" width={135} height={100} />
          </div>
          <p className='lg:text-3xl md:text-xl lg:pt-10 lg:pb-10 mt-2 mb-5'>Marzieh, you have <strong>{tasks.length}</strong> tasks today !</p>
          <div className='hidden sm:block'>
          <Image src="/tasks.png" alt="tasks-doodle" width={250} height={180} />
          </div>
        </div>
        <div className='mx-auto p-4 md:p-8 md:w-1/2 lg:w-1/2 w-full self-center'>
          <h2 className='mb-10 font-bold text-center'>TODO</h2>
          <ul className='space-y-3'>
            {tasks.map((task, index) => (
               <li
               key={index}
               className={task.is_done === true ? "bg-white p-3 rounded-lg shadow-2xl group flex items-center justify-between border-l-8 border-green-400" : "bg-white p-3 border-l-8 border-red-400 rounded-lg shadow-2xl group flex items-center justify-between"}
             >
               <p>{task.task_name}</p>
               <div>
                 <UpdateTask task={task} />
                 <button type="button" className='opacity-0 group-hover:opacity-100 transition duration-300 text-white mx-1 focus:outline-none'>
                  <svg className="h-6 w-6 text-red-500"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round">  <circle cx="12" cy="12" r="10" />  <line x1="15" y1="9" x2="9" y2="15" />  <line x1="9" y1="9" x2="15" y2="15" /></svg>
                 </button>
               </div>
             </li>
            ))}
          </ul>
          <NewTask />
        </div>
      </main>
    </>
  );
}

export default tasks;