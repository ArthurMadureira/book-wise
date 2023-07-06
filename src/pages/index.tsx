import Image from 'next/image'

import { HomeContainer, HomeFeedContainer, HomeMainContainer, HomePostsFeedContainer, PopularBooksContainer, PopularBooksHeader, PopularBooksList } from "@/styles/pages/home";

import { Post } from '@/components/Post';
import Link from 'next/link';
import { PopularBook } from '@/components/PopularBook';
import { SideBar } from '@/components/SideBar';

export default function Home() {
  return (
    <HomeContainer>
      <SideBar page='home' />

      <HomeMainContainer>
        <HomeFeedContainer>
          <h3>Most recent reviews</h3>

          <HomePostsFeedContainer>

            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />

          </HomePostsFeedContainer>
        </HomeFeedContainer>

        <PopularBooksContainer>
          <PopularBooksHeader>
            <h4>Popular books</h4>
            <Link href="/explore">See all</Link>
          </PopularBooksHeader>

          <PopularBooksList>
            <PopularBook />
            <PopularBook />
            <PopularBook />
            <PopularBook />
          </PopularBooksList>
        </PopularBooksContainer>

      </HomeMainContainer>

    </HomeContainer>
  )
}