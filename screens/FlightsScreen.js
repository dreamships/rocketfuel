import { View, Text, StyleSheet, Image } from 'react-native';

const Flights = (props) => {
    return (
        <View style={styles.container}>
            <Image 
                style={styles.image} 
                source={require('../assets/images/sicily2.webp')} 
                />
            <Text style={styles.location}>Taormina, Sicily, Italy</Text>
            <Text style={styles.price}>Roundtrip from Chicago, 7 Days / $548</Text>

            

            
        </View>
    )
};

const styles = StyleSheet.create ({
    container: {
        marginTop: 60,
        marginLeft: 20,
        marginRight: 20
    },
    image: {
        width: '100%',
        height: 300,
        resizeMode: 'cover',
        borderRadius: 10,
    },
    location: {
        marginVertical: 10,
        color: '#5b5b5b',
        fontSize: 20,

    },
    price: {

    }

});

export default Flights;