import { Text, StyleSheet } from 'react-native'

export const Header = () => (
  <Text style={styles.header}>Todo list</Text>
)

const styles = StyleSheet.create({
  header: {
    fontSize: 24,
    textAlign: 'center',
    paddingBottom: 20,
  },
})
