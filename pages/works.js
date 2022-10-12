import { Container, Heading} from '@chakra-ui/react'
import Layout from '../components/layouts/article'

const YourContracts = () => (
  <Layout title="yourcontract">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        YourContract
      </Heading>
      <div style={{ margin: 32 }}>
        <span style={{ marginRight: 8 }}>📝</span>
        This Is Your App Home. You can start editing it in{" "}
        <span
          className="highlight"
          style={{ marginLeft: 4, /* backgroundColor: "#f9f9f9", */ padding: 4, borderRadius: 4, fontWeight: "bolder" }}
        >
          packages/react-app/src/views/Home.jsx
        </span>
      </div>
      <div style={{ margin: 32 }}>
        <span style={{ marginRight: 8 }}>✏️</span>
        Edit your smart contract{" "}
        <span
          className="highlight"
          style={{ marginLeft: 4, /* backgroundColor: "#f9f9f9", */ padding: 4, borderRadius: 4, fontWeight: "bolder" }}
        >
          YourContract.sol
        </span>{" "}
        in{" "}
        <span
          className="highlight"
          style={{ marginLeft: 4, /* backgroundColor: "#f9f9f9", */ padding: 4, borderRadius: 4, fontWeight: "bolder" }}
        >
          packages/hardhat/contracts
        </span>
      </div>

      <div style={{ margin: 32 }}>
        <span style={{ marginRight: 8 }}>🤖</span>
        An example prop of your balance{" "}
        was passed into the
        <span
          className="highlight"
          style={{ marginLeft: 4, /* backgroundColor: "#f9f9f9", */ padding: 4, borderRadius: 4, fontWeight: "bolder" }}
        >
          Home.jsx
        </span>{" "}
        component from
        <span
          className="highlight"
          style={{ marginLeft: 4, /* backgroundColor: "#f9f9f9", */ padding: 4, borderRadius: 4, fontWeight: "bolder" }}
        >
          App.jsx
        </span>
      </div>
      <div style={{ margin: 32 }}>
        <span style={{ marginRight: 8 }}>💭</span>
        Check out the "Hints" tab for more tips.
      </div>
      <div style={{ margin: 32 }}>
        <span style={{ marginRight: 8 }}>🛠</span>
        Tinker with your smart contract.
      </div>
    </Container>
  </Layout>
)

export default YourContracts
export { getServerSideProps } from '../components/chakra'
