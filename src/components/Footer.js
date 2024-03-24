import { View, Text, StyleSheet } from 'react-native';

export default function Footer() {
    return (
        <View style={styles.container}>
            <Text>Todo List App</Text>
            <Text>by: Farhan</Text>
            <Text>{new Date().toDateString()}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginHorizontal: 20,
        marginTop: 2,
        backgroundColor: '#F0EAD6',
        padding: 10,
    },
});