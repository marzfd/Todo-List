import Image from "next/image";
import Link from "next/link";
import NewCategory from "../../components/Modal/NewCategory";
import { useRouter } from "next/router";

export async function getServerSideProps() {
  const res = await fetch('http://localhost:3000/api/categories');
  const categories = await res.json();
  return { props: { categories } }
}

const categories = ({ categories }) => {

  const router = useRouter()

  const {
    query: { name, username, email }
  } = router

  const userCategories = categories.filter(category => category.username === username)

  const handleDelete = category_id => {
    if (window.confirm('Are you sure you want to delete this category?')) {
      fetch(`/api/categories`, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          category_id: category_id
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
            <div className='mx-auto self-center'>
              <Image src="/multitasking.png" alt="categories-doodle" width={550} height={380} />
            </div>
          </div>
          <div className="mx-auto self-center">
            {userCategories.length > 0 &&
            <div className='w-full self-center'>
              <h2 className='text-sm md:text-xl mb-2 md:mb-8 font-bold text-center'>
                Categories
              </h2>
              <ul className='space-y-3'>
                {userCategories.map((category, index) => (
                  <li key={index}
                    className={'group bg-white p-2 md:p-3 my-3 rounded-lg shadow-2xl flex items-center justify-between border-l-8 border-purple-400'}
                  >
                    <p className='text-xs md:text-base'>{category.category_name}</p>
                    <button
                      type="button"
                      onClick={() => handleDelete(category.category_id)}
                      className='col-start-7 opacity-0 group-hover:opacity-100 transition duration-500 text-white mx-1 focus:outline-none'
                    >
                      <svg className="h-6 w-6 text-red-500"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round">  <circle cx="12" cy="12" r="10" />  <line x1="15" y1="9" x2="9" y2="15" />  <line x1="9" y1="9" x2="15" y2="15" /></svg>
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            }
            <NewCategory username={username} />
            <Link
              href={{
                pathname: '/tasks',
                query: {
                  name,
                  username,
                  email
                }
              }}
            >
              <a>
                <button className='w-full mt-5 bg-orange-500 hover:bg-orange-400 transition duration-300 text-white text-sm md:text-lg py-2 px-4 rounded-lg shadow-lg shadow-orange-400/50 focus:outline-none'>
                  See Your Tasks
                </button>
              </a>
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}

export default categories;