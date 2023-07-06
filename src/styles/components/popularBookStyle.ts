import { styled } from '../index'

export const PopularBookContent = styled('div', {
  width: '100%',
  height: '8.125rem',
  display: 'flex',
  gap: '1.25rem',

  background: '$gray700',
  borderRadius: '8px',
  padding: '1.25rem'
})

export const PopularBookInfos = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  gap: '2.125rem'
})

export const PopularBookTitle = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  gap: '.2rem',

  h3: {
    fontSize: '1rem',
  },

  span: {
    fontSize: '.875rem',
    color: '$gray400'
  }
})
