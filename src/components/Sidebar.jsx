import avatar from '../img/me.jpg'

import '../styles/components/sidebar.sass'

const Sidebar = () => {
  return (
    <aside id="sidebar">
      <img src={avatar} alt="Lauro Miotto Junior" />
      <p className="title">Desenvolvedor</p>
      <p>redes sociais</p>
      <p>contato</p>
      <a href="" className="btn">download cv</a>
    </aside>
  )
}

export default Sidebar