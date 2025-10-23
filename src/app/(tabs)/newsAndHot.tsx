import { View, Text, FlatList, StyleSheet } from "react-native";
import newAndHot from '@assets/data/newAndHot.json';
import MediaListItem from "@/components/MediaListItem";
import { SafeAreaView } from "react-native-safe-area-context";
import Feather from '@expo/vector-icons/Feather';

export default function NewsAndHot() {
  return (
    <SafeAreaView>
      <View style={styles.headerContainer}>
        <View style={styles.headerTitleContainer}>
          <Text style={styles.headerTitle}>New and Hot</Text>
          <Feather name="search" size={22} color="white" />
        </View>
      </View>
      <FlatList
        data={newAndHot}
        renderItem={({ item: verticalListItem }) => (
          <View>
            <Text style={styles.sectionTitle}>{verticalListItem.title}</Text>
            <FlatList
              horizontal
              data={verticalListItem.data}
              renderItem={({ item: horizontalListItem }) => <MediaListItem mediaItem={horizontalListItem} />}
            />
          </View>
        )}
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  sectionTitle: {
    fontSize: 17,
    color: 'white',
    fontWeight: '700',
    paddingVertical: 10
  },
  headerTitle: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  headerTitleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  headerContainer: {
    marginHorizontal: 10,
    gap: 10
  }
});