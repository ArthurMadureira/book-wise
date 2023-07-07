import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/router"

import { useSession, signIn } from 'next-auth/react'

import { Action, ActionsContainer, BookWiseContainer, LoginActionContainer, LoginContainer, LoginTextContainer } from "@/styles/pages/login"

import WomenReadingABookImage from '/public/women-reading-book.png'
import GithubLogo from '/public/github-logo.svg'
import GoogleLogo from '/public/google-logo.svg'
import RocketLaunch from '/public/rocket-launch.svg'


export default function Login() {
  const session = useSession()

  const router = useRouter()

  if (session.status === "authenticated") {
    router.push('/')
  }

  console.log(session)

  return (
    <LoginContainer>
      <BookWiseContainer>
        <Image src={WomenReadingABookImage} quality={100} width={600} height={880} alt="Women reading a book" />
      </BookWiseContainer>

      <LoginActionContainer>
        <LoginTextContainer>
          <h2>Welcome</h2>
          <p>Log in or access as a visitant.</p>
        </LoginTextContainer>

        <ActionsContainer>
          <Action onClick={() => signIn('google')}>
            <Image src={GoogleLogo} width={32} height={32} alt="Google logo" />
            Log in with Google
          </Action>
          <Action>
            <Image src={GithubLogo} width={32} height={32} alt="Github logo" />
            Log in with Github
          </Action>
          <Action>
            <Link href='/'>
              <Image src={RocketLaunch} width={32} height={32} alt="Rocket launch" />
              Just visit
            </Link>
          </Action>
        </ActionsContainer>
      </LoginActionContainer>
    </LoginContainer>
  )
}