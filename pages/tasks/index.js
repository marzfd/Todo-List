import Image from "next/image";
import Link from "next/link";
import NewTask from "../../components/Modal/NewTask";
import UpdateTask from "../../components/Modal/UpdateTask";
import { useRouter } from "next/router";

export async function getServerSideProps() {
  const res1 = await fetch('http://localhost:3000/api/tasks');
  const res2 = await fetch('http://localhost:3000/api/categories');
  const tasks = await res1.json();
  const categories = await res2.json();
  return { props: { tasks, categories } }
}

const tasks = ({ tasks, categories }) => {

  const router = useRouter()

  const {
    query: { name, username }
  } = router

  const user = { name, username }

  const userTasks = tasks.filter(task => task.username === username)

  return (
    <>
      <main className='mx-auto lg:w-9/12 p-5 md:p-10 flex flex-wrap'>
        <div className='mb-3'>
          <div className='lg:mb-6 mb-3 md:mt-10 sm:mt-1'>
            <Image src="/logo.png" alt="Logo" width={135} height={100} />
          </div>
          <p className='lg:text-3xl md:text-xl lg:pt-10 lg:pb-10 mt-2 mb-5'>
            {user.name}, you have <strong>{userTasks.length}</strong> task{userTasks.length > 1 ? 's' : ''} today !
          </p>
          <div className='self-center'>
            <Image src="/tasks.png" alt="tasks-doodle" width={250} height={180} />
          </div>
        </div>
        <div className='mb-3'>
          <div className='lg:mb-6 mb-3 md:mt-10 sm:mt-1'>
            <Link href='/signIn'>
              <a>
                <button className='text-center lg:text-3xl md:text-xl'>Sign Out</button>
              </a>
            </Link>
          </div>
        </div>
        <div className='mx-auto p-4 md:p-8 md:w-1/2 lg:w-1/2 w-full self-center'>
          <h2 className='mb-10 font-bold text-center'>TODO</h2>
          <ul className='space-y-3'>
            <li className='bg-white justify-between p-3 rounded-lg shadow-2xl group flex items-center'>
              <p className='text-lg font-bold'>Category</p>
              <p className='text-lg font-bold'>Task</p>
              <Link href='/categories'>
                <a>
                  <button className='opacity-0 group-hover:opacity-100 bg-orange-500 hover:bg-orange-400 transition duration-300 text-white lg:text-sm py-2 px-4 rounded-lg shadow-lg shadow-orange-400/50 focus:outline-none'>
                    All Categories
                  </button>
                </a>
              </Link>
            </li>
            {userTasks.map((task, index) => (
              <Link href={`/tasks/${task.task_id}`} key={index}>
                <a>
                  <li
                    className={`bg-white p-3 my-3 rounded-lg shadow-2xl group flex items-center justify-between border-l-8 ${ task.is_done === true ? 'border-green-400' : 'border-red-400'}`}
                  >
                    <p>{categories.find(category => category.category_id === task.category_id).category_name}</p>
                    <p>{task.task_name}</p>
                    <div>
                      <UpdateTask task={task} />
                      <button type="button" className='opacity-0 group-hover:opacity-100 transition duration-300 text-white mx-1 focus:outline-none'>
                        <svg className="h-6 w-6 text-red-500"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round">  <circle cx="12" cy="12" r="10" />  <line x1="15" y1="9" x2="9" y2="15" />  <line x1="9" y1="9" x2="15" y2="15" /></svg>
                      </button>
                    </div>
                  </li>
                </a>
              </Link>
            ))}
          </ul>
          <NewTask categories={categories} username={username}/>
        </div>
      </main>
    </>
  );
}

export default tasks;