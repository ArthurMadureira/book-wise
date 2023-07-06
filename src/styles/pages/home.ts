import { styled } from '..'
import Link from 'next/link'

export const HomeContainer = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '6rem',
  marginTop: '-2rem',
  height: '100vh'
})

// SideBar

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

// Home Main Content

export const HomeMainContainer = styled('div', {
  display: 'flex',
  alignItems: 'flex-start',
  gap: '4rem',
  width: '100%',
  height: '100%',
  marginTop: '184px',
  justifyContent: 'center'
})

export const HomeFeedContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  gap: '1rem'
})

export const HomePostsFeedContainer = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
  gap: '.72rem',
  overflow: 'hidden',
  scrollbarColor: 'transparent',

  // maxHeight: '80%',
})

// Popular Books Content

export const PopularBooksContainer = styled('div', {
  width: '20.25rem',
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem'
})

export const PopularBooksHeader = styled('header', {
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',

  a: {
    color: '$purple100',
    textDecoration: 'none',
    fontWeight: '$bold',
    transition: 'all .2s',

    '&:hover': {
      filter: 'brightness(.8)'
    }
  }
})

export const PopularBooksList = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '.75rem'
})

// export const PopularBook = styled('div', {
//   width: '100%',
//   height: '8.125rem',
//   display: 'flex',
//   gap: '1.25rem',

//   background: '$gray700',
//   borderRadius: '8px',
//   padding: '1.25rem'
// })

// export const PopularBookInfos = styled('div', {
//   display: 'flex',
//   flexDirection: 'column',
//   alignItems: 'flex-start',
//   gap: '2.125rem'
// })

// export const PopularBookTitle = styled('div', {
//   display: 'flex',
//   flexDirection: 'column',
//   alignItems: 'flex-start',
//   gap: '.2rem',

//   h3: {
//     fontSize: '1rem',
//   },

//   span: {
//     fontSize: '.875rem',
//     color: '$gray400'
//   }
// })
