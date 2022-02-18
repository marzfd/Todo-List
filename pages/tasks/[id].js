import Link from "next/link";
import prisma from "../../db/prisma";

export const getServerSideProps = async (ctx) => {
  const id = ctx.query.id;
  const task = await prisma.task.findUnique({
    where: {
      task_id: JSON.parse(id),
    },
    select: {
      task_id: true,
      category_id: true,
      task_name: true,
    }
  });
  return { props: { task } };
};

const Task = ({ task }) => {
  return (
    <div className="space-y-3">
      <h1>Task: <strong>{task.task_name}</strong></h1>
      <h4>Category ID: <strong>{task.category_id}</strong></h4>
      <p>Task ID: <strong>{task.task_id}</strong></p>
      <Link href="/tasks">
        <a>
          <button className="bg-purple-700 text-white font-semibold rounded p-2 m-3">Go Back</button>
        </a>
      </Link>
    </div>
  );
}

export default Task