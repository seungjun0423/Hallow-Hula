import React from 'react'
import { Button, Form, Grid, Header, Message, Segment } from 'semantic-ui-react'
import Link from 'next/link'

export default function Login () {
  return(
    <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
      <Grid.Column style={{ maxWidth: 450 }}>
        <Header as='h2' color='teal' textAlign='center'>
          Login to your account
        </Header>
        <Form size='large'>
          <Segment stacked>
            <Form.Input fluid icon='user' iconPosition='left' placeholder='E-mail address' />
            <Form.Input
              fluid
              icon='lock'
              iconPosition='left'
              placeholder='Password'
              type='password'
            />
            <div className="buttonBox">
              <Button color='teal' fluid size='large' >
                Login
              </Button>
              <Button color='yellow' fluid size='large' >
                Kakao
              </Button>
            </div>
          </Segment>
        </Form>
        <Message>
          <Link href='/signup'>Sign Up</Link>
        </Message>
        <Message>
          <Link href='/signup'>Find ID and Passoword</Link>
        </Message>
      </Grid.Column>
      <style jsx>{`
        .buttonBox{
          
          }
        `}
      </style>
    </Grid>
  ) 
}




