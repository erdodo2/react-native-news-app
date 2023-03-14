import { View, Text } from 'react-native'
export default function NewsList(): JSX.Element {
    return (
        <View className="flex flex-col px-5 mt-5">
            <Text className="text-2xl font-[600] dark:text-white">Home News</Text>

            <View className="flex flex-row h-screen   mt-5">
                <View className="flex flex-col basis-1/2">
                    <View className="h-10 border"></View>
                    <View className="h-10 border"></View>
                </View>
                <View className="flex flex-col basis-1/2">
                    <View className="h-[100] border"></View>
                </View>

            </View>

        </View>
    )
}
