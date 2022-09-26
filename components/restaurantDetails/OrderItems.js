import { View, Text } from 'react-native';
import React from 'react';

export default function OrderItems({item}) {
    const{ title, price } = item;
  return (
    <View style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 20,
        borderBottomWidth:1,
        borderBottomColor:"#999",
    }}>
      <Text style={{fontSize:16, fontWeight:"600"}}>{title}</Text>
      <Text style={{opacity:0.6, fontSize:16}}>{price}</Text>
    </View>
  );
}