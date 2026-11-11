import { ReactNode } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { colors } from '../theme';

type Props = { title: string; backgroundColor?: string; children: ReactNode };

export default function SectionCard({ title, backgroundColor = colors.recentCard, children }: Props) {
  return (
    <View style={[styles.card, { backgroundColor }]}>
      <Text style={styles.title}>{title}</Text>
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  card: { borderRadius: 32, padding: 20 },
  title: { fontSize: 13, color: colors.textLabel, marginBottom: 12 },
});