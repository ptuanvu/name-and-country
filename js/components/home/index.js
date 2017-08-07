import React, { Component } from 'react';
import { connect } from 'react-redux';

import {
  Container, Header, Button, Right, Icon,
  Title, Content, Text, Body,
  Card, CardItem, Item, Input,
} from 'native-base';
import { Grid, Row } from 'react-native-easy-grid';

import styles from './styles';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filterName: undefined,
      init: true,
    };
  }

  render() {
    const { data } = this.props;
    const { filterName, init } = this.state;
    const animals = data.animals.filter(str => init || (filterName !== '' && str.indexOf(filterName) === 0)).map(str => `${str}, `);
    const countries = data.countries.filter(str => init || (filterName !== '' && str.indexOf(filterName) === 0)).map(str => `${str}, `);
    const fruits = data.fruits.filter(str => init || (filterName !== '' && str.indexOf(filterName) === 0)).map(str => `${str}, `);
    const boys = data.names.boys.filter(str => init || (filterName !== '' && str.indexOf(filterName) === 0)).map(str => `${str}, `);
    const girls = data.names.girls.filter(str => init || (filterName !== '' && str.indexOf(filterName) === 0)).map(str => `${str}, `);

    return (
      <Container style={styles.container}>
        <Header>
          <Body>
            <Title>Name and Country Game</Title>
          </Body>
          <Right>
            <Button
              transparent
              onPress={() => this.setState({ init: true })}
            >
              <Text>Clear</Text>
            </Button>
          </Right>
        </Header>
        <Content>
          <Grid style={styles.mt}>
            <Row>
              <Card>
                <Item>
                  <Input value={filterName} onChangeText={(text) => { this.setState({ filterName: text, init: false }); }} placeholder="filter..." />
                </Item>
              </Card>
            </Row>
            <Row>
              <Card>
                <CardItem header>
                  <Text>Animals</Text>
                </CardItem>
                <CardItem>
                  <Body>
                    <Text>
                      {animals}
                    </Text>
                  </Body>
                </CardItem>
              </Card>
            </Row>
            <Row>
              <Card>
                <CardItem header>
                  <Text>Countries</Text>
                </CardItem>
                <CardItem>
                  <Body>
                    <Text>
                      {countries}
                    </Text>
                  </Body>
                </CardItem>
              </Card>
            </Row>
            <Row>
              <Card>
                <CardItem header>
                  <Text>Fruits</Text>
                </CardItem>
                <CardItem>
                  <Body>
                    <Text>
                      {fruits}
                    </Text>
                  </Body>
                </CardItem>
              </Card>
            </Row>
            <Row>
              <Card>
                <CardItem header>
                  <Text>Names</Text>
                </CardItem>
                <CardItem>
                  <Body>
                    <Text header>
                      BOYS
                    </Text>
                    <Text>
                      {boys}
                    </Text>
                    <Text header>
                      GIRLS
                    </Text>
                    <Text>
                      {girls}
                    </Text>
                  </Body>
                </CardItem>
              </Card>
            </Row>
          </Grid>
        </Content>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  data: state.game.data,
});

const HomeSwagger = connect(mapStateToProps, {})(Home);
export default HomeSwagger;
