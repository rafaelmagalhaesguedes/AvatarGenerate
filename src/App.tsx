import React, { useEffect, useState } from 'react';
import { FiCopy } from 'react-icons/fi';
import Logo from './assets/favicon.svg';
import {
  Container, Footer, Header, RandomImage, Section, Title, Wrapper } from './styles/Style';

const sizes = ['100', '200', '300'];

function App() {
  const [avatar, setAvatar] = useState('');
  const [size, setSize] = useState(sizes[1]);
  const [copied, setCopied] = useState(false);

  async function avatarGenerate(): Promise<void> {
    const response = await fetch('https://rickandmortyapi.com/api/character');
    const data = await response.json();
    const randomImage = data.results[Math.floor(Math.random() * data.results.length)];
    setAvatar(randomImage.image);
  }

  useEffect(() => {
    avatarGenerate();
  }, []);

  const handleSizeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSize(event.target.value);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(avatar);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 3000);
  };

  return (
    <Container>

      <Header>
        <Title>Avatar URL Generator</Title>
        <img className="logo" src={ Logo } alt="Logo" data-testid="logo" />
        <RandomImage
          src={ avatar }
          alt="Random Avatar"
          size={ size }
        />
        <input
          className="btn"
          type="button"
          value="Generate"
          onClick={ avatarGenerate }
        />
      </Header>

      <Section>
        <label>
          <input
            type="radio"
            name="size"
            value={ sizes[0] }
            checked={ size === sizes[0] }
            onChange={ handleSizeChange }
          />
          {' '}
          {sizes[0]}
          px
        </label>
        <label>
          <input
            type="radio"
            name="size"
            value={ sizes[1] }
            checked={ size === sizes[1] }
            onChange={ handleSizeChange }
          />
          {' '}
          {sizes[1]}
          px
        </label>
        <label>
          <input
            type="radio"
            name="size"
            value={ sizes[2] }
            checked={ size === sizes[2] }
            onChange={ handleSizeChange }
          />
          {' '}
          {sizes[2]}
          px
        </label>
      </Section>

      <Wrapper>
        <input className="ipt" type="text" value={ avatar } data-testid="url" readOnly />
        <button data-testid="copied" className="copy-button" onClick={ copyToClipboard }>
          <FiCopy size={ 20 } />
          {copied && <span className="tooltip">Copied!</span>}
        </button>
      </Wrapper>

      <Footer>
        <p>
          Created by
          {' '}
          Rafael Guedes
          {' '}
          <a href="https://github.com/rafaelmagalhaesguedes/AvatarGenerate" target="_blank" rel="noreferrer">
            - GitHub
          </a>
        </p>
      </Footer>
    </Container>
  );
}

export default App;
