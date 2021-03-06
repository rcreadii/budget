import Head from "next/head";
import { useState } from "react";
import AddRecurringPayment from "../components/AddRecurringPayment";
import CashBubble from "../components/CashBubble";
import CashCalculator from "../components/CashCalculator";
import DisplayLedger from "../components/DisplayLedger";
import MyHeader from "../components/Header";
import NavBarLedger from "../components/NavBarLedger";
import useLedger from "../components/useLedger";

export default function Home() {
  const {
    addCash,
    addDebt,
    addPayment,
    addSavings,
    cash,
    debt,
    ledger,
    savings,
  } = useLedger();
  const [onHomePage, setOnHomePage] = useState(true);
  const [revealLedger, setRevealLedger] = useState(true);
  const [revealRecurringPayment, setRevealRecurringPayment] = useState(false);

  return (
    <div className="container">
      <Head>
        <title>$Left Today</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css"
          rel="stylesheet"
        />
      </Head>

      <main>
        <MyHeader />
        {onHomePage ? (
          <>
            <div style={{ position: "relative" }}>
              <NavBarLedger
                addDebt={addDebt}
                addSavings={addSavings}
                debt={debt}
                savings={savings}
                onHomePage={onHomePage}
                setOnHomePage={setOnHomePage}
              />
            </div>
            <CashBubble cash={cash} />
            <CashCalculator addCash={addCash} />
          </>
        ) : (
          <>
            <div style={{ position: "relative" }}>
              <NavBarLedger
                addDebt={addDebt}
                addSavings={addSavings}
                debt={debt}
                revealLedger={revealLedger}
                setRevealLedger={setRevealLedger}
                revealRecurringPayment={revealRecurringPayment}
                setRevealRecurringPayment={setRevealRecurringPayment}
                savings={savings}
                onHomePage={onHomePage}
                setOnHomePage={setOnHomePage}
              />
            </div>
            {!revealRecurringPayment ? (
              <DisplayLedger ledger={ledger} />
            ) : (
              <AddRecurringPayment addPayment={addPayment} />
            )}
          </>
        )}
      </main>

      <footer>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by <img src="/vercel.svg" alt="Vercel" className="logo" />
        </a>
      </footer>

      <style jsx>{`
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        footer img {
          margin-left: 0.5rem;
        }

        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 4rem;
        }

        .title,
        .description {
          text-align: center;
        }

        .description {
          line-height: 1.5;
          font-size: 1.5rem;
        }

        .logo {
          height: 1em;
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
}
