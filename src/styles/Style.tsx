import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100vh;

  @media (max-width: 768px) {
    padding: 0 1rem;
    justify-content: center;
  }
`;

export const Header = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 2rem;

  .logo {
    width: 100px;
    height: 100px;
    margin-bottom: 1rem;
    position: absolute;
    top: 2rem;
    right: 4rem;
    transition: transform 0.5s ease;
  }

  .logo:hover {
    transform: rotate(360deg);
  }

  .btn {
    margin-top: 1rem;
    padding: 0.8rem 5rem;
    background-color: #007bff;
    color: #fff;
    font-size: 1rem;
    border: none;
    border-radius: 2rem;
    cursor: pointer;
  }
`;

export const Section = styled.section`
  display: flex;
  justify-content: center;
  margin-top: 2rem;
  gap: 2rem;

  label, input {
    cursor: pointer;
  }
  
  input[type='radio'] {
    margin-right: 0.25rem;
  }

  @media (max-width: 768px) {
    flex-direction: row;
    gap: 1rem;
  }
`;

export const RandomImage = styled.img<{ size: string }>`
  width: ${(props) => props.size}px;
  height: ${(props) => props.size}px;
  margin-bottom: 1rem;
  border-radius: 50%;
`;

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  margin-top: 1rem;

  .ipt {
    width: 400px;
    height: 35px;
    margin-top: 1rem;
    padding: 0.5rem 1rem;
    border: 1px solid #ced4da;
    border-radius: 3rem;
  }

  @media (max-width: 768px) {
    .ipt {
      width: 100%;
    }
  }

  .ipt::placeholder {
    font-size: 0.8rem;
    color: #6c757d;
  }
  
  .copy-button {
    position: absolute;
    right: 13px;
    top: 25px;
    border: none;
    background: none;
    cursor: pointer;
  }

  @media (max-width: 768px) {
    .copy-button {
      position: relative;
      color: #007bff;
      top: 10px;
      right: -5px;
    }
  }

  .tooltip {
    position: absolute;
    bottom: 100%;
    left: 50%;
    transform: translateX(-50%);
    background: #333;
    color: #fff;
    padding: 5px;
    border-radius: 3px;
    font-size: 12px;
    white-space: nowrap;
  }

  label, input {
    cursor: pointer;
  }
`;

export const Title = styled.h1`
  font-size: 2rem;
  margin: 2rem 0;
`;

export const Image = styled.img`
  width: 200px;
  height: 200px;
  margin-bottom: 1rem;
  border-radius: 50%;
`;

export const Footer = styled.footer`
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  margin-bottom: 1rem;
  font-size: 1rem;
  color: #6c757d;

  a {
    color: #007bff;
    text-decoration: none;
  }

  @media (max-width: 768px) {
    font-size: 0.8rem;
    text-align: center;
  }
`;
