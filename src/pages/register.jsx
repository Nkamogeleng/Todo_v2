import { useContext } from 'react';
import { AppContext } from './appstate';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';

// styles
// import '../styles/form.css';

function Register() {
	const { register, handleSubmit } = useForm();
	const context = useContext(AppContext);
	const history = useHistory();

	const handleRegister = ({ email, password, confirmPassword }) => {
		
		if (password !== confirmPassword) {
			return alert(`wrong passwords`);
		}

		let newuser = {
			email: email,
			password: password,
		};

		fetch(
			`https://user-manager-three.vercel.app/api/user/register`,
			{
				method: 'POST',
				headers: {
					'Content-type': 'application/json',
				},
				body: JSON.stringify(newuser), 
			}
		)
			.then(res => res.json())
			.then(result => {
				if (result.error === true) {
					return alert(result.message);
				}

				context.dispatch({
					type: 'LOGIN',
					payload: result.body,
				});

				history.push('/todo');
			})
			.catch(err => {
				console.log('this error occurred', err);
				alert('Please try again later');
			});
	};

	return (
		<form onSubmit={handleSubmit(handleRegister)}>
			<div>
				<h2>Register</h2>
				<span>Please register</span>
			</div>
			<br />
			<div>
				<label htmlFor='email'>Email</label>
				<br />
				<input
					type='email'
					name='email'
					id='email'
					required
					{...register('email')}
				/>
			</div>
			<br />
			<div>
				<label htmlFor='password'>Password</label>
				<br />
				<input
					type='password'
					name='password'
					id='password'
					required
					{...register('password')}
				/>
			</div>
			<br />
			<div>
				<label htmlFor='confirm-password'>
					Confirm Password
				</label>
				<br />
				<input
					type='password'
					name='confirm-password'
					id='confirm-password'
					required
					{...register('confirmPassword')}
				/>
			</div>
			<br />
			<div>
				<button type='submit' className='btn '>
					Register
				</button>
			</div>
		</form>
	);
}

export default Register;

// import React, { useState } from "react";
// import Form from "react-bootstrap/Form";
// import Button from "react-bootstrap/Button";
// // import "./Login.css";


// export default function Login() {
// 	// we are using the useState hook to store what the user enters in the form
// 	// we are using a function to set the new value.
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   function validateForm() {
//     return email.length > 0 && password.length > 0;
//   }
//   // we are using a function to prevent default refresh.
// //   function handleSubmit(event) {
// //     event.preventDefault();
// //   }
  
//   return (
//     <div className="Login">
//       <Form onSubmit={handleSubmit(handleRegister)}>
//         <Form.Group size="lg" controlId="email">
//           <Form.Label>Email</Form.Label>
//           <Form.Control
//             autoFocus
//             type="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//           />
//         </Form.Group>
//         <Form.Group size="lg" controlId="password">
//           <Form.Label>Password</Form.Label>
//           <Form.Control
//             type="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//           />
//         </Form.Group>
//         <Button block size="lg" type="submit" disabled={!validateForm()}>
//           Login
//         </Button>
//       </Form>
//     </div>
//   );
// }

