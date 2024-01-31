import {StyleSheet, Text, TouchableOpacity, View, Image} from 'react-native';
import React from 'react';

type ProductCardProps = {
  image: string;
  title: string;
  category: string;
  rating: number;
  price: number;
  discountPercentage: number;
  style?: object;
  onPress: () => void;
};

const ProductCard = (props: ProductCardProps) => {
  return (
    <TouchableOpacity
      style={{
        ...styles.productCard,
        ...props.style,
      }}
      onPress={props.onPress}>
      <View style={styles.imageView}>
        <Image style={styles.image} source={{uri: props.image}} />
      </View>
      <View style={styles.TContainer}>
        <Text style={styles.title} numberOfLines={1}>
          {props.title}
        </Text>
        <Text style={styles.text}>
          <Text style={styles.fieldTitle}>Category:</Text>
          {props.category}
        </Text>
        <Text style={styles.text}>
          <Text style={styles.fieldTitle}>Rating: </Text>
          {props.rating}
        </Text>
        <Text style={{...styles.text, fontSize: 16, fontWeight: 'bold'}}>
          <Text style={styles.fieldTitle}>Price: ₹</Text>
          {props.price}
        </Text>
        <Text style={styles.text}>
          <Text style={styles.fieldTitle}>Discount Percentage: </Text>
          {props.discountPercentage}%
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default ProductCard;

const styles = StyleSheet.create({
  productCard: {
    height: 150,
    width: '100%',
    borderWidth: 2,
    // borderColor: 'purple',
    backgroundColor: 'white',
    padding: 10,
    flexDirection: 'row',
    borderRadius: 4,
    alignItems: 'center',
  },
  TContainer: {
    width: '70%',
  },
  imageView: {
    width: '30%',
  },
  image: {
    height: 90,
    width: 90,
    borderRadius: 45,
    marginRight: 16,
    alignSelf: 'center',
    borderWidth: 2,
    borderColor: 'yellow',
  },
  title: {
    fontSize: 24,
    color: 'black',
    // marginTop: 2,
    // marginBottom: 4,
    fontWeight: 'bold',
  },
  fieldTitle: {
    fontSize: 16,
    color: 'black',
    fontWeight: 'bold',
  },
  text: {
    fontSize: 16,
    color: 'black',
  },
});
