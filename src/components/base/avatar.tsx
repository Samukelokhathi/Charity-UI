import { StyleSheet, Text, View } from "react-native";
import { colors } from "../../theme";

type Props = { name: string; color: string; size?: number; online?: boolean };

export default function Avatar({ name, color, size = 60, online }: Props) {
  const dot = size * 0.26;
  return (
    <View style={{ width: size, height: size }}>
      <View
        style={[
          styles.circle,
          {
            width: size,
            height: size,
            borderRadius: size / 2,
            backgroundColor: color,
          },
        ]}
      >
        <Text style={[styles.initial, { fontSize: size * 0.42 }]}>
          {name[0]}
        </Text>
      </View>
      {online && (
        <View
          style={[
            styles.dot,
            {
              width: dot,
              height: dot,
              borderRadius: dot / 2,
              right: 0,
              top: 0,
            },
          ]}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  circle: { alignItems: "center", justifyContent: "center" },
  initial: { fontWeight: "700", color: colors.avatarText },
  dot: {
    position: "absolute",
    backgroundColor: colors.online,
    borderWidth: 2,
    borderColor: "#fff",
  },
});
