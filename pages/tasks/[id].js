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
  console.log(task);
  return { props: { task } };
};

const Task = ({ task }) => {
  return (
    <div>
      <h1>Task: {task.task_name}</h1>
      <h4>Category ID: {task.category_id}</h4>
      <p>Task ID: {task.task_id}</p>
      <Link href="/tasks">
        <a>Go Back</a>
      </Link>
    </div>
  );
}

export default Task