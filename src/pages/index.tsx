import Image from 'next/image'

import { ChartLineUp, Binoculars, SignIn } from 'phosphor-react'
import { HomeContainer, HomeFeedContainer, HomeMainContainer, HomePostsFeedContainer, PopularBooksContainer, PopularBooksHeader, PopularBooksList, SideBarContainer, SideBarHeader, SideBarLink, SideBarLinksContainer, SignOutButton } from "@/styles/pages/home";

import BookImage from '/public/book-image.svg'
import { Post } from '@/components/Post';
import Link from 'next/link';
import { PopularBook } from '@/components/PopularBook';

export default function Home() {
  return (
    <HomeContainer>
      <SideBarContainer>
        <SideBarHeader>
          <Image src={BookImage} width={24} height={24} alt='Purple book image' />
          <h1>BookWise</h1>
        </SideBarHeader>

        <SideBarLinksContainer>

          <SideBarLink href='/' style={{ color: 'white' }}>

            <ChartLineUp size={24} />
            Home
          </SideBarLink>

          <SideBarLink href='/'>

            <Binoculars size={24} />
            Explore

          </SideBarLink>

        </SideBarLinksContainer>

        <SignOutButton href='/login'>

          <span>Log in</span>
          <SignIn size={32} color='#50B2C0' />

        </SignOutButton>

      </SideBarContainer>

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
            <Link href="">See all</Link>
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