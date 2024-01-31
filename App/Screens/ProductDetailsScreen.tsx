import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {useRoute} from '@react-navigation/native';

const ProductDetailsScreen = () => {
  const route = useRoute();
  const {productData} = route.params;

  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{
          uri: productData.images[0],
          // uri: 'https://cdn.dummyjson.com/product-images/1/thumbnail.jpg'
        }}
      />
      <Text style={styles.title}>{productData.title}</Text>
      <Text style={styles.field}>
        <Text style={styles.fieldTitle}>Brand: </Text>
        {productData.brand}
      </Text>
      <Text style={styles.field}>
        <Text style={styles.fieldTitle}>Category: </Text>
        {productData.category}
      </Text>
      <Text style={styles.field}>
        <Text style={styles.fieldTitle}>Rating: </Text>
        {productData.rating}
      </Text>
      <Text style={styles.field} numberOfLines={3}>
        <Text style={styles.fieldTitle}>Description: </Text>
        {productData.description}
      </Text>
      <Text style={styles.field}>
        <Text style={styles.fieldTitle}>Price: ₹</Text>
        {productData.price}
      </Text>
      <Text style={styles.field}>
        <Text style={styles.fieldTitle}>Discount : </Text>
        {productData.discountPercentage}%
      </Text>
      <Text style={styles.field}>
        <Text style={styles.fieldTitle}>Stock:</Text> {productData.stock}
      </Text>
    </View>
  );
};
export default ProductDetailsScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 16,
    paddingHorizontal: 16,
    alignItems: 'center',
    backgroundColor: 'white',
  },
  image: {
    height: 400,
    width: 400,
    resizeMode: 'contain',
    // backgroundColor: 'red',
    borderWidth: 2,
    borderColor: 'black',
  },
  title: {
    marginVertical: 10,
    fontSize: 40,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 5,
    textAlign: 'center',
  },
  fieldTitle: {
    fontSize: 24,
    color: 'black',
    fontWeight: 'bold',
  },
  field: {
    fontSize: 24,
    color: 'black',
    // marginBottom: 4,
  },
});
