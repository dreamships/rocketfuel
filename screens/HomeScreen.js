import { 
    Text, 
    View, 
    ImageBackground, 
    StyleSheet,
    Pressable 
} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const HomeScreen = ({props}) => {
    return(
        <View>
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

const Tab = createBottomTabNavigator();

const LoginScreen = () => {
    const tabBarOptions = {
        activeBackgroundColor: '#5637DD',
        inactiveBackgroundColor: '#CEC8FF',
        activeTintColor: '#fff',
        inactiveTintColor: '#808080',
        labelStyle: { fontSize: 16 }
    };

    return (
        <Tab.Navigator tabBarOptions={tabBarOptions}>
            <Tab.Screen
                name='Login'
                component={LoginTab}
                options={{
                    tabBarIcon: (props) => {
                        return (
                            <Icon
                                name='sign-in'
                                type='font-awesome'
                                color={props.color}
                            />
                        );
                    }
                }}
            />
            <Tab.Screen
                name='Register'
                component={RegisterTab}
                options={{
                    tabBarIcon: (props) => {
                        return (
                            <Icon
                                name='user-plus'
                                type='font-awesome'
                                color={props.color}
                            />
                        );
                    }
                }}
            />
        </Tab.Navigator>
    );
};

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: 850,
        resizeMode: 'cover',
        justifyContent: 'center'
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
    }
});

export default HomeScreen;