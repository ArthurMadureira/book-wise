import Image from 'next/image'

import { SideBarContainer, SideBarHeader, SideBarLink, SideBarLinksContainer, SignOutButton } from "@/styles/components/SideBar";
import { Binoculars, ChartLineUp, SignIn } from "phosphor-react";

import BookImage from '/public/book-image.svg'

interface SideBarProps {
  page: 'home' | 'explore'
}


export function SideBar({ page }: SideBarProps) {
  return (
    <SideBarContainer>
      <SideBarHeader>
        <Image src={BookImage} width={24} height={24} alt='Purple book image' />
        <h1>BookWise</h1>
      </SideBarHeader>

      <SideBarLinksContainer>

        <SideBarLink href='/' style={{ color: page == 'home' ? 'white' : '#8D95AF' }}>

          <ChartLineUp size={24} />
          Home
        </SideBarLink>

        <SideBarLink href='/explore' style={{ color: page == 'explore' ? 'white' : '#8D95AF' }}>

          <Binoculars size={24} />
          Explore

        </SideBarLink>

      </SideBarLinksContainer>

      <SignOutButton href='/login'>

        <span>Log in</span>
        <SignIn size={32} color='#50B2C0' />

      </SignOutButton>

    </SideBarContainer>
  )
}