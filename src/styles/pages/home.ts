import { styled } from '..'
import Link from 'next/link'

export const HomeContainer = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '6rem',
  marginTop: '-2rem',
  height: '100vh'
})

export const SideBarContainer = styled('div', {
  display: 'flex',
  alignItems: 'flex-start',
  flexDirection: 'column',
  gap: '4rem',

  height: '90%',
  paddingBlock: '2.5rem',
  paddingInline: '3.25rem',

  backgroundImage: 'linear-gradient(180deg, #2A2879 0%, #1A1440 100%), linear-gradient(90deg, #7FD1CC 0%, #9694F5 100%)',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  backgroundPosition: 'top left, top left',


  borderRadius: '12px',

  position: 'relative',

})

export const SideBarHeader = styled('header', {
  display: 'flex',
  alignItems: 'center',
  gap: '.5rem',


  h1: {
    fontSize: '1.5rem',
    fontWeight: 700,
    lineHeight: '160%',
    letterSpacing: '.1rem',
    backgroundImage: 'linear-gradient(90deg, #9694F5, #7FD1CC)',
    '-webkit-background-clip': 'text',
    '-webkit-text-fill-color': 'transparent',
    'backgroundClip': 'text',
  }
})

export const SideBarLinksContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  gap: '1rem'
})

export const SideBarLink = styled(Link, {
  display: 'flex',
  alignItems: 'center',
  gap: '.75rem',
  textDecoration: 'none',

  color: '$gray400',

  transition: 'all .2s',

  '&:hover': {
    color: '$gray100'
  }
})

export const SignOutButton = styled(Link, {
  display: 'flex',
  alignItems: 'center',
  gap: '.75rem',
  textDecoration: 'none',

  background: 'transparent',
  border: 'none',
  color: '$gray200',

  position: 'absolute',
  bottom: '1.5rem',
  fontSize: '1.1rem',

  span: {
    fontWeight: 600,
    lineHeight: '160%',
  },

  cursor: 'pointer'
})