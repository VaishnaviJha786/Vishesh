import React from 'react';
import {StyleSheet, Text, View,Image} from 'react-native';
import {Card} from 'react-native-paper';


const List1=()=>
{
    return(
        <View style={styles.homeview}>
            <Card style={styles.mycard} >
                <View style={styles.cardview}>
                    
                    <Text style={{fontSize:18}}>
                        Life Insurance Scheme 
                    </Text>
                    
                    <Text style={{fontSize:12}}>www.li.da.gov.in</Text>
                </View>
            </Card>
            <Card style={styles.mycard} >
                <View style={styles.cardview}>
                    
                    <Text style={{fontSize:18}}>
                        Swablamban yojana
                    </Text>
                
                    <Text style={{fontSize:12}}>www.swablamban.gov.in</Text>
                </View>
            </Card>
            <Card style={styles.mycard} >
                <View style={styles.cardview}>
                    
                    <Text style={{fontSize:18}}>
                        Shashakt India
                    </Text>
                    <Text style={{fontSize:12}}>www.shashaktindia.gov.in</Text>
                </View>
            </Card>
            <Card style={styles.mycard} >
                <View style={styles.cardview}>
                    
                    <Text style={{fontSize:18}}>
                        Health Insurance 
                    </Text>
                    <Text style={{fontSize:12}}>www.healthi.da.gov.in</Text>
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

export default List1;
