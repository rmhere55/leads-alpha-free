
import CountUp from 'react-countup';

const ConnectCreators = () => {
  return (
    <section className="connect-section">
      <div className="connect-content">
        <div className="connect-title">
          <h2>
            Connect With <span className="highlight">
                <CountUp start={0} end={1000} duration={2} separator="," />+

              </span><br />
            <span className="highlight">UGC Creators</span>
          </h2>
        </div>
        <div className="connect-description">
          <p>
            Access Creators who speak 2 or more languages to advertise your product and services
            in a language of your choice. From <em>English</em> to Nyanja, to IsiZulu and more!
          </p>
        </div>
      </div>
    </section>
  );
};

export default ConnectCreators;
