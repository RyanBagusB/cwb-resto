import Homepage from '../views/pages/admin/homepage/homepage';
import DiscountManagement from '../views/pages/admin/setting/discountManagement';
import PrinterManagement from '../views/pages/admin/setting/printerManagement';
import Setting from '../views/pages/admin/setting/setting';
import TaxManagement from '../views/pages/admin/setting/taxManagement';

import Home from '../views/pages/user/home/home';
import Menu from '../views/pages/user/menu/menu';
import MenuDetail from '../views/pages/user/menu/menuDetail';

const adminRoutes = {
  '/': Homepage,
  '/home': Homepage,
  '/setting': Setting,
  '/setting/:verb': Setting,
};

const settingRoutes = {
  'kelola-diskon': DiscountManagement,
  'kelola-pajak': TaxManagement,
  'kelola-printer': PrinterManagement,
}

const userRoutes = {
  '/': Home,
  '/menu': Menu,
  '/menu/:verb/:id': MenuDetail,
};
 
export { adminRoutes, userRoutes, settingRoutes };
