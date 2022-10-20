// Style your components here
import styled from 'styled-components'

export const AppContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-size: cover;
  padding: 20px;
`

export const MemeGeneratorContainer = styled.form`
  width: 70%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 90px;
`
export const Heading = styled.h1`
  font-size: 30px;
  font-family: 'Open Sans';
  font-weight: bold;
  color: #35469c;
`
export const Label = styled.label`
color: #7e858e;
font-family:"Open Sans"
font-size:30px;
font-weight:bold;
`
export const InputImageUrl = styled.input`
  width: 300px;
  height: 40px;
  margin-top: 10px;
`
export const SelectFontSize = styled.select`
  width: 300px;
  height: 40px;
  margin-top: 10px;
`
export const Option = styled.option`
  font-family: 'Open Sans';
  font-size: ${props => props.value};
`
export const Button = styled.button`
  width: 120px;
  margin-top: 20px;
  background-color: #0b69ff;
  border: none;
  outline: none;
  height: 40px;
  border-radius: 5px;
  color: #ffffff;
  font-family: 'Open Sans';
`
export const ImageContainer = styled.div`
  width: 50%;
  background: url(${props => props.imageUrlInput});
  background-size: cover;
  height: 400px;
  margin-right: 90px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export const Paragraph = styled.p`
  color: #ffffff;
  font-size: ${props => props.activeFontSizeId}px;
  font-weight: 600;
  font-family: 'Open Sans';
  text-align: center;
`
