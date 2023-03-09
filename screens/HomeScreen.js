import { 
    Text, 
    View, 
    ImageBackground, 
    StyleSheet,
    Pressable,
    Dimensions 
} from 'react-native';
import Fontisto from 'react-native-vector-icons/Fontisto';


const HomeScreen = (props) => {
    return(
        <View>
            <Pressable
        style={styles.searchButton}
        onPress={() => console.warn( data= 'Search Btn clicked')}
        >
            
        <Text style={styles.searchButtonText}>Where are you going?</Text> 
        <Fontisto name='search' size={25} color={'#f15454'} />
            </Pressable>   

        <ImageBackground source={require('../assets/images/airplane.jpeg')} 
                style={styles.image} 
                >
                <Text style={styles.title}>Fly</Text>
                <Text style={styles.title}>RocketFuel</Text>
                <Text style={styles.title}>Airways</Text>
                
        <Pressable
            style={styles.button}
            onPress={() => console.warn( data= 'Book Btn clicked')}
        >
        <Text style={styles.buttonText}>Book your adventure</Text>    
        </Pressable>    
        </ImageBackground>
        </View>
    )
};

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: 850,
        resizeMode: 'cover',
        justifyContent: 'center',
        marginTop: 50
    },
    title: {
        fontSize: 60,
        fontWeight: 'bold',
        color: '#fffff0',
        width: '80%',
        marginLeft: 20
    },
    button: {
        backgroundColor: '#fffff0',
        width: 200,   
        marginTop: 25,
        marginLeft: 25,
        height: 30,
        borderRadius: 10,
        justifyCenter: 'center',
        alignItems: 'center'
    },
    buttonText: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    searchButton:{
        backgroundColor: '#fffff0',   
        height: 60,
        width: Dimensions.get('screen').width - 20,
        marginHorizontal: 10,
        flexDirection: 'row',
        borderRadius: 30,
        justifyCenter: 'center',
        top: 70,
        zIndex: 100,
        position: 'absolute',
        alignItems: 'center',
    },
    searchButtonText: {
        fontSize: 20,
        fontWeight: 'bold',
        justifyContent: 'center',
        flex:0.9,
        textAlign: 'center'
    }
    
});

export default HomeScreen;