import React from "react";
import styled from "styled-components";
import Map from "../img/map.png";
import Phone from "../img/phone.png";
import Send from "../img/send.png";

const Container = styled.div`
  height: 90%;
`;

const Wrapper = styled.div`
  height: 100%;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media only screen and (max-width: 480px) {
    flex-direction: column;
  }
`;

const FormContainer = styled.div`
  width: 50%;

  @media only screen and (max-width: 480px) {
    width: 100%;
  }
`;

const Title = styled.h1`
  margin: 50px;
  margin-top: 0;
  text-align: center;

  @media only screen and (max-width: 480px) {
    margin: 20px;
  }
`;

const Form = styled.form`
  height: 250px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media only screen and (max-width: 480px) {
    flex-direction: column;
  }
`;

const LeftForm = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-right: 20px;

  @media only screen and (max-width: 480px) {
    height: 50%;
    margin-right: 0;
  }
`;

const RightForm = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media only screen and (max-width: 480px) {
    width: 50%;
  }
`;

const Input = styled.input`
  width: 200px;
  padding: 10px;

  @media only screen and (max-width: 480px) {
    padding: 5px;
    margin-bottom: 20px;
  }
`;

const TextArea = styled.textarea`
  width: 200px;
  height: 60%;
  padding: 20px;

  @media only screen and (max-width: 480px) {
    padding: 5px;
    margin-top: 20px;
    align-self: center;
  }
`;

const Button = styled.button`
  border: none;
  padding: 15px;
  background-color: #1c1c1d;
  color: white;
  font-size: 20px;
  border-radius: 10px;
  margin-top: 20px;
  cursor: pointer;

  @media only screen and (max-width: 480px) {
    padding: 5px;
    margin-top: 14px;
  }
`;

const AddressContainer = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media only screen and (max-width: 480px) {
    width: 100%;
    margin-top: 20px;
  }
`;

const AddressItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 50px;

  @media only screen and (max-width: 480px) {
    margin-bottom: 20px;
  }
`;

const Icon = styled.img`
  width: 40px;
  margin-right: 20px;

  @media only screen and (max-width: 480px) {
    width: 20px;
  }
`;

const Text = styled.span`
  font-size: 20px;
  margin-right: 15px;

  @media only screen and (max-width: 480px) {
    font-size: 14px;
  }
`;

const Contact = () => {
  return (
    <Container>
      <Wrapper>
        <FormContainer>
          <Title>
            Question? <br /> Let's Get In Touch
          </Title>
          <Form>
            <LeftForm>
              <Input placeholder="your name" />
              <Input placeholder="your email" />
              <Input placeholder="subject" />
            </LeftForm>
            <RightForm>
              <TextArea placeholder="your messages" />
              <Button>Send</Button>
            </RightForm>
          </Form>
        </FormContainer>
        <AddressContainer>
          <AddressItem>
            <Icon src={Map} />
            <Text>Lorem ipsum dolor sit amet.</Text>
          </AddressItem>
          <AddressItem>
            <Icon src={Phone} />
            <Text>0949804453,</Text>
            <Text>0933477986</Text>
          </AddressItem>
          <AddressItem>
            <Icon src={Send} />
            <Text>nuk123475@gmail.com,</Text>
            <Text>nuk123475@hotmail.com</Text>
          </AddressItem>
        </AddressContainer>
      </Wrapper>
    </Container>
  );
};

export default Contact;
