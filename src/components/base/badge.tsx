import { StyleSheet, Text, View } from "react-native";
import { colors } from "../../theme";

export default function Badge({
  count,
  size = 20,
}: {
  count: number;
  size?: number;
}) {
  return (
    <View
      style={[
        styles.badge,
        { width: size, height: size, borderRadius: size / 2 },
      ]}
    >
      <Text style={styles.text}>{count}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  badge: {
    backgroundColor: colors.badge,
    borderWidth: 1,
    borderColor: "#2B2B2B",
    alignItems: "center",
    justifyContent: "center",
  },
  text: { fontSize: 10, fontWeight: "600", color: colors.textDark },
});
