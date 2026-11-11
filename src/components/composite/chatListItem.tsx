import { ReactNode } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { colors } from "../../theme";
import Badge from "../base/badge";

type Props = {
  avatar: ReactNode;
  name: string;
  preview: string;
  time: string;
  unread?: number;
  voice?: boolean;
};

export default function ChatListItem({
  avatar,
  name,
  preview,
  time,
  unread,
  voice,
}: Props) {
  return (
    <Pressable
      style={(s: any) => [
        styles.row,
        (s.pressed || s.hovered) && styles.active,
      ]}
    >
      {avatar}
      <View style={styles.body}>
        <Text style={styles.name}>{name}</Text>
        <View style={styles.previewRow}>
          {voice && <View style={styles.voiceDot} />}
          <Text style={styles.preview} numberOfLines={2}>
            {preview}
          </Text>
        </View>
      </View>
      <View style={styles.meta}>
        <Text style={styles.time}>{time}</Text>
        {unread ? <Badge count={unread} /> : null}
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    alignItems: "center",
    gap: 16,
    paddingVertical: 10,
    borderRadius: 20,
  },
  active: { backgroundColor: colors.rowActive },
  body: { flex: 1 },
  name: { fontSize: 17, fontWeight: "600", color: colors.textDark },
  previewRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    marginTop: 4,
  },
  voiceDot: {
    width: 14,
    height: 14,
    borderRadius: 7,
    backgroundColor: colors.textDark,
  },
  preview: { flexShrink: 1, fontSize: 13, color: colors.textMuted },
  meta: { alignItems: "flex-end", gap: 8, alignSelf: "stretch", paddingTop: 6 },
  time: { fontSize: 12, color: colors.textMuted },
});
