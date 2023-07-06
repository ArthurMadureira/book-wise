import { styled } from ".."

export const Book = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '1.25rem',
  backgroundColor: '$gray700',
  padding: '1rem 1.25rem',
  borderRadius: '8px',
})

export const BookInfo = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  height: '100%',

  div: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    gap: '.2rem',

    h3: {
      fontSize: '16px',
      fontStyle: 'normal',
      fontWeight: 700,
      lineHeight: '140%',
      color: '$gray100'
    },

    span: {
      fontSize: '14px',
      fontStyle: 'normal',
      fontWeight: '400',
      lineHeight: '160%',

      color: '$gray400'
    }
  }
})