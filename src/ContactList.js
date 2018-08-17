import React, { Component } from 'react';
import { Container, Header, Content, List, ListItem, Text, Body, Icon, Button, Right} from 'native-base';
import { phonecall, text } from 'react-native-communications'

class ContactList extends Component {

  constructor () {
    super()

    this.state = { 
      contacts: [
        {id: 'asdwqe', name: 'Mark', mobile: '09358645310', email: 'hermano.mark.mh@gmail.com', company: 'ProudCloud'},
        {id: 'wqeqw1', name: 'Mark', mobile: '09068631222', email: 'hermano.mark.mh@gmail.com', company: 'ProudCloud'},
        {id: 'asdd12', name: 'Mark', mobile: '09358645310', email: 'hermano.mark.mh@gmail.com', company: 'ProudCloud'},
        {id: 'asd123', name: 'Mark', mobile: '09358645310', email: 'hermano.mark.mh@gmail.com', company: 'ProudCloud'}
        ]
    }
  }

  openRecord(c) {
    // alert('DAPAT LUMIPAT NG SCREEN')
    // phonecall(number, false)
    this.props.navigation.navigate('ContactView', { c: c})
  }

  tawag (mobile) {
    phonecall(mobile, false)
  }

  mensahe (mobile) {
    text(mobile, false)
  }

  delete (id) {
    // alert(i)

    // setting the state to one data:
    // this.setState({
    //   contacts: [{name: 'Mark', mobile: '09358645310', email: 'hermano.mark.mh@gmail.com', company: 'ProudCloud'}]
    // })

    // deleting an item:
    // this.setState({
    //   contacts: this.state.contacts.filter( contact => contact.id !== id)
    // })

    // other way to delete:
    const contacts = [...this.state.contacts];
    contacts.splice(id, 1);
    this.setState({contacts: contacts})
  }

  render() {
    console.log('debug')
    console.log(this.props)

    return (
      <Container>
        <Header />
        <Content>
          <List>
            {
              this.state.contacts.map((c, i) => {
                return(
                  <ListItem key={i} onPress={ () => { this.openRecord(c)} }>
                    <Body>
                      <Text> {c.name} </Text>
                      <Text> {c.mobile} </Text>
                    </Body>
                    <Right>
                      <Button rounded small primary onPress={() => {this.tawag(c.mobile)}}>
                        <Text style={{fontSize: 9}}>
                          CALL
                        </Text>
                      </Button>
                    </Right>
                    <Right>
                      <Button rounded small success onPress={() => {this.mensahe(c.mobile)}}>
                        <Text style={{fontSize: 9}}>
                          SMS
                        </Text>
                      </Button>
                    </Right>
                    <Right>
                      <Button rounded small danger onPress={() => {this.delete(c.id)}}>
                        <Text style={{fontSize: 9}}>
                          DEL
                        </Text>
                      </Button>
                    </Right>
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

export default ContactList;