import React, { useContext, useState } from 'react';
import { Platform, ActivityIndicator } from 'react-native';

import { AuthContext } from '../../contexts/auth';
import { 
	Background,
	Container,
	AreaInput, 
	Input,
	SubmitButton,
	SubmitText
 } from "../SignIn/styles";
import { useTheme } from 'styled-components/native';

export default function SignUp() {
	const theme = useTheme();
	
	const { signUp, loadingAuth } = useContext(AuthContext);

	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	function handleSignUp() {
		if(name === '' || email === '' || password === '') return;
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

					{
						loadingAuth ? (
							<ActivityIndicator size={20} color={theme.background} />
						) : (
							<SubmitText>Cadastrar</SubmitText>
						)
					}

				</SubmitButton>

			</Container>

		</Background>
	)
}