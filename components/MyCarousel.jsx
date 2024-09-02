import React, { useRef, useState } from 'react';
import { View, Dimensions, FlatList, Image, Animated} from 'react-native';

const { width: screenWidth } = Dimensions.get('window');

const DATA = [
  { id: 1, image: 'https://th.bing.com/th/id/OIP.cO9GzD-RGZ_TQhTwe6NuxAHaDe?rs=1&pid=ImgDetMain', title: 'Image 1' },
  { id: 2, image: 'https://th.bing.com/th/id/OIP.bvQymCB_rISHNTv-8HC-8gHaE9?rs=1&pid=ImgDetMain', title: 'Image 2' },
  { id: 3, image: 'https://management.ind.in/img/i/Central-Library-IIT-Delhi-Hauz-Khas.jpg', title: 'Image 3' },
  { id: 4, image: 'https://home.iitd.ac.in/images/for-faculty/lib2.jpg', title: 'Image 4' },
  // Add more image objects as needed
];

const MyCarousel = () => {

  const [translateX, setTranslateX] = useState(new Animated.Value(0));
  const carouselRef = useRef(null);

  const handleScroll = (event) => {
    const { contentOffset: { x } } = event.nativeEvent;
    setTranslateX(new Animated.Value(-x));
  };

  const renderItem = ({ item }) => (
    <View style={{ width: screenWidth, marginHorizontal: 5 }}>
      <Image source={{ uri: item.image }} style={{ width: '100%', height: 200 }} />
    </View>
  );

  return (
    <View style={{ flexDirection: 'row' }}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default MyCarousel;