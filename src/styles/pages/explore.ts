import { styled } from '..'

export const ExploreContainer = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '6rem',
  marginTop: '-2rem',
  height: '100vh'
})

export const ExploreMainContainer = styled('main', {
  width: '70%',
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
  gap: '3.375rem'
})

export const ExploreHeader = styled('header', {
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',

  h2: {
    display: 'flex',
    alignItems: 'center',
    gap: '.75rem'
  }
})

export const Form = styled('form', {
  border: '1px solid $gray500',
  borderRadius: '4px',
  padding: '0.875rem 1.25rem',
  width: '25rem',
  transition: 'all .2s',

  '&:focus-within': {
    borderColor: '$green100'
  }
})

export const SearchInput = styled('input', {
  background: 'transparent',
  width: '100%',
  outline: 0,
  color: '$gray200',
  border: 'none',
  fontSize: '14px',
  // padding: '0.875rem 1.25rem',

  '&::placeholder': {
    color: '$gray400',
    fontWeight: '$regular',
    lineHeight: '160%'
  }
})

export const ExploreCategoriesBooksContainer = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '.75rem'
})

export const Category = styled('div', {
  borderRadius: '999px',
  border: '1px solid $purple100',
  color: '$gray100',

  textAlign: 'center',
  transition: 'all .2s',
  padding: '.55rem 1rem',
  cursor: 'pointer',

  '&:hover': {
    background: '$purple200',
    paddingInline: '1.5rem'
  },

  '&.active': {
    borderColor: '$purple200',
    background: '$purple200',
  }
})

export const BooksContainer = styled('div', {
  width: '100%',
  display: 'grid',
  gridTemplateColumns: '1fr 1fr 1fr',
  gap: '1.25rem'
})

