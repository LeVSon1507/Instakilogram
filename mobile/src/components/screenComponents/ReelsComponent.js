import React, { useState } from 'react';
import { View, Text } from 'react-native';
import Swiper from 'react-native-swiper';
import { videoData } from './Database';
import SingleReel from './SingleReel';

const ReelsComponent = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleChangeIndexValue = (index) => {
    setCurrentIndex(index);
  };

  return (
    <View style={{ flex: 1 }}>
      <Swiper
        loop={false}
        index={currentIndex}
        onIndexChanged={handleChangeIndexValue}
        showsPagination={false}
      >
        {videoData.map((item, index) => (
          <SingleReel item={item} index={index} currentIndex={currentIndex} key={index.toString()} />
        ))}
      </Swiper>
    </View>
  );
};

export default ReelsComponent;
