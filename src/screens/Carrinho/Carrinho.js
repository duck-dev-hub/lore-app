import React, {Component} from 'react'

import Container from '~/components/UI/Container'
import TargetButton from '~/components/UI/TargetButton'
import {X} from '~/components/UI/Icons'
import {shadowMax} from '~/theme/shadow'

import tmp from './tmp'
import {
  List,
  Product,
  Image,
  Section,
  Brand,
  Name,
  Price,
  Quantidade,
  Top,
  SubTotal,
  TotalLabel,
  TotalPrice,
  Target,
  FinalizarCompra,
  FinalizarText
} from './styles'

class Carrinho extends Component {
  render() {
    return (
      <Container>
        <List
          render={tmp}
          keyExtractor={item => String(item.id)}
          renderItem={({item}) => (
            <Product>
              <Image source={{uri: item.image}} />

              <Section>
                <Brand>{item.brand}</Brand>
                <Name>{item.name}</Name>
                <Price>{item.price}</Price>
              </Section>

              <Quantidade value={item.quantidade} />
              <Top>
                <TargetButton>
                  <X />
                </TargetButton>
              </Top>
            </Product>
          )}
        />
        <SubTotal>
          <TotalLabel>Total:</TotalLabel>
          <TotalPrice>R$ 00,00</TotalPrice>

          <Target>
            <FinalizarCompra style={shadowMax}>
              <FinalizarText>Finalizar compra</FinalizarText>
            </FinalizarCompra>
          </Target>
        </SubTotal>
      </Container>
    )
  }
}

export default Carrinho
