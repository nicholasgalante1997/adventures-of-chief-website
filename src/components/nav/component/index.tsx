import React from 'react';
import { useNavigate } from 'react-router';
import { Container, Typography, Button } from '@nickgdev/hellerui';

import '../../../styles/nav.css';

const { Paragraph } = Typography;

export function Nav() {
  const navigate = useNavigate();
  return (
    <Container
      height="8vh"
      width="100%"
      customStyles={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottom: '1px solid white'
      }}
    >
      <Container>
        <Paragraph fontSize={24} thin color="white">
          adventures of chief and dumpling
        </Paragraph>
      </Container>
      <Container
        customStyles={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}
      >
        <Button ghost backgroundColor="#FFFFFF" className="nav-action-button">
          upload
        </Button>
        <Button ghost backgroundColor="#FFFFFF" className="nav-action-button">
          adventures
        </Button>
        <Button ghost backgroundColor="#FFFFFF" className="nav-action-button">
          about us
        </Button>
      </Container>
    </Container>
  );
}
