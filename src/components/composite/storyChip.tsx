import { Pressable, StyleSheet, Text } from "react-native";
import { colors } from "../../theme";
import Avatar from "../base/avatar";

type Props = { name: string; color: string; online?: boolean };

export default function StoryChip({ name, color, online }: Props) {
  return (
    <Pressable
      style={(s: any) => [
        styles.chip,
        (s.pressed || s.hovered) && styles.active,
      ]}
    >
      <Avatar name={name} color={color} size={32} online={online} />
      <Text style={styles.name}>{name}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  chip: {
    width: 80,
    height: 80,
    borderRadius: 28,
    backgroundColor: colors.chip,
    alignItems: "center",
    justifyContent: "center",
    gap: 6,
  },
  active: { backgroundColor: colors.chipActive },
  name: { fontSize: 13, fontWeight: "600", color: colors.textDark },
});
