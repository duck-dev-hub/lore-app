import React from 'react'
import {FlatList} from 'react-native'
import {connect} from 'react-redux'

import {Container, Categoria, Label, Dot} from './styles'

const TabBar = ({active, categories}) => (
  <Container>
    <FlatList
      data={categories}
      keyExtractor={item => String(item.id)}
      renderItem={({item}) => (
        <Categoria>
          <Label active={item.id === active}>{item.title}</Label>
          <Dot active={item.id === active} />
        </Categoria>
      )}
      horizontal={true}
      showsHorizontalScrollIndicator={false}
    />
  </Container>
)

const mapStateToProps = state => ({
  categories: state.shop.categories,
  active: state.shop.active
})

export default connect(mapStateToProps)(TabBar)
