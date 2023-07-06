import { styled } from ".."

export const HomePostContainer = styled('div', {
  width: '38rem',
  height: '17.5rem',

  background: '$gray700',

  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  gap: '2rem',

  padding: '1.5rem',

  borderRadius: '8px',

  span: {
    fontSize: '0.875rem',
    color: '$gray400'
  }
})

export const HomePostHeader = styled('header', {
  width: '100%',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between'
})

export const PostProfileInfoContainer = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '1rem',

  img: {
    borderRadius: '50%'
  }
})

export const ProfileInfoContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '.2rem',

  h3: {
    fontSize: '1rem',
    fontWeight: '$regular',
    lineHeight: '160%'
  }
})

export const PostStar = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '.25rem'
})

export const PostInfoContainer = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '1.25rem'
})

export const PostTextContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  gap: '1.25rem',

  p: {
    color: '$gray400',
    fontSize: '.875rem',

    button: {
      fontSize: '.875rem',
      color: '$purple100',
      fontWeight: '$bold',
      cursor: 'pointer',

      transition: 'all .2s',

      '&:hover': {
        filter: 'brightness(.9)'
      }
    }
  }
})

export const PostTitleContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  gap: '.2rem'
})