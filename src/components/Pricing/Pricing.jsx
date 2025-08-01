

const Pricing = () => {
  return (
    <div className="pricing-container">
      <h1 className="pricing-title">Pricing</h1>

      <div className="plans-wrapper">
        
  {/* Basic Plan */}
  <div className="plan-card basic-card">
    <div className="plan-inner basic-inner">
      <div className="plan-tag">
          <span className="status-dot"></span>
            Basic</div>
      <h2>Basic Plan</h2>
      <p>A basic plan with exciting features</p>
      <h3>$300</h3>
      <button className="wallet-btn">Add To Wallet ↗</button>
    </div>
    <ul className="feature-list">
      <li>Covers 1–3 campaigns /12 months</li>
      <li>Tracked post results</li>
      <li>Up to 5 creator invitations</li>
      <li>Standard support</li>
    </ul>
  </div>

  {/* Standard Plan */}
  <div className="plan-card standard-card">
    <div className="plan-inner standard-inner">
      <div className="plan-tag bonus-tag">
          <span className="status-dot"></span>
        +100 Bonus Credit</div>
      <h2>Standard Plan</h2>
      <p>Get +100 Bonus Credits</p>
      <h3>$1000</h3>
      <button className="wallet-btn">Add To Wallet ↗</button>
    </div>
    <ul className="feature-list">
      <li>Covers 3–8 campaigns /12 Months</li>
      <li>Up to 15 creator invitations</li>
      <li>Tracked post results</li>
      <li>Standard support</li>
      <li>AI brief writing</li>
    </ul>
  </div>

        {/* Professional Plan */}
        <div>
        <div className="plan-card professional-card">
          <div className="plan-inner professional-inner">
            <div className="plan-tag bonus-tag">
          <span className="status-dot"></span>
                +150 Bonus Credit</div>
            <h2>Professional</h2>
            <p>Get +150 Bonus Credits</p>
            <h3>$2500</h3>
            <button className="wallet-btn-wh">Add To Wallet ↗</button>

          </div>

            <ul className="feature-list">
              <li>8–20 campaigns /12 Months</li>
              <li>Up to 25 creator invitations</li>
              <li>Tracked post results</li>
              <li>Priority support</li>
              <li>AI brief writing</li>
              <li>Dedicated Account Manager</li>
            </ul>
        </div>

      {/* Still can't decide */}
      <div className="undecided-card">
        <h3>Still can’t decide?</h3>
        <p>Let’s figure out what you need</p>
        <button className="wallet-btn">Let’s talk ↗</button>
      </div>
      </div>
    </div></div>
  );
};

export default Pricing;
