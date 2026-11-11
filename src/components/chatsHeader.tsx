import { StyleSheet, Text, View } from 'react-native';
import { stories } from '../data/chats';
import { colors } from '../theme';
import IconButton from './iconButton';
import StoryChip from './storyChip';

export default function ChatsHeader() {
  return (
    <View style={styles.card}>
      <View style={styles.topRow}>
        <IconButton label="<" />
        <Text style={styles.title}>Chats</Text>
        <IconButton label="P" badgeCount={6} />
      </View>
      <View style={styles.chips}>
        {stories.map((s) => <StoryChip key={s.id} name={s.name} color={s.color} online={s.online} />)}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: { backgroundColor: colors.headerCard, borderRadius: 32, padding: 16, gap: 24 },
  topRow: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' },
  title: { fontSize: 18, fontWeight: '600', color: colors.textDark },
  chips: { flexDirection: 'row', justifyContent: 'space-between' },
});