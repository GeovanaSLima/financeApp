import React, { useState, useContext } from 'react';
import { ActivityIndicator, Platform, TouchableWithoutFeedback } from 'react-native';

import { 
	Background, 
	Container,
	Logo, 
	AreaInput, 
	Input,
	SubmitButton,
	SubmitText,
	Link,
	LinkText 
} from './styles';

import { AuthContext } from '../../contexts/auth';

import { useNavigation } from '@react-navigation/native';
import { useTheme } from 'styled-components/native';

export default function SignIn() {
	const theme = useTheme();
	const navigation = useNavigation();

	const { signIn, loadingAuth } = useContext(AuthContext);
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	function handleLogin() {
		signIn(email, password);
	}

	return(
		<TouchableWithoutFeedback onPress={ () => Keyboard.dismiss() }>
			<Background>
				<Container
					behavior={Platform.OS === 'ios' ? 'padding' : ''}
					enabled
				>

					<Logo 
						source={require('../../assets/img/Logo.png')}
					/>

					<AreaInput>
						<Input 
							placeholder="Seu email"
							placeholderTextColor={theme.placeholder}
							value={email}
							onChangeText={ (text) => setEmail(text) }
						/>
					</AreaInput>

					<AreaInput>
						<Input 
							placeholder="Sua senha"
							placeholderTextColor={theme.placeholder}
							value={password}
							onChangeText={ (text) => setPassword(text) }
							secureTextEntry={true}
						/>
					</AreaInput>

					<SubmitButton activeOpacity={0.9} onPress={handleLogin}>
						{
							loadingAuth ? (
								<ActivityIndicator size={20} color={theme.textPrimary} />
							) : (
								<SubmitText>Acessar</SubmitText>
							)
						}
					</SubmitButton>

					<Link onPress={ () => navigation.navigate('SignUp') }>
						<LinkText>Criar Conta</LinkText>
					</Link>

				</Container>
			</Background>
		</TouchableWithoutFeedback>
	)
}
