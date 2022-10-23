import React, { useReducer, useState } from 'react';
import {
  View,
  Text,
  TextInput,
  FlatList,
  TouchableOpacity,
} from 'react-native';

import useProducts from '../../hooks/useProducts';

export type ItemsProps = {
  id: string;
  title?: string;
  check?: boolean;
};

type FlatListProductsProps = {
  index: number;
  item: ItemsProps;
};

export default function Home() {
  const [product, setProduct] = useState<string>('');
  const [state, addItem, checkItem, removeItem] = useProducts();

  return (
    <View style={{ flex: 1, paddingTop: 40 }}>
      <View style={{ alignItems: 'center' }}>
        <TextInput
          placeholder='Digite aqui'
          placeholderTextColor={'#999'}
          style={{
            width: '80%',
            height: 60,
            backgroundColor: '#cdcdcd',
            borderRadius: 8,
            paddingHorizontal: 10,
          }}
          onSubmitEditing={() => {
            addItem(product);
            setProduct('');
          }}
          onChangeText={setProduct}
          value={product}
        />
      </View>
      <View>
        <FlatList
          data={state}
          renderItem={({ index, item }: FlatListProductsProps) => (
            <View
              style={{
                width: '80%',
                height: 50,
                backgroundColor: '#cdcdcd',
                marginVertical: 10,
                borderRadius: 5,
                justifyContent: 'center',
                paddingHorizontal: 10,
              }}
            >
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}
              >
                <TouchableOpacity
                  activeOpacity={0.6}
                  onPress={() => checkItem(item.id)}
                >
                  <Text
                    style={{
                      fontSize: 18,
                      textDecorationLine: item.check ? 'line-through' : 'none',
                    }}
                  >
                    {' '}
                    {item.title}{' '}
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  activeOpacity={0.6}
                  onPress={() => removeItem(item.id)}
                >
                  <Text style={{ fontSize: 12 }}> Remover </Text>
                </TouchableOpacity>
              </View>
            </View>
          )}
          keyExtractor={(item) => item.id}
          style={{ marginTop: 20 }}
          contentContainerStyle={{ paddingLeft: 20 }}
        />
      </View>
    </View>
  );
}
