import { SafeAreaView, Text, StyleSheet, View, Button } from 'react-native';
import MainLayout from '../layouts/MainLayout';

export default function AboutScreen({navigation}) {
    return (
        <MainLayout>
            <SafeAreaView style={styles.container}>
                <Button title="Home" onPress={() => navigation.navigate('Home')} />
                <Text>Todo List App</Text>
                <Text>by: Farhan</Text>
                <Text>{new Date().toDateString()}</Text>
                </SafeAreaView>
        </MainLayout>
        
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        marginTop: 30,
    },
    
});