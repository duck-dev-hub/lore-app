import React from 'react'
import {FlatList} from 'react-native'

import {Container, Categoria, Label, Dot} from './styles'

import tmp from './tmp'

const BottomBar = () => (
  <Container>
    <FlatList
      data={tmp}
      keyExtractor={item => String(item.id)}
      renderItem={({item, index}) => (
        <Categoria>
          <Label active={index === 0}>{item.title}</Label>
          <Dot active={index === 0} />
        </Categoria>
      )}
      horizontal={true}
      showsHorizontalScrollIndicator={false}
    />
  </Container>
)

export default BottomBar
