import { useRouter } from 'next/router';
import React, { useMemo, useState } from 'react';

const Header: React.FC = () => {
  const [isOpenSubNav, setIsOpenSubNav] = useState(false);

  const closeSubNav = () => setIsOpenSubNav(false);

  const openSubNav = () => setIsOpenSubNav(true);

  const router = useRouter();

  const [subNavContent, setSubNavContent] = useState('stories');

  const isSubNavHover = useMemo(() => {
    return subNavContent === 'shop' ? true : false;
  }, [subNavContent]);

  return <div>Header</div>;
};

export default Header;
