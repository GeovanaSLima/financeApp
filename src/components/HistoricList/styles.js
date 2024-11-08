import styled from "styled-components";

export const Container = styled.View`
  background-color: ${({theme}) => theme.border};
  border-radius: 4px;
  margin-left: 10px;
  margin-right: 10px;
  margin-bottom: 14px;
  padding: 12px;
`

export const Tipo = styled.View`
  flex-direction: row;
  justify-content: space-between;
`

export const TypeText = styled.Text`
  color: ${({theme}) => theme.background};
  font-size: 16px;
  font-style: italic;
  margin-left: 2px;
`

export const IconView = styled.View`
  flex-direction: row;
  background-color: ${({ theme, tipo }) => 
    tipo ? theme.secondary : theme.error};
  padding-bottom: 4px;
  padding-top: 4px;
  padding-left: 8px;
  padding-right: 8px;
  border-radius: 4px;
  margin-bottom: 4px;
  justify-content: space-around;
  width: 100px;
  `

export const DescriptionText = styled.Text`
  color: ${({theme}) => theme.surface};
  font-size: 13px;
  font-style: italic;
  margin-bottom: 8px;
`

export const ValorText = styled.Text`
  color: ${({theme}) => theme.surface};
  font-size: 22px;
  font-weight: bold;
`

export const DateText = styled.Text`
  color: ${({theme}) => theme.textSecondary}
`