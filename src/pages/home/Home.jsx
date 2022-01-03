import { Customers, Experience, Features, Header, News, Specials, Topics } from './containers';

function Home() {
  return (
    <div className="home">
      <Header />
      <Specials />
      <Features />
      <Experience />
      <Customers />
      <Topics />
      <News />
    </div>
  );
}

export default Home;
