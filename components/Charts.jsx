import { LineChart } from 'react-native-chart-kit';

import { Dimensions, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Charts = ( {datas}) => {
    const screenWidth = Dimensions.get('window').width;

    const chartConfig = {
        backgroundGradientFrom: "#1E2923",
        backgroundGradientFromOpacity: 0,
        backgroundGradientTo: "#08130D",
        backgroundGradientToOpacity: 0.5,
        color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
        strokeWidth: 2, // optional, default 3
        barPercentage: 0.5,
        useShadowColorFromDataset: false // optional
    };
    return (
        <LineChart
            data={datas}
            width={screenWidth /1.5}
            height={320}
            chartConfig={chartConfig}
            bezier
            style={{
                marginVertical: 8,
                borderRadius: 16
            }}
        />
    )
}

export default Charts

const styles = StyleSheet.create({})