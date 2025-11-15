import { Appbar } from 'react-native-paper';

export default function CustomNavigationBar({ navigation, back }: any) {


    return (
        <Appbar.Header>
            {back ? (
                <Appbar.BackAction onPress={navigation.goBack} />
            ) : null}
            <Appbar.Content title="MD Nav Demo" />
            {!back && (
                <Appbar.Action
                    icon="arrow-right"
                    onPress={() => navigation.navigate('DetailsScreen')}
                />
            )}
        </Appbar.Header>
    );
}