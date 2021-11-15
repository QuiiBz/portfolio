import { FC } from "react";
import Hoverable from "../components/Hoverable";
import Text from "../components/Text";
import Title from "../components/Title";
import Layout from "../layouts/Layout";
import Col from "../components/Col";
import Row from "../components/Row";
import Icon from "../components/Icon";
import { DrawingPinIcon, TwitterLogoIcon, GitHubLogoIcon } from '@radix-ui/react-icons'

const Home: FC = () => {
  return (
    <Layout>
      <Col css={{ width: '100%', height: '100%' }} justify='between'>
        <Title>
          tom<br/ >lienard
        </Title>
        <Row css={{ width: '100%' }} justify='between' align='end'>
          <Col justify='center'>
            <Text>
              UI engineer living in <Hoverable color={{ from: '#E10101', to: '#FF7A7A' }} href='https://www.google.com/maps/place/Paris/@48.8588495,2.3120158,13z/data=!3m1!4b1!4m5!3m4!1s0x47e66e1f06e2b70f:0x40b82c3688c9460!8m2!3d48.856614!4d2.3522219' icon={<DrawingPinIcon />}>Paris</Hoverable>
            </Text>
            <Text css={{ marginTop: '8px' }}>
              Intern <Hoverable color={{ from: '#4F0599', to: '#8000FF' }} href='https://scaleway.com' icon={<svg fill="#4F0599" width="20px" height="20px" viewBox="0 0 24 24" role="img" xmlns="http://www.w3.org/2000/svg"><title>Scaleway icon</title><path d="M16.61 11.11v5.72a1.77 1.77 0 0 1-1.54 1.69h-4a1.43 1.43 0 0 1-1.31-1.22 1.09 1.09 0 0 1 0-.18 1.37 1.37 0 0 1 1.37-1.36h1.74a1 1 0 0 0 1-1v-3.62a1.4 1.4 0 0 1 1.18-1.39h.17a1.37 1.37 0 0 1 1.39 1.36zm-6.46 1.74V9.26a1 1 0 0 1 1-1H13a1.37 1.37 0 0 0 1.37-1.37 1 1 0 0 0 0-.17 1.45 1.45 0 0 0-1.41-1.2H9a1.81 1.81 0 0 0-1.58 1.66v5.7a1.37 1.37 0 0 0 1.37 1.37H9a1.4 1.4 0 0 0 1.15-1.4zm12-4.29V20A4.53 4.53 0 0 1 18 24h-7.58a8.57 8.57 0 0 1-8.56-8.57V4.54A4.54 4.54 0 0 1 6.4 0h7.18a8.56 8.56 0 0 1 8.56 8.56zm-2.74 0a5.83 5.83 0 0 0-5.82-5.82H6.4a1.79 1.79 0 0 0-1.8 1.8v10.89a5.83 5.83 0 0 0 5.82 5.8h7.44a1.79 1.79 0 0 0 1.54-1.48z"/></svg>}>Scaleway</Hoverable>
            </Text>
          </Col>
          <Row justify="center" align="center">
            <Icon href="https://twitter.com/tomlienard" big css={{ marginRight: '8px' }}>
              <TwitterLogoIcon />
            </Icon>
            <Icon href="https://github.com/QuiiBz" big>
              <GitHubLogoIcon />
            </Icon>
          </Row>
        </Row>
      </Col>
    </Layout>
  )
}

export default Home
