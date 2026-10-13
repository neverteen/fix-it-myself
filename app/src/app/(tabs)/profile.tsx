import { View, Text } from 'react-native';

export default function ProfileScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#F7F8FA' }}>
      <Text style={{ fontSize: 24, fontWeight: '700', color: '#1F2A44' }}>Profile</Text>
    </View>
  );
}