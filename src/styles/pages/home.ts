import { styled } from '..'

export const HomeContainer = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '6rem',
  marginTop: '-2rem',
  height: '100vh'
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