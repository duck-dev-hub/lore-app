import styled from 'styled-components/native'
import theme from '~/theme'

const Loading = styled.ActivityIndicator.attrs({
  size: 16,
  color: theme.hsl.purple
})`
  margin-top: 40px;
`

export default Loading
