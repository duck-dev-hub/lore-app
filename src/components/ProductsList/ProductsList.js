import React from 'react'
import styled from 'styled-components/native'
import {Dimensions} from 'react-native'

import {shadow} from '~/theme/shadow'
import Header from '~/components/Header/Header'

const {width} = Dimensions.get('window')

const List = styled.FlatList.attrs({
  contentContainerStyle: {
    paddingTop: 0,
    paddingLeft: 20,
    paddingRight: 20
  },
  numColumns: 2,
  columnWrapperStyle: {
    justifyContent: 'space-between'
  }
})``

const Product = styled.TouchableOpacity.attrs({
  activeOpacity: 0.6
})`
  margin-bottom: ${({theme}) => theme.metrics.max}px;
`

const ProductContainer = styled.View`
  background-color: ${({theme}) => theme.hsl.white};
  border-radius: ${({theme}) => theme.metrics.radius}px;
  width: ${width / 2 - 30}px;
  height: auto;
  padding: ${({theme}) => theme.metrics.min}px;
`

const Image = styled.Image.attrs({
  style: {
    resizeMode: 'stretch'
  }
})`
  height: 140px;
`

const Footer = styled.View`
  align-items: center;
  padding-top: ${({theme}) => theme.metrics.min / 2}px;
`

const Name = styled.Text.attrs({
  numberOfLines: 1
})`
  font-size: 10px;
  font-weight: bold;
  color: ${({theme}) => theme.hsl.darker};
  text-align: center;
  margin-bottom: ${({theme}) => theme.metrics.min / 2}px;
  max-width: 100px;
`

const Price = styled(Name)`
  color: ${({theme}) => theme.hsl.orange};
  margin-bottom: 0;
`

const ProductsList = ({data}) => (
  <List
    data={data}
    keyExtractor={item => String(item.id)}
    renderItem={({item}) => (
      <Product>
        <ProductContainer style={shadow}>
          <Image source={{uri: item.image}} />
          <Footer>
            <Name>{item.name}</Name>
            <Price>R$ {item.price}</Price>
          </Footer>
        </ProductContainer>
      </Product>
    )}
    ListHeaderComponent={Header}
  />
)

export default ProductsList
