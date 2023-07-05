import { styled } from '..'

export const LoginContainer = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '14.125rem',
  // justifyContent: 'space-between',
  height: '90%'
})

export const BookWiseContainer = styled('div', {
  width: '40%',
  height: '100%',

  img: {
    maxHeight: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '0.625rem'
  }
})

export const LoginActionContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  width: '23.25rem',

  gap: 40 / 16 + "rem"
})

export const LoginTextContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '0.125rem',

  '& h2': {
    fontSize: '1.7rem',
    fontWeight: 700,
    lineHeight: '140%',
    letterSpacing: '0.2rem',
    color: '$gray100'
  },

  'p': {
    fontSize: '1rem',
    fontWeight: 400,
    lineHeight: '160%',
  }
})

export const ActionsContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
  width: '100%',
})

export const Action = styled('div', {
  width: '100%',
  backgroundColor: '$gray600',
  paddingBlock: '1.25rem',
  paddingInline: '1rem',
  borderRadius: '8px',
  fontWeight: '$bold',

  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
  gap: '1.25rem',

  transition: 'all .2s',

  'a': {
    color: '$gray100',
    textDecoration: 'none',
    display: 'flex',
    alignItems: 'center',
    gap: '1.25rem'
  },

  '&:hover': {
    filter: 'brightness(.8)'
  }
})