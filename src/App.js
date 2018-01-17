import React, {Component} from 'react';
import Button from './components/Button';
import Text from './components/Text';
import Notification from './components/Notification';
import Input from './components/Input';
import LoginForm from './components/LoginForm';
import Form from './components/Form';
import formConfig from './components/Form/formConfig.js'

class App extends Component {
	render() {
		return (
			<div>
				{/*
					Component:
						Button

					Props:
						type (possible values: primary - default / secondary / disabled )
						isLoading (possible values: true / false)
						onButtonClick (function)
				*/}
				<Button>Click me!</Button>
				<Button type="secondary">Click me!</Button>
				<Button type="secondary" disabled={true}>Click me!</Button>
				<Button isLoading={true}>Click me!</Button>

				<hr />

				{/*
					Component:
						Text

					Props:
						heading (possible values: true / false - default)
						size (possible values: small / medium - default / large)
				*/}
				<Text> Text with default props. </Text>
				<Text size="large"> Large text. </Text>
				<Text size="small"> Small text. </Text>
				<Text heading={true}> Super heading </Text>

				<hr />


				{/*
					Component:
						Notification

					Props:
						type (possible values: success / danger / info - default)
				*/}

				<Notification> This is info notification. </Notification>
				<Notification type="success"> Success :) </Notification>
				<Notification type="danger"> Danger !!! </Notification>

				<hr />

				{/*
					Component:
						Input

					Props:
						type (email / text - default / phone / textarea / password)
						name (string)
						placeholder (string)
						label (string)
						value (string)
						size (possible values: small / medium - default / large)
						error (string)
						onInputChange (function)
				*/}

					<Input name="firstName" label="Label for default input:" placeholder="This is default input"/>
					<Input size="small" placeholder="This is small input"/>
					<Input size="large" error="Enter your name!" placeholder="This is large input"/>
					<Input type="password" placeholder="This is large password input"/>
					<Input type="textarea" name="notes" label="Label for textarea:" value="This is immutable textarea's value"/>
					
					<hr />
				{/*
					Component:
						LoginForm

					Contains:
						Two input fields - email and password
						Submit button

					Expected behavior:
						Login and password should be printed in the console on submit button click
				*/}

					<LoginForm />

					<hr />

				{/*
					Component:
						Form

					Props:
						config (array of objects) - required
				*/}

					<Form config={formConfig} />

			</div>  
		); 
	}
}

export default App;
