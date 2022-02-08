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
    <div>
      <h1>Category: {category.category_name}</h1>
      <h4>Category ID: {category.category_id}</h4>
      <Link href="/categories">
        <a>Go Back</a>
      </Link>
    </div>
  );
}

export default Category