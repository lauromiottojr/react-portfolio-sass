import SocialNetworks from './SocialNetworks'

import avatar from '../img/me.jpg'

import '../styles/components/sidebar.sass'
import InformationContainer from './InformationContainer'

const Sidebar = () => {
  return (
    <aside id="sidebar">
      <img src={avatar} alt="Lauro Miotto Junior" />
      <p className="title">Full Stack / Back End Developer</p>
      <SocialNetworks />
      <InformationContainer />
      <a href="" className="btn">download cv</a>
    </aside>
  )
}

export default Sidebar