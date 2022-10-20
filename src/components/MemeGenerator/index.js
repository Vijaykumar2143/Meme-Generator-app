import {Component} from 'react'

import {
  AppContainer,
  MemeGeneratorContainer,
  Heading,
  Label,
  InputImageUrl,
  SelectFontSize,
  Option,
  Button,
  ImageContainer,
  Paragraph,
} from './styledComponents'

const fontSizesOptionsList = [
  {
    optionId: '8',
    displayText: '8',
  },
  {
    optionId: '12',
    displayText: '12',
  },
  {
    optionId: '16',
    displayText: '16',
  },
  {
    optionId: '20',
    displayText: '20',
  },
  {
    optionId: '24',
    displayText: '24',
  },
  {
    optionId: '28',
    displayText: '28',
  },
  {
    optionId: '32',
    displayText: '32',
  },
]

class MemeGenerator extends Component {
  state = {
    imageUrlInput: '',
    topTextInput: '',
    bottomTextInput: '',
    activeFontSizeOptionId: fontSizesOptionsList[0].optionId,
    backgroundImageUrl: '',
    topText: '',
    bottomText: '',
    activeFontSizeId: '',
  }

  submitFormDetails = event => {
    event.preventDefault()
    const {
      imageUrlInput,
      topTextInput,
      bottomTextInput,
      activeFontSizeOptionId,
    } = this.state

    this.setState({
      backgroundImageUrl: imageUrlInput,
      topText: topTextInput,
      bottomText: bottomTextInput,
      activeFontSizeId: activeFontSizeOptionId,
    })
  }

  onChangeImageUrl = event => {
    this.setState({imageUrlInput: event.target.value})
  }

  onChangeTopText = event => {
    this.setState({topTextInput: event.target.value})
  }

  onChangeBottomText = event => {
    this.setState({bottomTextInput: event.target.value})
  }

  selectFontSize = event => {
    this.setState({activeFontSizeOptionId: event.target.value})
  }

  render() {
    const {
      imageUrlInput,
      topTextInput,
      bottomTextInput,
      activeFontSizeOptionId,
      backgroundImageUrl,
      topText,
      bottomText,
      activeFontSizeId,
    } = this.state

    return (
      <AppContainer>
        <MemeGeneratorContainer onSubmit={this.submitFormDetails}>
          <Heading>Meme Generator</Heading>
          <Label htmlFor="imageUrl">Image URL</Label>
          <InputImageUrl
            type="text"
            onChange={this.onChangeImageUrl}
            placeholder="Enter the Image URL"
            value={imageUrlInput}
            id="imageUrl"
          />
          <Label htmlFor="topText">Top Text</Label>
          <InputImageUrl
            type="text"
            onChange={this.onChangeTopText}
            placeholder="Enter the Top Text"
            value={topTextInput}
            id="topText"
          />
          <Label htmlFor="bottomText">Bottom Text</Label>
          <InputImageUrl
            type="text"
            onChange={this.onChangeBottomText}
            value={bottomTextInput}
            placeholder="Enter the Bottom Text"
            id="bottomText"
          />
          <Label htmlFor="fontSize">Font Size</Label>
          <SelectFontSize
            onChange={this.selectFontSize}
            id="fontSize"
            value={activeFontSizeOptionId}
          >
            {fontSizesOptionsList.map(fontSizes => (
              <Option key={fontSizes.optionId} value={fontSizes.optionId}>
                {fontSizes.displayText}
              </Option>
            ))}
          </SelectFontSize>
          <Button type="submit">Generate</Button>
        </MemeGeneratorContainer>

        <ImageContainer data-testid="meme" imageUrlInput={backgroundImageUrl}>
          <Paragraph activeFontSizeId={activeFontSizeId}>{topText}</Paragraph>
          <Paragraph activeFontSizeId={activeFontSizeId}>
            {bottomText}
          </Paragraph>
        </ImageContainer>
      </AppContainer>
    )
  }
}

export default MemeGenerator
