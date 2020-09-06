import React from 'react';
import {StyleSheet, Text, View,Image} from 'react-native';
import {Card} from 'react-native-paper';


const List3=()=>
{
    return(
        <View style={styles.homeview}>
            <Card style={styles.mycard} >
                <View style={styles.cardview}>
                    
                    <Text style={{fontSize:18}}>
                        ABC School
                    </Text>
                    <Text style={{fontSize:12}}>Noida, UP</Text>
                </View>
            </Card>
            <Card style={styles.mycard} >
                <View style={styles.cardview}>
                    
                    <Text style={{fontSize:18}}>
                        Special School
                    </Text>
                    <Text style={{fontSize:12}}>RK Ashram, Delhi</Text>
                </View>
            </Card>
            <Card style={styles.mycard} >
                <View style={styles.cardview}>
                    
                    <Text style={{fontSize:18}}>
                        XYZ School
                    </Text>
                    <Text style={{fontSize:12}}>Rohini, Delhi</Text>
                </View>
            </Card>
            <Card style={styles.mycard} >
                <View style={styles.cardview}>
                    
                    <Text style={{fontSize:18}}>
                        School for special kids
                    </Text>
                    <Text style={{fontSize:12}}>Vasundhara Enclave, Delhi</Text>
                </View>
            </Card>
            
        </View>
    );  
}
const styles=StyleSheet.create
(
    {   homeview:{
        flex: 1,
        
        },
        mycard:{   
            margin:10,
        },
        cardview:{
            flexDirection:'column',
            margin: 10
        },
        
    }
);

export default List3;
