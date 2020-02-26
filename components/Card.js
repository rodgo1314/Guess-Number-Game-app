import React from 'react';
import {View,Text,StyleSheet} from 'react-native';




const Card = props => {
    return <View style={{...styles.card, ...props.style}}>{props.children}</View>
};                                       //will overide new styles  // that are added over component from the outside. 

                                       



const styles = StyleSheet.create({

    card:{
        shadowColor: 'black',      
        shadowOffset:{width:0,height:2},  //the shadow props only work on iOS
        shadowRadius:6,
        shadowOpacity:0.26,
        elevation:8, //this only works on andriod
        backgroundColor:'white',
        padding: 20,
        borderRadius:10
    }

});

export default Card;

