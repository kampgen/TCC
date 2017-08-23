import React, { Component } from 'react'
import {
    Text,
    View,
    StyleSheet,
    TextInput,
    Button
} from 'react-native'

export default class App extends Component {
    constructor(props) {
        super(props)

        this.state = {
            username: '',
            password: ''
        }
    }
    render() {
        return(
            <View style={styles.content}>
                <Text style={{ color: 'white', alignSelf: 'center', marginBottom: 50, fontSize: 50, fontFamily: 'Courier New' }}>MEU APP</Text>
                <View style={styles.box}>
                    <TextInput
                        style={styles.input}
                        onChangeText={text => this.setState({ username: text })}
                        value={this.state.username}
                        placeholder="Email"
                    />
                    <TextInput
                        style={styles.input}
                        onChangeText={text => this.setState({ password: text })}
                        value={this.state.username}
                        placeholder="Senha"
                    />
                </View>
                <View style={{ width: 200, alignSelf: 'center' }}>
                    <Button
                        title="Entrar"
                        color="#009933"
                        onPress={() => false}
                    />
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    content: {
        flex: 1,
        backgroundColor: '#1a1a1a',
        justifyContent: 'center',
    },
    input: {
        maxHeight: 50,
        borderColor: '#595959',
        borderWidth: 1,
        flex: 1,
        marginTop: 20,
        backgroundColor: '#737373',
        paddingHorizontal: 10
    },
    box: {
        flex: 1,
        marginHorizontal: 50,
        maxHeight: 200
    }
})
