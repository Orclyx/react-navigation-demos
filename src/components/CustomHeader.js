import React from 'react';
import {Animated, Button, Text} from 'react-native';

const CustomHeader = (props) => {
  const {scene, previous, navigation} = props;

  const {options} = scene.descriptor;
  const title =
    options.headerTitle !== undefined
      ? options.headerTitle
      : options.title !== undefined
      ? options.title
      : scene.route.name;

  const progress = Animated.add(
    scene.progress.current,
    scene.progress.next || 0,
  );

  const opacity = progress.interpolate({
    inputRange: [0, 1, 2],
    outputRange: [0, 1, 0],
  });

  return (
    <Animated.View
      style={{
        opacity,
        ...scene.descriptor.options.headerStyle,
        paddingTop: props.insets.top,
      }}>
      {previous && <Button title="Back" onPress={navigation.goBack} />}
      <Text>{title}</Text>
    </Animated.View>
  );
};

export default CustomHeader;
