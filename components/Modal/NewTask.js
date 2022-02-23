import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

const NewTask = ({ categories, username }) => {
  const [modal, setModal] = useState(false);
  const [task, setTask] = useState('');
  const [categoryId, setCategoryId] = useState('');
  const [error, setError] = useState('');

  const router = useRouter();

  const toggle = () => setModal(!modal);

  const onSubmit = e => {
    e.preventDefault()
    if (!task && !categoryId) {
      setError('Please enter all fields !')
    } else {
      fetch('/api/tasks', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          task_name: task,
          category_id: parseInt(categoryId),
          username: username
        })
      })
      .then(res => res.json())
      .then(() => {
        toggle()
        router.reload()
      })
      .catch(err => console.log(err))
    }
  }

  const userCategories = categories.filter(category => category.username === username)

  return (
    <>
      <button
        type='button'
        onClick={toggle}
        className='text-sm md:text-lg bg-purple-700 hover:bg-purple-500 transition duration-300 text-white w-full mt-5 py-2 px-4 rounded-lg focus:outline-none'
      >
        Add New Task
      </button>
      { modal && (
        <div className='fixed inset-0 bg-gray-900 bg-opacity-75 z-40 flex justify-center'>
          <div className='max-w-sm w-full bg-gradient-to-br from-orange-50 to-orange-300 rounded-lg shadow-xl z-50 h-min self-center'>
            <div className='relative p-10'>
              <div className='flex items-center justify-between'>
                <h2 className='text-2xl font-semibold'>Add New Task</h2>
                <button type='button' className='absolute top-0 right-0 p-3 text-gray-500 hover:text-gray-900 focus:outline-none' onClick={toggle}>
                  <svg className='h-6 w-6 p-1 hover:bg-red-300 hover:rounded-full text-gray-700' width='24'  height='24'  viewBox='0 0 24 24'  xmlns='http://www.w3.org/2000/svg'  fill='none'  stroke='currentColor'  strokeWidth='2'  strokeLinecap='round'  strokeLinejoin='round'>  <path d='M6 18L18 6M6 6l12 12' /></svg>
                </button>
              </div>
              <div className='mt-6'>
                <input
                  type='text'
                  value={task}
                  onChange={e => setTask(e.target.value)}
                  className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-purple-200 placeholder-purple-300' type='text' placeholder='Task Name' required
                />
              </div>
              <div className='mt-6'>
                <select
                  value={categoryId}
                  onChange={e => setCategoryId(e.target.value)}
                  className='shadow appearance-none border rounded w-full py-2 px-3 text-purple-500 leading-tight focus:outline-none focus:shadow-outline border-purple-200 placeholder-purple-300' type='text' placeholder='Category Name' required>
                  <option value='' className='text-purple-300'>Choose a Category</option>
                    { userCategories &&
                      userCategories.map(category => (
                        <option key={category.category_id} value={category.category_id}>{category.category_name}</option>
                    ))}
                </select>
              </div>
              <div className='mt-6'>
                <button
                  type='submit'
                  onClick={onSubmit}
                  className='bg-purple-700 hover:bg-purple-500 transition duration-300 text-white w-full py-2 px-4 rounded-lg focus:outline-none'
                >
                  Add Task
                </button>
              </div>
              <Link
                href={{
                  pathname: '/categories',
                  query: { username }
                }}
              >
                <a>
                  <div className='mt-6'>
                    <button
                      type='submit'
                      onClick={toggle}
                      className='bg-orange-500 hover:bg-orange-400 transition duration-300 text-white w-full py-2 px-4 rounded-lg focus:outline-none'
                    >
                      Add New Category
                    </button>
                  </div>
                </a>
              </Link>
              {
                error
                &&
                <div className="relative py-3 my-5 pl-4 pr-10 leading-normal text-red-700 bg-red-100 rounded-lg" role="alert">
                  <p>{error}</p>
                  <span className="absolute inset-y-0 right-0 flex items-center mr-4">
                    <button
                      type="button"
                      onClick={() => setError(null)}
                      className="text-red-700 focus:outline-none focus:shadow-outline"
                    >
                      <svg className="w-4 h-4 fill-current" role="button" viewBox="0 0 20 20"><path d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" fillRule="evenodd"></path></svg>
                    </button>
                  </span>
                </div>
              }
            </div>
          </div>
        </div>
      )}
    </>
  )
};

export default NewTask;
