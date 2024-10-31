import React from 'react';
import { Platform } from 'react-native';

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

import { useNavigation } from '@react-navigation/native';

export default function SignIn() {
	const navigation = useNavigation();

	return(
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
						placeholderTextColor="#12121260"
					/>
				</AreaInput>

				<AreaInput>
					<Input 
						placeholder="Sua senha"
						placeholderTextColor="#12121260"
					/>
				</AreaInput>

				<SubmitButton activeOpacity={0.9}>
					<SubmitText>Acessar</SubmitText>
				</SubmitButton>

				<Link onPress={ () => navigation.navigate('SignUp') }>
					<LinkText>Criar Conta</LinkText>
				</Link>

			</Container>
		</Background>
	)
}
