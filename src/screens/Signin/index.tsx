import React, { useState } from 'react';
import { Text, View, Image } from 'react-native';

import { ButtonIcon } from '../../components/ButtonIcon';
import IllustrationImg from '../../assets/illustration.png';
import { styles } from './styles';

export function SignIn() {
    const [text, setText] = useState('Eber Ortiz ');
  return (
    <View style={styles.container}>
        <Image 
            source={IllustrationImg} 
            style={styles.image}
            resizeMode="stretch"
        />

        <View style={styles.content} >
            <Text style={styles.title}>
                Conecte-se {`\n`}
                e organize suas {`\n`}
                jogadinhas
            </Text>
            <Text style={styles.subtitle}>
                Crie grupos para jogar seu games {`\n`}
                favoritos com seus amigos {`\n`}
            </Text>

            <ButtonIcon
                title="Entrar"
                activeOpacity={0.7}
            />

        </View>
    </View>
  );
}
