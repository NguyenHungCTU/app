import { StyleSheet, Text, Dimensions, View } from 'react-native'
import React from 'react'
import ScreenWrapper from '../components/ScreenWrapper'
import { theme } from '../constants/theme'
import { hp } from '../helpers/common'
import { LineChart } from 'react-native-chart-kit';
import Charts from '../components/Charts'
import Backbutton from '../components/Backbutton'
const Home = () => {
    const screenWidth = Dimensions.get('window').width;

    const data = {
        labels: ["15/8", "16/8", "17/8", "18/8", "19/8", "20/8"],
        datasets: [
            {
                data: [20, 25, 28, 20, 22, 26]
            }
        ]
    };
    const data2 = {
        labels: ["15/8", "16/8", "17/8", "18/8", "19/8", "20/8"],
        datasets: [
            {
                data: [24, 17, 22, 25, 23, 21]
            }
        ]
    };

    return (
        <ScreenWrapper>
            <Backbutton router={router} />
            <View style={styles.box}>
                <View style={styles.container1}>
                    <Text style={styles.text}>Station 1</Text>
                    <Charts datas={data} />
                </View>
                <View style={styles.box2}>
                    <View style={styles.container2}>
                        <Text style={styles.text}>Solar</Text>
                        <Text style={styles.textvalue}>85%</Text>
                    </View>
                    <View style={styles.container2}>
                        <Text style={styles.text}>Battery</Text>
                        <Text style={styles.textvalue}>100%</Text>
                    </View>
                </View>
            </View>


            <View style={styles.box}>
                <View style={styles.container1}>
                    <Text style={styles.text}>Station 2</Text>
                    <Charts datas={data2} />
                </View>
                <View style={styles.box2}>
                    <View style={styles.container2}>
                        <Text style={styles.text}>Solar</Text>
                        <Text style={styles.textvalue}>88%</Text>
                    </View>
                    <View style={styles.container2}>
                        <Text style={styles.text}>Battery</Text>
                        <Text style={styles.textvalue}>100%</Text>
                    </View>
                </View>
            </View>
        </ScreenWrapper>
    )
}

export default Home

const styles = StyleSheet.create({
    box: {
        flex: 1,
        backgroundColor: theme.colors.bluef,
        margin: 5,
        borderRadius: theme.radius.xs,
        borderWidth: 2,
        borderColor: theme.colors.blued,
        // paddingHorizontal : hp(1),
        padding: 5,
        flexDirection: 'row'
    },
    box2: {
        flex: 1,
        backgroundColor: theme.colors.bluef,
        margin: 5,
        borderRadius: theme.radius.xs,
        borderWidth: 1,
        borderColor: theme.colors.blued,
        padding: 4,
        flexDirection: 'column'
    },
    container1: {
        flex: 3,
        flexDirection: 'column',
        // justifyContent : 'center',
        alignItems: 'center',
        borderRadius: theme.radius.xl,
        backgroundColor: theme.colors.blued,
    },
    container2: {
        flex: 1,
        backgroundColor: theme.colors.blued,
        borderWidth: 1,
        borderRadius: 5,
        margin: 2,
        justifyContent: 'space-evenly',
        alignItems: 'center',

    },
    text: {
        color: 'white',
        fontSize: 18,
    },
    textvalue: {
        color: theme.colors.primary,
        fontSize: 22,
        fontWeight: theme.fonts.semibold
    }

})