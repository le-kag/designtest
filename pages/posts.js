import { Container, Heading } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
const Hints = () => (
  <Layout title="Hints">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Hints
      </Heading>

      <Section delay={0.1}>
      <div style={{ margin: 32 }}>
        <span style={{ marginRight: 8 }}>👷</span>
        Edit your <b>contract</b> in
        <span
          className="highlight"
          style={{ marginLeft: 4, /* backgroundColor: "#f9f9f9", */ padding: 4, borderRadius: 4, fontWeight: "bolder" }}
        >
          packages/hardhat/contracts
        </span>
      </div>
      <div style={{ margin: 32 }}>
        <span style={{ marginRight: 8 }}>🛰</span>
        <b>compile/deploy</b> with
        <span
          className="highlight"
          style={{ marginLeft: 4, /* backgroundColor: "#f1f1f1", */ padding: 4, borderRadius: 4, fontWeight: "bolder" }}
        >
          yarn run deploy
        </span>
      </div>

      <div style={{ margin: 32 }}>
        <span style={{ marginRight: 8 }}>🚀</span>
        Your <b>contract artifacts</b> are automatically injected into your frontend at
        <span
          className="highlight"
          style={{ marginLeft: 4, /* backgroundColor: "#f9f9f9", */ padding: 4, borderRadius: 4, fontWeight: "bolder" }}
        >
          packages/react-app/src/contracts/
        </span>
      </div>

      <div style={{ margin: 32 }}>
        <span style={{ marginRight: 8 }}>🎛</span>
        Edit your <b>frontend</b> in
        <span
          className="highlight"
          style={{ marginLeft: 4, /* backgroundColor: "#f9f9f9", */ padding: 4, borderRadius: 4, fontWeight: "bolder" }}
        >
          packages/reactapp/src/App.js
        </span>
      </div>

      <div style={{ marginTop: 32 }}>
        <span style={{ marginRight: 8 }}>🔭</span>
        explore the
        <span
          className="highlight"
          style={{
            marginLeft: 4,
            marginRight: 4,
            /* backgroundColor: "#f9f9f9", */
            padding: 4,
            borderRadius: 4,
            fontWeight: "bolder",
          }}
        >
          🖇 hooks
        </span>
        and
        <span
          className="highlight"
          style={{ marginLeft: 4, /* backgroundColor: "#f9f9f9", */ padding: 4, borderRadius: 4, fontWeight: "bolder" }}
        >
          📦 components
        </span>
      </div>

      <div style={{ marginTop: 32 }}>
        for example, the
        <span
          className="highlight"
          style={{ margin: 4, /* backgroundColor: "#f9f9f9", */ padding: 4, borderRadius: 4, fontWeight: "bolder" }}
        >
          useBalance()
        </span>{" "}
        hook keeps track of your balance:
      </div>

      <div style={{ margin: 8 }}>
        <div>
          <b>useTokenList()</b> can get you an array of tokens from{" "}
          <a href="https://tokenlists.org" target="_blank" rel="noopener noreferrer">
            tokenlists.org!
          </a>
        </div>
      </div>

      <div style={{ marginTop: 32 }}>
        as you build your app you&apos;ll need web3 specific components like an
        <span
          className="highlight"
          style={{ margin: 4, /* backgroundColor: "#f9f9f9", */ padding: 4, borderRadius: 4, fontWeight: "bolder" }}
        >
          {"<AddressInput/>"}
        </span>
        component:
        <div style={{ width: 350, padding: 16, margin: "auto" }}>
        </div>
        <div>(try putting in your address, an ens address, or scanning a QR code)</div>
      </div>

      <div style={{ marginTop: 32 }}>
        this balance could be multiplied by
        <span
          className="highlight"
          style={{ margin: 4, /* backgroundColor: "#f9f9f9", */ padding: 4, borderRadius: 4, fontWeight: "bolder" }}
        >
          price
        </span>{" "}
        that is loaded with the
        <span
          className="highlight"
          style={{ margin: 4, /* backgroundColor: "#f9f9f9", */ padding: 4, borderRadius: 4, fontWeight: "bolder" }}
        >
          usePrice
        </span>{" "}
        hook with the current value:
      </div>

      <div style={{ marginTop: 32 }}>
        <span style={{ marginRight: 8 }}>💧</span>
        use the <b>faucet</b> to send funds to
        <span
          className="highlight"
          style={{ marginLeft: 4, /* backgroundColor: "#f9f9f9", */ padding: 4, borderRadius: 4, fontWeight: "bolder" }}
        >
          
        </span>
      </div>

      <div style={{ marginTop: 32 }}>
        <span style={{ marginRight: 8 }}>📡</span>
        deploy to a testnet or mainnet by editing
        <span
          className="highlight"
          style={{ marginLeft: 4, /* backgroundColor: "#f9f9f9", */ padding: 4, borderRadius: 4, fontWeight: "bolder" }}
        >
          packages/hardhat/hardhat.config.js
        </span>
        and running
        <span
          className="highlight"
          style={{ marginLeft: 4, /* backgroundColor: "#f1f1f1", */ padding: 4, borderRadius: 4, fontWeight: "bolder" }}
        >
          yarn run deploy
        </span>
      </div>

      <div style={{ marginTop: 32 }}>
        <span style={{ marginRight: 8 }}>🔑</span>
        <span
          className="highlight"
          style={{ marginLeft: 4, /* backgroundColor: "#f1f1f1", */ padding: 4, borderRadius: 4, fontWeight: "bolder" }}
        >
          yarn run generate
        </span>
        will create a deployer account in
        <span
          className="highlight"
          style={{ marginLeft: 4, /* backgroundColor: "#f9f9f9", */ padding: 4, borderRadius: 4, fontWeight: "bolder" }}
        >
          packages/hardhat
        </span>
        <div style={{ marginTop: 8 }}>
          (use{" "}
          <span
            className="highlight"
            style={{
              marginLeft: 4,
              /* backgroundColor: "#f1f1f1", */ padding: 4,
              borderRadius: 4,
              fontWeight: "bolder",
            }}
          >
            yarn run account
          </span>{" "}
          to display deployer address and balance)
        </div>
      </div>

      <div style={{ marginTop: 32 }}>
        <span style={{ marginRight: 8 }}>⚙️</span>
        build your app with
        <span
          className="highlight"
          style={{ marginLeft: 4, /* backgroundColor: "#f1f1f1", */ padding: 4, borderRadius: 4, fontWeight: "bolder" }}
        >
          yarn run build
        </span>
      </div>

      <div style={{ marginTop: 32 }}>
        <span style={{ marginRight: 8 }}>🚢</span>
        ship it!
        <span
          className="highlight"
          style={{ marginLeft: 4, /* backgroundColor: "#f1f1f1", */ padding: 4, borderRadius: 4, fontWeight: "bolder" }}
        >
          yarn run surge
        </span>
        or
        <span
          className="highlight"
          style={{ marginLeft: 4, /* backgroundColor: "#f1f1f1", */ padding: 4, borderRadius: 4, fontWeight: "bolder" }}
        >
          yarn run s3
        </span>
        or
        <span
          className="highlight"
          style={{ marginLeft: 4, /* backgroundColor: "#f1f1f1", */ padding: 4, borderRadius: 4, fontWeight: "bolder" }}
        >
          yarn run ipfs
        </span>
      </div>

      <div style={{ marginTop: 32 }}>
        <span style={{ marginRight: 8 }}>💬</span>
        for support, join this
        <span
          className="highlight"
          style={{ marginLeft: 4, /* backgroundColor: "#f9f9f9", */ padding: 4, borderRadius: 4, fontWeight: "bolder" }}
        >
          <a target="_blank" rel="noopener noreferrer" href="https://t.me/joinchat/KByvmRe5wkR-8F_zz6AjpA">
            Telegram Chat
          </a>
        </span>
      </div>
      <div style={{ padding: 128 }}>
        🛠 Check out your browser&apos;s developer console for more... (inspect console) 🚀
      </div>
      </Section>
    </Container>
  </Layout>
)

export default Hints
export { getServerSideProps } from '../components/chakra'
