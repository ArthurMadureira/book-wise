import Image from 'next/image'

import { ChartLineUp, Binoculars, SignIn } from 'phosphor-react'
import { HomeContainer, SideBarContainer, SideBarHeader, SideBarLink, SideBarLinksContainer, SignOutButton } from "@/styles/pages/home";

import BookImage from '/public/book-image.svg'

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

    </HomeContainer>
  )
}