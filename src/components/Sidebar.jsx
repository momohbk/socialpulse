import { NavLink } from 'react-router-dom';
import {
  LayoutDashboard,
  BarChart3,
  FileText,
  Settings,
} from 'lucide-react';

const navItems = [
  { to: '/', icon: LayoutDashboard, label: 'Dashboard' },
  { to: '/analytics', icon: BarChart3, label: 'Analytics' },
  { to: '/reports', icon: FileText, label: 'Reports' },
  { to: '/settings', icon: Settings, label: 'Settings' },
];

export default function Sidebar() {
  return (
    <aside className="w-16 lg:w-56 bg-white border-r flex flex-col items-center lg:items-stretch py-6">
      <div className="hidden lg:flex items-center gap-2 px-4 mb-8">
        <div className="w-8 h-8 bg-brand-600 rounded-lg flex items-center justify-center">
          <span className="text-white font-bold text-sm">SP</span>
        </div>
        <span className="font-bold text-gray-900">SocialPulse</span>
      </div>

      <nav className="flex flex-col gap-1 px-2 lg:px-3">
        {navItems.map(({ to, icon: Icon, label }) => (
          <NavLink
            key={to}
            to={to}
            end={to === '/'}
            className={({ isActive }) =>
              `flex items-center justify-center lg:justify-start gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                isActive
                  ? 'bg-brand-50 text-brand-600'
                  : 'text-gray-500 hover:bg-gray-100 hover:text-gray-700'
              }`
            }
          >
            <Icon className="w-5 h-5 flex-shrink-0" />
            <span className="hidden lg:block">{label}</span>
          </NavLink>
        ))}
      </nav>
    </aside>
  );
}
