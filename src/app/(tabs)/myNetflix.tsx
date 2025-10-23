import { View, Text, FlatList, Image, TouchableOpacity, ScrollView } from "react-native";
import { MaterialIcons, Ionicons } from "@expo/vector-icons";
import myNetflix from '@assets/data/myNetflix.json';
import MediaListItem from "@/components/MediaListItem";

export default function ProfileScreen() {
  return (
    <ScrollView
      style={styles.body}
      contentContainerStyle={{ alignItems: "center" }}
    >
      <Image
        source={{uri: "https://dl.dropbox.com/scl/fi/1prddlqyc0km28e3zh0az/Himmel-Avatar.jpeg?rlkey=kczctne8ln8z5lsqit8tgnuxn&st=o5a5gl4u&dl=0"}}
        style={styles.image}
      />

      <Text style={styles.name}>Mark Raffy Romero</Text>

      <TouchableOpacity style={styles.manageProfileBtn}>
        <Text style={styles.manageProfileText}>Manage Profile</Text>
      </TouchableOpacity>

      <View style={styles.divider}/>

      <View style={{ width: "100%" }}>
        <TouchableOpacity style={styles.option}>
          <Ionicons name="settings-outline" size={24} color="white" />
          <Text style={styles.optionText}>App Settings</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.option}>
          <MaterialIcons name="help-outline" size={24} color="white" />
          <Text style={styles.optionText}>Help</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.option}>
          <Ionicons name="exit-outline" size={24} color="white" />
          <Text style={[styles.optionText, { color: "red" }]}>Sign Out</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.divider}/>

      <FlatList
        data={myNetflix}
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
    </ScrollView>
  );
}

const styles = {
  body: {
    flex: 1,
    backgroundColor: "black",
    padding: 20
  },
  image: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginTop: 30
  },
  name: {
    color: "white",
    fontSize: 22,
    fontWeight: "bold",
    marginVertical: 10
  },
  manageProfileBtn: {
    backgroundColor: "#2c2c2c",
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 16,
    marginBottom: 30
  },
  manageProfileText: {
    color: "white", 
    fontSize: 16
  },
  divider: {
    height: 1,
    width: "100%",
    backgroundColor: "#333",
    marginTop: 10,
    marginBottom: 20
  },
  option: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 14,
  },
  optionText: {
    color: "white",
    fontSize: 18,
    marginLeft: 15,
  },
   sectionTitle: {
    fontSize: 20,
    color: 'white',
    fontWeight: '700',
    paddingVertical: 10
  }
};
