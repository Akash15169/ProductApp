import React, {useState, useEffect} from 'react';
import {View, FlatList, StyleSheet} from 'react-native';
import ProductCard from '../Components/Productcard';
import {fetchProductList} from '../ApiServices/productServies';

const ProductListScreen = ({navigation}) => {
  const [data, setData] = useState();
  const [productData, setProductData] = useState();
  useEffect(() => {
    getProductDetails();
  }, []);

  useEffect(() => {
    if (productData) {
      navigation.navigate('DetailsScreen', {productData});
    }
  }, [productData]);

  const getProductDetails = async () => {
    let result = await fetchProductList();
    if (result !== null) {
      setData(result);
      console.log('Api called succesfully');
    } else {
      console.log('Error in getting product list');
    }
  };

  const navigateToDetails = productId => {
    setProductData(data.products[productId - 1]);
    // navigation.navigate('DetailsScreen', { productData });
  };
  // console.log("VVVV",data)

  return (
    <View style={styles.container}>
      {data != null && (
        <FlatList
          data={data.products}
          renderItem={({item}) => (
            <ProductCard
              image={item.thumbnail}
              title={item.title}
              category={item.category}
              rating={item.rating}
              price={item.price}
              discountPercentage={item.discountPercentage}
              style={styles.productcard}
              onPress={() => {
                navigateToDetails(item.id);
              }}
            />
          )}
        />
      )}
    </View>
  );
};

export default ProductListScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f2f2f2',
  },
  productcard: {
    marginVertical: 6,
  },
});
