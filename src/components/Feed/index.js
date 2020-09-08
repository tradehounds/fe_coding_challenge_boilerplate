import React from 'react'
import {
  FlatList,
  StyleSheet,
  ActivityIndicator,
} from 'react-native'
import { fetchFeedData } from '../../features/feed/redux'
import { useDispatch, useSelector } from 'react-redux'
import { Post } from './components'

export function Feed() {
  const dispatch = useDispatch()
  const { data } = useSelector(({ feed }) => feed)

  React.useEffect(() => {
    dispatch(fetchFeedData())
  }, [])

  function renderItem({ item }) {
    return (
      <Post data={item} />
    )
  }

  function keyExtractor(item) {
    return `feed_post_${item.id}`
  }

  return (
    <FlatList
      data={data}
      keyExtractor={keyExtractor}
      style={styles.container}
      renderItem={renderItem}
      ListEmptyComponent={<ActivityIndicator />}
    />
  )
}

const styles = StyleSheet.create({
  container: {}
})