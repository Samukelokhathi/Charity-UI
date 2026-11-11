import { ScrollView, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Avatar from '../components/avatar';
import ChatListItem from '../components/chatListItem';
import ChatsHeader from '../components/chatsHeader';
import GroupAvatarCluster from '../components/groupAvatarCluster';
import SectionCard from '../components/sectionCard';
import { groupChat, recentChats } from '../data/chats';
import { colors } from '../theme';

export default function ChatsScreen() {
  return (
    <SafeAreaView style={styles.screen}>
      <ScrollView contentContainerStyle={styles.content}>
        <ChatsHeader />
        <SectionCard title="Recent Chat">
          {recentChats.map((c) => (
            <ChatListItem
              key={c.id}
              avatar={<Avatar name={c.name} color={c.color} online={c.online} />}
              name={c.name} preview={c.preview} time={c.time} unread={c.unread} voice={c.voice}
            />
          ))}
        </SectionCard>
        <SectionCard title="Group Chat" backgroundColor={colors.groupCard}>
          <ChatListItem avatar={<GroupAvatarCluster />} {...groupChat} />
        </SectionCard>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: colors.screen },
  content: { padding: 12, gap: 12 },
});