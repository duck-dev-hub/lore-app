import styled from 'styled-components/native'

const TargetButton = styled.TouchableOpacity.attrs({
  hitSlop: {top: 5, left: 5, right: 5, bottom: 5},
  activeOpacity: 0.8
})``

export default TargetButton
