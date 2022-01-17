import "./style.css";

const Section = ({ title, body, headerContent }) => (
  <section className="section">
    <header className="section__header">
      {title}
      {headerContent}
    </header>
    <div>{body}</div>
  </section>
);

export default Section;
