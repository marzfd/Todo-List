import Link from "next/link";
import prisma from "../../db/prisma";

export const getServerSideProps = async (ctx) => {
  const id = ctx.query.id;
  const category = await prisma.category.findUnique({
    where: {
      category_id: JSON.parse(id),
    }
  });
  return { props: { category } };
};

const Category = ({ category }) => {
  return (
    <div className="space-y-3">
      <h1>Category: <strong>{category.category_name}</strong></h1>
      <h4>Category ID: <strong>{category.category_id}</strong></h4>
      <Link href="/categories">
        <a>
          <button className="bg-purple-700 text-white font-semibold rounded p-2 m-3">Go Back</button>
        </a>
      </Link>
    </div>
  );
}

export default Category