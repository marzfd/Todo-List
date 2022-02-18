import Image from "next/image";
import Link from "next/link";
import NewCategory from "../../components/Modal/NewCategory";
import UpdateTask from "../../components/Modal/UpdateTask";

export async function getServerSideProps() {
  const res = await fetch('http://localhost:3000/api/categories');
  const categories = await res.json();
  return { props: { categories } }
}


const categories = ({ categories }) => {
  return (
    <>
      <main className='mx-auto lg:w-9/12 p-5 md:p-10 flex flex-wrap justify-center'>
        <div className='mb-3'>
          <div className='lg:mb-6 mb-3 md:mt-10 sm:mt-1'>
            <Image src="/logo.png" alt="Logo" width={135} height={100} />
          </div>
          <div className='self-center'>
            <Image src="/multitasking.png" alt="categories-doodle" width={550} height={380} />
          </div>
        </div>
        <div className='mx-auto p-4 md:p-8 md:w-1/2 lg:w-1/2 w-full self-center'>
          <h1 className='text-2xl font-bold text-center mb-10'>Categories</h1>
          <ul className='space-y-3'>
            {categories.map((category, index) => (
              <Link href={`/categories/${category.category_id}`} key={index}>
                <a>
                  <li
                    className={'bg-white p-3 my-3 rounded-lg shadow-2xl group flex items-center justify-between border-l-8 border-purple-400'}
                  >
                    <p>{category.category_id}</p>
                    <p>{category.category_name}</p>
                    <div>
                      <UpdateTask category={category} />
                      <button type="button" className='opacity-0 group-hover:opacity-100 transition duration-300 text-white mx-1 focus:outline-none'>
                        <svg className="h-6 w-6 text-red-500"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round">  <circle cx="12" cy="12" r="10" />  <line x1="15" y1="9" x2="9" y2="15" />  <line x1="9" y1="9" x2="15" y2="15" /></svg>
                      </button>
                    </div>
                  </li>
                </a>
              </Link>
            ))}
          </ul>
          <NewCategory />
          <Link href='/tasks'>
                <a>
                  <button className='w-full mt-5 bg-orange-500 hover:bg-orange-400 transition duration-300 text-white lg:text-sm py-2 px-4 rounded-lg shadow-lg shadow-orange-400/50 focus:outline-none'>
                    See All Tasks
                  </button>
                </a>
              </Link>
        </div>
      </main>
    </>
  );
}

export default categories;