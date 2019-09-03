export const alignContainer = option => {
  let style = {
    marginRight: 'auto'
  }
  switch (option) {
    case 'left':
      return style
    case 'right':
      return {
        marginLeft: 'auto'
      };
    case 'center':
      return {
        margin: 'auto'
      }
  }
}

export const containerWidth = option => {
  switch (option) {
    case 'ten':
      return {
        width: '10%'
      }
    case 'twenty':
      return {
        width: '20%'
      }
    case 'thirty':
      return {
        width: '30%'
      };
      case 'forty':
      return {
        width: '40%'
      }
    case 'fifty':
      return {
        width: '50%'
      }
    case 'sixty':
      return {
        width: '60%'
      };
      case 'seventy':
      return {
        width: '70%'
      }
    case 'eighty':
      return {
        width: '80%'
      }
    case 'ninety':
      return {
        width: '90%'
      };
    case 'full-page':
      return {
        width: '100%'
      }
  }
}

export const aligntext = option => ({
  textAlign: option
})