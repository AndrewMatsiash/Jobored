import { Outlet } from 'react-router-dom';
import './Layout.css';
import Header from '../Header';

export default function Layout() {
  return (
    <div style={{ maxWidth: '1116px' }}>
      <Header
        links={[
          { label: 'Поиск вакансий', link: '/searchPage' },
          { label: 'Избранное', link: '/favorites' },
        ]}
      />
      <div>
        <Outlet />
      </div>
    </div>
  );
}
