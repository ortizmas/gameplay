import React from 'react';
import { Image } from 'react-native';

import { styles } from './styles';

export function GuildIcon() {
    const uri = 'https://pbs.twimg.com/profile_images/851128873253294085/AToKGwVG.jpg'

    return(
        <Image
            source={{ uri }}
            style={styles.image}
            resizeMode="cover"
        />
    );
}