import { useState } from 'react';

const UpdateTask= () => {
  const [modal, setModal] = useState(false);


  const toggle = () => setModal(!modal);

  return (
    <>
      <button
        type="button"
        onClick={toggle}
        className='opacity-0 my-2 group-hover:opacity-100 transition duration-300 text-white mx-1 focus:outline-none'
      >
        <svg className="h-6 w-6 text-green-500" width="24"  height="24"  viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round">  <path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z" /></svg>
      </button>
      {modal && (
        <div className='fixed inset-0 bg-gray-900 bg-opacity-75 z-40 flex justify-center'>
          <div className='max-w-sm w-full bg-gradient-to-br from-orange-50 to-orange-300 rounded-lg shadow-xl z-50 h-min self-center'>
            <div className='relative p-10'>
              <div className='flex items-center justify-between'>
                <h2 className='text-2xl font-semibold'>Update Your Task</h2>
                <button type='button' className='absolute top-0 right-0 p-3 text-gray-500 hover:text-gray-900 focus:outline-none' onClick={toggle}>
                  <svg className='h-6 w-6 p-1 hover:bg-red-300 hover:rounded-full text-gray-700' width='24'  height='24'  viewBox='0 0 24 24'  xmlns='http://www.w3.org/2000/svg'  fill='none'  stroke='currentColor'  strokeWidth='2'  strokeLinecap='round'  strokeLinejoin='round'>  <path d='M6 18L18 6M6 6l12 12' /></svg>
                </button>
              </div>
              <div className='mt-6'>
                <input className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-purple-200 placeholder-purple-300' type='text' placeholder='Task Name' required />
              </div>
              <div className='mt-6'>
                <input className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-purple-200 placeholder-purple-300' type='text' placeholder='Category Name' required />
              </div>
              <div className='mt-6'>
                <button
                  type='submit'
                  className='bg-purple-700 hover:bg-purple-500 transition duration-300 text-white w-full py-2 px-4 rounded-lg focus:outline-none'
                >
                  Update Task
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
};

export default UpdateTask;
