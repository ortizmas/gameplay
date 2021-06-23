import React, { useState } from 'react';
import { View , FlatList, Text} from 'react-native';

import { CategorySelect } from '../../components/CategorySelect';
import { Profile } from '../../components/Profile';
import { Appoinments } from '../../components/Appoinments';

import { ListHeader } from '../../components/ListHeader';
import { ButtonAdd } from '../../components/ButtonAdd';

import { styles } from './styles';

export function Home() {

    const [ category, setCategory ] = useState('')

    const appoinments = [
        {
            id: '1',
            guild: {
                id: '1',
                name: 'Lendários',
                icon: null,
                owner: true
            },
            category: '1',
            date: '22/06 ás 20:40h',
            description: 'lorem input ascs lorem disclsajjjass apresentation nlw react native'
        },
        {
            id: '2',
            guild: {
                id: '1',
                name: 'Lendários',
                icon: null,
                owner: true
            },
            category: '1',
            date: '22/06 ás 20:40h',
            description: 'lorem input ascs lorem disclsajjjass apresentation nlw react native'
        }
    ]

    function handleCategorySelect(categoryId:string) {
        categoryId === category ? setCategory('') : setCategory(categoryId);
    }

    return(
        <View>
            <View style={styles.header}>
                <Profile />
                <ButtonAdd />
            </View>

            <View>
                <CategorySelect 
                    categorySelected={category}
                    setCategory={handleCategorySelect}
                />

                <View style={styles.content}>
                    <ListHeader
                        title="Partidas agendadas"
                        subtitle="Total 6"
                    />

                    <FlatList 
                        data={appoinments}
                        keyExtractor={item => item.id}
                        renderItem={({item}) => (
                            <Appoinments data={item}/>
                        )}
                        style={styles.matches}
                        showsVerticalScrollIndicator={false}
                    />
                </View>
            </View>
        </View>
    );
}