import Image from "next/image";

import { SideBar } from "@/components/SideBar";
import { BooksContainer, Category, ExploreCategoriesBooksContainer, ExploreContainer, ExploreHeader, ExploreMainContainer, Form, SearchInput } from "@/styles/pages/explore";
import { Binoculars } from "phosphor-react";
import { useState } from "react";

import BookImage from '/public/images/Book.png'
import { BookExplore } from "@/components/BookExplore";


export default function Explore() {
  const [categories, setCategories] = useState([
    { name: 'All', active: true },
    { name: 'Computer', active: false },
    { name: 'Education', active: false },
    { name: 'Fantasy', active: false },
    { name: 'Science fiction', active: false },
    { name: 'Horror', active: false },
    { name: 'HQs', active: false },
    { name: 'Suspense', active: false }
  ]);

  function handleCategoryClick(index: any) {
    const updatedCategories = categories.map((category, i) => {
      if (i === index) {
        return { ...category, active: true };
      } else {
        return { ...category, active: false };
      }
    });

    setCategories(updatedCategories);
  }

  return (
    <ExploreContainer>
      <SideBar page='explore' />

      <ExploreMainContainer>
        <ExploreHeader>
          <h2>
            <Binoculars width={32} height={32} color="#50B2C0" />
            <span>Explore</span>
          </h2>

          <Form>
            <SearchInput placeholder="Search book or author" />
          </Form>

        </ExploreHeader>

        <ExploreCategoriesBooksContainer>
          {categories.map((category, index) => {
            return (
              <Category key={category.name} className={category.active == true ? 'active' : ''} onClick={() => handleCategoryClick(index)}>
                {category.name}
              </Category>
            )
          })}
        </ExploreCategoriesBooksContainer>

        <BooksContainer>
          <BookExplore />
          <BookExplore />
          <BookExplore />
          <BookExplore />
          <BookExplore />
          <BookExplore />
          <BookExplore />
          <BookExplore />
          <BookExplore />
        </BooksContainer>
      </ExploreMainContainer>
    </ExploreContainer>
  )
}