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
                  <li className='bg-white p-3 rounded-lg shadow-2xl grid grid-cols-2 items-center'>
                    <p className='text-sm md:text-lg font-bold col-start-1'>Category</p>
                    <p className='text-sm md:text-lg font-bold col-start-2'>Task</p>
                  </li>
                  {userTasks.map((task, index) => (
                    <Link href={`/tasks/${task.task_id}`} key={index}>
                      <a>
                        <li
                          className={`bg-white p-3 my-3 grid grid-cols-2 rounded-lg shadow-2xl items-center border-l-8 ${ task.is_done === true ? 'border-green-400' : 'border-red-400'}`}
                        >
                          <p className='text-xs md:text-base col-start-1'>{categories.find(category => category.category_id === task.category_id).category_name}</p>
                          <p className='text-xs md:text-base col-start-2'>{task.task_name}</p>
                        </li>
                      </a>
                    </Link>
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