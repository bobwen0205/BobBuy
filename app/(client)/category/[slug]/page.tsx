import CategoryProducts from "@/components/CategoryProducts";
import Container from "@/components/Container";
import Title from "@/components/Title";
import { getALlCategories } from "@/sanity/helpers/queries";
import React from "react";

const CategoryPage = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const { slug } = await params;
  const categories = await getALlCategories();

  return (
    <Container className="py-10">
      <Title>
        Products by Category{" "}
        {/* <span className="font-bold text-green-600 capitalize tracking-wide">
          {slug && slug}
        </span> */}
      </Title>
      <CategoryProducts categories={categories} slug={slug} />
    </Container>
  );
};

export default CategoryPage;
