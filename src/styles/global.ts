import { globalCss } from '.'

export const globalStyles = globalCss({
  '*': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box'
  },

  body: {
    backgroundColor: '$gray800',
    '-webkit-font-smoothing': 'antialiased',
    color: '$gray200'
  },

  'body, input, button, textarea': {
    fontFamily: '$default',
    fontWeight: '$regular'
  }
})