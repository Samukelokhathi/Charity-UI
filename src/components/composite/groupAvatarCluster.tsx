import { StyleSheet, Text, View } from "react-native";
import Avatar from "./base/avatar";

export default function GroupAvatarCluster({ extra = 6 }: { extra?: number }) {
  return (
    <View style={styles.box}>
      <View style={{ position: "absolute", left: 6, top: 6 }}>
        <Avatar name="Kate" color="#F3D9A6" size={22} />
      </View>
      <View style={{ position: "absolute", left: 38, top: 4 }}>
        <Avatar name="Ann" color="#B9A2E8" size={22} />
      </View>
      <View style={{ position: "absolute", left: 4, top: 36 }}>
        <Avatar name="Mike" color="#8FD9A0" size={22} />
      </View>
      <View style={styles.plus}>
        <Text style={styles.plusText}>+{extra}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  box: { width: 64, height: 64, borderRadius: 20, backgroundColor: "#C9E6F2" },
  plus: {
    position: "absolute",
    left: 26,
    top: 28,
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: "#A9D3E8",
    alignItems: "center",
    justifyContent: "center",
  },
  plusText: { fontSize: 12, fontWeight: "700", color: "#1E1E1E" },
});
