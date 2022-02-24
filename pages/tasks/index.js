/* eslint-disable react-hooks/rules-of-hooks */
import Image from "next/image";
import Link from "next/link";
import NewTask from "../../components/Modal/NewTask";
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
    query: { name, username, email }
  } = router

  const userTasks = tasks.filter(task => task.username === username)

  const handleIsDone = task_id => {
    const task = tasks.find(task => task.task_id === task_id)
    fetch(`/api/tasks`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        task_id: task_id,
        is_done: !task.is_done
      })
    })
      .then(res => res.json())
      .then(() => router.reload())
      .catch(err => console.log(err))
  }

  const handleDelete = task_id => {
    if (window.confirm('Are you sure you want to delete this task?')) {
      fetch(`/api/tasks`, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          task_id: task_id
        })
      })
        .then(res => res.json())
        .then(() => router.reload())
        .catch(err => console.log(err))
    }
  }

  return (
    <>
      <main className='mx-auto lg:w-9/12 p-5 md:p-10'>
        <div className='mb-5 space-x-4 text-right'>
          <Link href='/signIn'>
            <a>
              <button
              type='button'
                className='bg-orange-500 hover:bg-orange-400 transition duration-300 text-white py-2 px-6 rounded-lg focus:outline-none text-xs md:text-sm'
              >
                Sign Out
              </button>
            </a>
          </Link>
          <Link
            href={{
              pathname: '/profile',
              query: {
                name,
                username,
                email
              }
            }}
          >
            <a>
              <button
                type='button'
                className='bg-purple-700 hover:bg-purple-500 transition duration-300 text-white py-2 px-4 rounded-lg focus:outline-none text-xs md:text-sm'
              >
                Your Profile
              </button>
            </a>
          </Link>
        </div>
        <div className='flex flex-wrap'>
          <div className='mb-3'>
            <div className='lg:mb-6 mb-3 md:mt-10 sm:mt-1'>
              <Image src="/logo.png" alt="Logo" width={135} height={100} />
            </div>
            <p className='lg:text-3xl md:text-xl lg:pt-10 lg:pb-10 mt-2 mb-5'>
              {name}, you have <strong>{userTasks.length == 0 ? 'NO' : userTasks.length}</strong> task{userTasks.length > 1 ? 's' : ''} today !
            </p>
            <div className='self-center'>
              <Image src="/tasks.png" alt="tasks-doodle" width={250} height={180} />
            </div>
          </div>
          <div className="mx-auto self-center">
            {userTasks.length > 0 &&
              <div className='w-full self-center'>
                <h2 className='text-sm md:text-xl mb-2 md:mb-8 font-bold text-center'>
                  TODO
                </h2>
                <ul className='space-y-3'>
                  <li className='bg-white p-3 rounded-lg shadow-2xl grid grid-cols-8 items-center'>
                    <p className='text-sm md:text-lg font-bold col-start-1 col-span-3'>Category</p>
                    <p className='text-sm md:text-lg font-bold col-start-4 col-span-3'>Task</p>
                  </li>
                  {userTasks.map((task, index) => (
                    <div key={index} className='group'>
                      <li
                        className={`bg-white w-full p-3 my-3 grid grid-cols-8 rounded-lg shadow-2xl items-center border-l-8 ${ task.is_done === true ? 'border-green-400' : 'border-red-400'}`}
                      >
                        <p className='text-xs md:text-base col-start-1 col-span-3'>{categories.find(category => category.category_id === task.category_id).category_name}</p>
                        <p className='text-xs md:text-base col-start-4 col-span-3'>{task.task_name}</p>
                        <button
                          type="button"
                          onClick={() => handleDelete(task.task_id)}
                          className='col-start-7 opacity-0 group-hover:opacity-100 transition duration-500 text-white mx-1 focus:outline-none'
                        >
                          <svg className="h-6 w-6 text-red-500"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round">  <circle cx="12" cy="12" r="10" />  <line x1="15" y1="9" x2="9" y2="15" />  <line x1="9" y1="9" x2="15" y2="15" /></svg>
                        </button>
                        <input
                          type="checkbox"
                          checked={task.is_done}
                          onChange={() => handleIsDone(task.task_id)}
                          className='col-start-8 opacity-0 group-hover:opacity-100 transition duration-500 w-5 h-5 border-gray-300 focus:ring-3 focus:ring-blue-300'
                        >
                        </input>
                      </li>
                    </div>
                  ))}
                </ul>
              </div>
            }
            <NewTask categories={categories} username={username}/>
            <Link
              href={{
                pathname: '/categories',
                query: {
                  name,
                  username,
                  email
                }
              }}
            >
              <a>
                <button
                  type="button"
                  className='bg-orange-500 hover:bg-orange-400 mt-3 transition duration-300 text-white text-sm md:text-lg w-full py-2 px-4 rounded-lg shadow-lg shadow-orange-400/50 focus:outline-none'
                >
                  See Your Categories
                </button>
              </a>
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}

export default tasks;