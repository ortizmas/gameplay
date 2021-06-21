import React, { useState } from 'react';
import { Text, View, Image, StatusBar} from 'react-native';

import IllustrationImg from '../../assets/illustration.png';
import { styles } from './styles';

export function SignIn() {
    const [text, setText] = useState('Eber Ortiz ');
  return (
    <View style={styles.container}>
        <StatusBar 
            barStyle="ligth-content"
            backgroundColor="transparent"
            translucent
        />
        <Image 
            source={IllustrationImg} 
            style={styles.image}
            resizeMode="stretch"
        />

        <View style={styles.content} >
            <Text style={styles.title}>
                Organize {`\n`}
                suas jogadinhas {`\n`}
                facilmente
            </Text>
            <Text style={styles.subtitle}>
                Crie grupos para jogar seu games {`\n`}
                favoritos com seus amigos {`\n`}
            </Text>
        </View>
    </View>
  );
}
