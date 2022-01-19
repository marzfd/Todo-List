import Image from "next/image";
import Link from "next/link";

const tasks = ({ todos }) => {
  return (
    <>
      <main className='mx-auto lg:w-9/12 p-5 md:p-10 flex flex-wrap'>
        <div className='mb-3'>
          <div className='lg:mb-6 mb-3 md:mt-10 sm:mt-1'>
            <Image src="/logo.png" alt="Logo" width={135} height={100} />
          </div>
          <p className='lg:text-3xl md:text-xl lg:pt-10 lg:pb-10 mt-2 mb-5'>Marzieh, you have 5 tasks today !</p>
          <div className='hidden sm:block'>
          <Image src="/tasks.png" alt="tasks-doodle" width={250} height={180} />
          </div>
        </div>
        <div className='mx-auto p-4 md:p-8 md:w-1/2 lg:w-1/2 w-full self-center'>
          <h2 className='mb-10 font-bold text-center'>TODO</h2>
          <ul className='space-y-3'>
            {todos.map((todo, index) => (
               <li
               key={index}
               className={todo.completed === true ? "bg-white p-3 rounded-lg shadow-2xl group flex items-center justify-between border-l-8 border-green-400" : "bg-white p-3 border-l-8 border-red-400 rounded-lg shadow-2xl group flex items-center justify-between"}
             >
               <p>{todo.title}</p>
               <div>
                 <button type="button" className='opacity-0 group-hover:opacity-100 transition duration-300 text-white mx-1 focus:outline-none'>
                 <svg className="h-6 w-6 text-green-500" width="24"  height="24"  viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round">  <path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z" /></svg>
                 </button>
                 <button type="button" className='opacity-0 group-hover:opacity-100 transition duration-300 text-white mx-1 focus:outline-none'>
                 <svg className="h-6 w-6 text-red-500"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round">  <circle cx="12" cy="12" r="10" />  <line x1="15" y1="9" x2="9" y2="15" />  <line x1="9" y1="9" x2="15" y2="15" /></svg>
                 </button>
               </div>
             </li>
            ))}
          </ul>
          <Link href='/'>
            <button type="submit" className='bg-purple-700 hover:bg-purple-500 transition duration-300 text-white w-full mt-5 py-2 px-4 rounded-lg focus:outline-none'>Add New Task</button>
          </Link>
        </div>
      </main>
    </>
  );
}


export default tasks;

export const getStaticProps = async () => {
  const data = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=5')
  const todos = await data.json()
  return {
    props: {
      todos
    }
  }
}