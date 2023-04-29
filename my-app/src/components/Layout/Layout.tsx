import { Outlet } from 'react-router-dom';
import { HeaderResponsive } from '../Header/Header';
import './Layout.css';

export default function Layout() {
  return (
    <div style={{ maxWidth: '1116px' }}>
      <HeaderResponsive
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
