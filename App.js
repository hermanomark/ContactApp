import React, { Component } from 'react';
import { Container, Header, Content, List, ListItem, Text, Body} from 'native-base';
import { phonecall } from 'react-native-communications'

export default class ListExample extends Component {

  tawag(number) {
    phonecall(number, false)
  }

  render() {
    const contacts = [
      {name: 'Mark', number: '09358645310'},
      {name: 'Mark', number: '09358645310'},
      {name: 'Mark', number: '09358645310'},
      {name: 'Mark', number: '09358645310'}
    ]

    return (
      <Container>
        <Header />
        <Content>
          <List>
            {
              contacts.map((c, i) => {
                return(
                  <ListItem key={i} onPress={ () => { this.tawag() } }>
                    <Body>
                      <Text> {c.name} </Text>
                      <Text note> {c.number} </Text>
                    </Body>
                  </ListItem>
                  )
              })
            }
          </List>
        </Content>
      </Container>
    );
  }

}