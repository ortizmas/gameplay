import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    input: {
        height: 20,
        width: 200,
        borderBottomWidth: 2,
    },
    image: {
        width: '100%',
        height: 360,
    },
    content: {
        marginTop: -180,
        paddingHorizontal: 50
    },
    title: {
        color: theme.colors.heading,
        textAlign: 'center',
        fontSize: 30,
        marginBottom: 16,
        fontFamily: theme.fonts.title700,
        lineHeight: 30
    },
    subtitle: {
        color: theme.colors.heading,
        textAlign: 'center',
        fontSize: 15,
        marginBottom: 34,
        fontFamily: theme.fonts.title500,
        lineHeight: 25
    }
})