import { Pressable, StyleSheet, Text, View } from "react-native";
import { colors } from "../../theme";
import Badge from "./badge";

type Props = { label: string; badgeCount?: number };

export default function IconButton({ label, badgeCount }: Props) {
  return (
    <View>
      <Pressable
        style={(s: any) => [
          styles.button,
          (s.pressed || s.hovered) && styles.active,
        ]}
      >
        <Text style={styles.label}>{label}</Text>
      </Pressable>
      {badgeCount ? (
        <View style={styles.badge}>
          <Badge count={badgeCount} />
        </View>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: colors.button,
    alignItems: "center",
    justifyContent: "center",
  },
  active: { backgroundColor: colors.buttonActive },
  label: { fontSize: 18, fontWeight: "700", color: colors.textDark },
  badge: { position: "absolute", top: -6, right: -6 },
});
