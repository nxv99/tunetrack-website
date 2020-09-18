import Header from '../components/header';
import Footer from '../components/footer';

function Layout(props) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      {props.children}
      <Footer />
    </div>
  );
}

export default Layout;
