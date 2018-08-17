import React from 'react'
import {
  Container,
  Content,
  Text,
  Badge,
  ListItem,
  Button
} from 'native-base'
import { phonecall, text } from 'react-native-communications'


class ContactView extends React.Component {

  tawag (mobile) {
    phonecall(mobile, false)
  }

  mensahe (mobile) {
    text(mobile, false)
  }


  render () {
    console.log(this.props)
    return (
      <Container>
        <Content padder>
          <ListItem itemHeader>
            <Text> {this.props.navigation.state.params.c.name} </Text>
          </ListItem>
          <ListItem>
           <Text note> {this.props.navigation.state.params.c.mobile} </Text>
          </ListItem>
          <ListItem>
            <Text note> {this.props.navigation.state.params.c.email} </Text>
          </ListItem>
          <ListItem>
            <Text note> {this.props.navigation.state.params.c.company} </Text>
          </ListItem>
          <Button full primary onPress={() => {this.tawag(this.props.navigation.state.params.c.mobile)} }> 
            <Text> CALL </Text> 
          </Button>
          <Button full success onPress={() => {this.mensahe(this.props.navigation.state.params.c.mobile)} }> 
            <Text> SMS </Text> 
          </Button>
        </Content>
      </Container> 
      );
  }
}

export default ContactView