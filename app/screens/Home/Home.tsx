// React
import React from 'react'
import { Icon } from "@rneui/themed";
// React Native
import { RN } from '../../components'

// Styles
import { homeStyles } from './home-styles'

const Home = () => {

    const data = [
        {
            id: 1,
            title: "workshop(1)",
            info: "1.2 MB | 25/03/22",
            img: require('../../assets/mp3-icon.png'),
        },
        {
            id: 2,
            title: "soliq_05-03-2022.pdf",
            info: "0 B | 05/03/22",
            img: require('../../assets/pdf.png'),
        },
        {
            id: 3,
            title: `Avtomatik yangilanish: "Themes"`,
            info: "0 B | 05/03/22",
            img: require('../../assets/mi-icon-19.jpg'),
        },
        {
            id: 4,
            title: `contacts.vcf`,
            info: "0 B | 22/02/22",
            img: require('../../assets/contacy.png'),
        },
        {
            id: 5,
            title: `csm_HP_Gaming_1...19_4ff0becbc0.jpg`,
            info: "61 Kb | 22/02/22",
            img: require('../../assets/contacy.png'),
        },
        {
            id: 6,
            title: `csm_HP_Gami22_1...19_ecbc0.jpg`,
            info: "161 Kb | 22/02/22",
            img: require('../../assets/contacy.png'),
        },
        {
            id: 7,
            title: `csm_Gami22_1...9_4f0bex0.jpg`,
            info: "21 Mb | 22/02/21",
            img: require('../../assets/contacy.png'),
        },
        {
            id: 8,
            title: "workshop(1)",
            info: "1.2 MB | 25/03/22",
            img: require('../../assets/mp3-icon.png'),
        },
        {
            id: 9,
            title: "soliq_05-03-2022.pdf",
            info: "0 B | 05/03/22",
            img: require('../../assets/pdf.png'),
        },
        {
            id: 9,
            title: `Avtomatik yangilanish: "Themes"`,
            info: "0 B | 05/03/22",
            img: require('../../assets/mi-icon-19.jpg'),
        },
        {
            id: 10,
            title: `contacts.vcf`,
            info: "0 B | 22/02/22",
            img: require('../../assets/contacy.png'),
        },
        {
            id: 11,
            title: `csm_HP_Gaming_1...19_4ff0becbc0.jpg`,
            info: "61 Kb | 22/02/22",
            img: require('../../assets/contacy.png'),
        },
        {
            id: 12,
            title: `csm_HP_Gami22_1...19_4ff0becbc0.jpg`,
            info: "161 Kb | 22/02/22",
            img: require('../../assets/contacy.png'),
        },
        {
            id: 13,
            title: `csm_HP_Gami22_1...9_4ff0bex0.jpg`,
            info: "21 Mb | 22/02/21",
            img: require('../../assets/contacy.png'),
        },
    ]

    // Render
    function renderHeader() {
        return (
            <RN.View style={{
                flexDirection: 'row',
                alignItems: 'center',
                paddingVertical: 10,
                paddingHorizontal: 20,
                borderBottomWidth: 1,
                borderBottomColor: 'rgba(0, 0 , 0, 0.1)'
            }}>

                <RN.View style={{ flex: 1 }}>
                    <RN.Text style={{
                        color: "#666",
                        fontSize: 12,
                        fontWeight: "600"
                    }}>Nosirov Farrux</RN.Text>
                </RN.View>

                <RN.View style={{
                    flex: 3,
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                }}>
                    <RN.View>
                        <Icon name='arrow-down-circle' type="feather" size={30} style={{ opacity: 0.6 }} />
                    </RN.View>

                    <RN.View style={{
                        width: 30,
                        height: 30,
                        backgroundColor: 'blue',
                        borderRadius: 17.5,
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}>
                        <Icon name='check' type="antdesign" size={25} color={"#fff"} />
                    </RN.View>

                    <RN.View>
                        <Icon
                            name='dots-three-vertical'
                            type="entypo"
                            size={27}
                            color={"#333"}
                            style={{ opacity: 0.8 }} />
                    </RN.View>
                </RN.View>
            </RN.View>
        )
    }


    function renderList() {

        const renderItem = ({ item }: any) => {

            return (
                <RN.View style={{
                    marginVertical: 12,
                    borderBottomWidth: 1,
                    borderBottomColor: 'rgba(0, 0 , 0, 0.1)',
                    alignItems: "center",
                    paddingBottom: 4
                }}>

                    <RN.View style={{
                        flexDirection: "row",
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        paddingHorizontal: 12,
                    }}>
                        <RN.View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <RN.View>
                                <RN.Image
                                    source={item.img}
                                    style={{
                                        width: 40,
                                        height: 40,
                                        borderRadius: 6,
                                        marginRight: 12,
                                        resizeMode: 'contain'
                                    }}
                                />
                            </RN.View>

                            <RN.View style={{ flex: 0.9 }}>
                                <RN.Text style={{ color: '#000', fontWeight: '600', fontSize: 17 }}>{item.title}</RN.Text>
                                <RN.Text style={{ color: 'rgba(0, 0, 0, 0.5)', fontSize: 15 }}>{item.info}</RN.Text>
                            </RN.View>
                        </RN.View>

                        <RN.View style={{
                            width: 27,
                            height: 27,
                            borderColor: "#666",
                            borderWidth: 1,
                            borderRadius: 15,
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}>
                            <Icon
                                type='materialicons'
                                name='keyboard-arrow-right'
                                size={24}
                                color={"#666"} />
                        </RN.View>
                    </RN.View>
                </RN.View>
            )
        }

        return (
            <RN.View>
                <RN.FlatList
                    data={data}
                    keyExtractor={(_, index) => index.toString()}
                    renderItem={renderItem}
                />
            </RN.View>
        )
    }

    return (
        <RN.View style={homeStyles.container}>
            {/* Header */}
            {renderHeader()}

            {/* List */}
            {renderList()}

        </RN.View>
    )
}

export default Home
