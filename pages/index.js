import Link from 'next/link';
import Header from "../components/header/Header";


const menuItems = [{
	value: "Portofolio",
	link: "/portofolio"
}, {
	value: "About",
	link: "/about"
}, {
	value: "Blog",
	link: "/blog"
}, {
	value: "Get in touch",
	link: "/get-in-touch"
}];

const Index = () => (
  <div>
    <p>Hello Next.js</p>
	    <Header menuItems={menuItems}/>
    </div>
)

export default Index