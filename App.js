import React, { Component } from 'react';
import { Container, Header, Content, List, ListItem, Text } from 'native-base';

export default class ListExample extends Component {

  render() {
    const contacts = [
      'Mark',
      'Monique',
      'Arvin',
      'Ulysses',
      'Kate'
    ]

    return (
      <Container>
        <Header />
        <Content>
          <List>
            {
              contacts.map((c) => {
                return(
                  <ListItem>
                    <Text> {c} </Text>
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