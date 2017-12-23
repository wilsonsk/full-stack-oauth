import React from 'react'
import { Button, Checkbox, Form } from 'semantic-ui-react'

const MyForm = () => (
  <Form>
    <Form.Field>
      <label>First Name</label>
      <input placeholder='You send' />
    </Form.Field>
    <Form.Field>
      <label>Last Name</label>
      <input placeholder='Recipients gets' />
    </Form.Field>
    <Button type='submit'>Submit</Button>
  </Form>
)

export default MyForm;
