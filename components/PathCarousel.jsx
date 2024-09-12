import React, { useRef, useState } from 'react';
import { View, Dimensions, FlatList, Image, Animated} from 'react-native';

const { width: screenWidth } = Dimensions.get('window');

const Data = [
  { id: 1, image: 'https://home.iitd.ac.in/images/for-faculty/lib2.jpg', title: 'Image 1' },
  { id: 2, image: 'https://home.iitd.ac.in/images/for-faculty/lib2.jpg', title: 'Image 2' },
  { id: 3, image: 'https://home.iitd.ac.in/images/for-faculty/lib2.jpg', title: 'Image 3' },
  { id: 4, image: 'https://home.iitd.ac.in/images/for-faculty/lib2.jpg', title: 'Image 4' },
  { id: 5, image: 'https://library.iitd.ac.in/staff-images/app-images/1.png', title: 'Image 5' },
  // Add more image objects as needed
];

const PathCarousel = () => {

  const renderItem = ({ item }) => (
    <View style={{ width: screenWidth, marginHorizontal: 5, backgroundColor:'#ccc' }}>
      {/* <Image source={require(`${item.image}`)} style={{ width: '100%', height: 200 }} /> */}
      <Image source={{ uri: item.image }} style={{ width: '100%', height: 200 }} />
    </View>
  );

  return (
    <View style={{ flexDirection: 'row' }}>
      <FlatList
        data={Data}
        renderItem={renderItem}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default PathCarousel;