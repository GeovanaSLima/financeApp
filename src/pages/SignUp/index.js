import React, { useContext, useState } from 'react';
import { Platform } from 'react-native';

import { AuthContext } from '../../contexts/auth';
import { 
	Background,
	Container,
	AreaInput, 
	Input,
	SubmitButton,
	SubmitText
 } from "../SignIn/styles";

export default function SignUp() {
	
	const { signUp } = useContext(AuthContext)
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	function handleSignUp() {
		signUp(email, password, name);
	}

	return(
		<Background>

			<Container
				behavior={Platform.OS === 'ios' ? 'padding' : ''}
				enabled
			>

				<AreaInput>
					<Input
					 placeholder="Nome"
					 value={name}
					 onChangeText={ (text) => setName(text) }
					/>
				</AreaInput>

				<AreaInput>
					<Input
					 placeholder="Seu email"
					 value={email}
					 onChangeText={ (text) => setEmail(text) }
					/>
				</AreaInput>

				<AreaInput>
					<Input
					 placeholder="Sua senha"
					 value={password}
					 onChangeText={ (text) => setPassword(text) }
					 secureTextEntry={true}
					/>
				</AreaInput>

				<SubmitButton onPress={handleSignUp}>
					<SubmitText>Cadastrar</SubmitText>
				</SubmitButton>

			</Container>

		</Background>
	)
}