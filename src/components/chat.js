import React, { Component } from 'react'
import { View } from 'react-native'
import Nav from './global-widgets/nav'
import { GiftedChat } from 'react-native-gifted-chat'

class chat extends Component {
    constructor(props) {
        super(props)
        this.state = {messages: []};
        this.onSend = this.onSend.bind(this);
    }

    componentWillMount() {
        this.setState({
            messages: this.props.messages
        });
    }

    onSend(messages = []) {
        this.setState((previousState) => {
            return {
                messages: GiftedChat.append(previousState.messages, messages),
            };
        });
    }

    render() {
        return (
            <View style={{flex: 1}}>
                <Nav type='message' onPress={() => this.props.navigator.replace({id: 'home'})}/>
                <GiftedChat
                    messages={this.state.messages}
                    onSend={this.onSend}
                    user={{
                        _id: 1
                    }}
                />
            </View>
        );
    }
}

export default chat;