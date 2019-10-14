import styled from 'styled-components/native'
import TargetButton from '~/components/UI/TargetButton'

export const Container = styled.View`
  width: 100%;
  align-self: stretch;
  height: 60px;
  background-color: transparent;
  margin-bottom: ${({theme}) => theme.metrics.min}px;
`

export const Categoria = styled(TargetButton)`
  justify-content: center;
  align-items: center;
  margin-right: ${({theme}) => theme.metrics.max}px;
`
export const Label = styled.Text`
  font-size: 14px;
  font-weight: bold;
  color: ${({theme, active}) =>
    active ? theme.hsl.darker : theme.hex.darkTransparent};
  text-align: center;
  margin-bottom: 7px;
`

export const Dot = styled.View`
  height: 6px;
  width: 6px;
  background-color: ${({theme, active}) =>
    active ? theme.hsl.purple : theme.hex.darkTransparent};
  border-radius: 3px;
`
