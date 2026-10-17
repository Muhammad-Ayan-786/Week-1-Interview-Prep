import { useState } from 'react';
import { Outlet, Link, useLocation } from 'react-router';
import {
  PanelLeftClose,
  PanelLeftOpen,
  House,
  Library,
  BrainCircuit,
  PanelsTopLeft,
  GitBranch,
  FolderKanban,
  BriefcaseBusiness,
  CirclePlus,
  Menu,
  X,
  LogOut,
} from 'lucide-react';
import { useAuth } from '../../features/auth/hooks/useAuth';

const navigationGroups = [
  {
    title: 'Your Workspace',
    items: [
      { name: 'Dashboard', path: '/dashboard', icon: House },
    ],
  },
  {
    title: 'Problem Practice',
    items: [
      { name: 'Question Library', path: '/questions', icon: Library },
      { name: 'DSA Practice', path: '/dsa', icon: BrainCircuit },
    ],
  },
  {
    title: 'Engineering Skills',
    items: [
      { name: 'Full-Stack Concepts', path: '/fullstack', icon: PanelsTopLeft },
      { name: 'Git & Version Control', path: '/git', icon: GitBranch },
    ],
  },
  {
    title: 'Projects & Interviews',
    items: [
      { name: 'Machine Coding Projects', path: '/machine-coding', icon: FolderKanban },
      { name: 'Interview Resources', path: '/drives', icon: BriefcaseBusiness },
    ],
  },
  {
    title: 'Create New',
    items: [
      { name: 'Add a Question', path: '/questions/add', icon: CirclePlus, isForm: true },
      { name: 'Add DSA Practice', path: '/dsa/add', icon: CirclePlus, isForm: true },
      { name: 'Add Full-Stack Concept', path: '/fullstack/add', icon: CirclePlus, isForm: true },
      { name: 'Add Git Scenario', path: '/git/add', icon: CirclePlus, isForm: true },
      { name: 'Start a Coding Project', path: '/machine-coding/add', icon: CirclePlus, isForm: true },
      { name: 'Add Interview Resource', path: '/drives/add', icon: CirclePlus, isForm: true },
    ],
  },
];


export const MainLayout = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const location = useLocation();
  const { currentUser, logout } = useAuth();


  const renderNavContent = (collapsed) => (
    <div className="flex-1 overflow-y-auto p-2.5 space-y-5 scrollbar-thin">
      {navigationGroups.map((group, gIdx) => (
        <div key={gIdx} className="space-y-1">
          {!collapsed && (
            <p className="px-2.5 text-[10px] font-mono font-bold uppercase tracking-wider text-(--color-text-secondary)/70 mb-1.5">
              {group.title}
            </p>
          )}
          {group.items.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;

            return (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsMobileOpen(false)}
                title={collapsed ? item.name : undefined}
                className={`flex items-center gap-3 px-2.5 py-2 rounded-xl text-xs font-mono transition-all w-full ${isActive
                  ? 'bg-(--color-primary) text-(--color-neutral) font-bold shadow-xs'
                  : item.isForm
                    ? 'text-(--color-tertiary) hover:bg-(--color-surface-muted) hover:text-(--color-neutral)'
                    : 'text-(--color-text-secondary) hover:bg-(--color-surface-muted) hover:text-(--color-neutral)'
                  } ${collapsed ? 'justify-center px-0' : ''}`}
              >
                <Icon className="w-4 h-4 shrink-0" />
                {!collapsed && <span className="truncate">{item.name}</span>}
              </Link>
            );
          })}
        </div>
      ))}
    </div>
  );

  return (
    <div className="flex h-dvh min-w-0 overflow-hidden bg-(--color-bg) text-(--color-neutral)">

      {/* Mobile Off-Canvas Sidebar Drawer */}
      {isMobileOpen && (
        <div className="fixed inset-0 z-50 flex md:hidden" role="presentation">
          {/* Backdrop */}
          <button
            type="button"
            aria-label="Close navigation"
            onClick={() => setIsMobileOpen(false)}
            className="fixed inset-0 cursor-default bg-black/40 backdrop-blur-xs transition-opacity"
          />

          {/* Drawer Sidebar */}
          <aside
            role="dialog"
            aria-modal="true"
            aria-label="Main navigation"
            className="relative z-10 flex h-dvh w-[min(18rem,85vw)] shrink-0 flex-col justify-between border-r border-(--color-border) bg-(--color-surface) shadow-2xl"
          >
            <div className="p-3.5 border-b border-(--color-border)/60 flex items-center justify-between">
              <Link to="/dashboard" onClick={() => setIsMobileOpen(false)} className="flex items-center gap-2">
                <span className="font-serif font-bold text-xl tracking-tight">Sunday Ready</span>
                <span className="w-2 h-2 rounded-full bg-(--color-primary) shrink-0" />
              </Link>
              <button
                type="button"
                onClick={() => setIsMobileOpen(false)}
                className="p-1.5 rounded-lg hover:bg-(--color-surface-muted) text-(--color-text-secondary)"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {renderNavContent(false)}

            <div className="p-3 border-t border-(--color-border)/60 flex items-center gap-3">
              <img
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80"
                alt="Ayan Profile"
                className="w-8 h-8 rounded-full object-cover border border-(--color-border) shrink-0"
              />
              <div className="flex flex-col truncate">
                <span className="text-xs font-sans font-bold">{currentUser?.fullName}</span>
                <span className="truncate text-[10px] font-mono text-emerald-700 font-semibold">{currentUser?.email}</span>
              </div>
              <button
                type="button"
                onClick={logout}
                aria-label="Sign out"
                title="Sign out"
                className="ml-auto rounded-lg p-2 text-(--color-text-secondary) hover:bg-(--color-surface-muted) hover:text-(--color-neutral)"
              >
                <LogOut className="h-4 w-4" />
              </button>
            </div>
          </aside>
        </div>
      )}

      {/* Desktop Navigation Sidebar (Hidden on Mobile) */}
      <aside
        className={`hidden md:flex h-dvh shrink-0 bg-(--color-surface) border-r border-(--color-border)/70 flex-col justify-between transition-[width] duration-300 sticky top-0 z-40 ${isCollapsed ? 'w-16' : 'w-56 lg:w-64'
          }`}
      >
        <div className="h-16 shrink-0 p-3 border-b border-(--color-border)/60 flex items-center justify-between">
          <Link to="/dashboard" className="flex items-center gap-2 overflow-hidden whitespace-nowrap">
            <span className="font-serif font-bold text-xl tracking-tight">
              {!isCollapsed && 'Sunday Ready'}
            </span>
            <span className="w-2 h-2 rounded-full bg-(--color-primary) shrink-0" />
          </Link>

          <button
            type="button"
            onClick={() => setIsCollapsed(!isCollapsed)}
            className="p-1.5 rounded-lg hover:bg-(--color-surface-muted) text-(--color-text-secondary) hover:text-(--color-neutral) transition-colors cursor-pointer"
            title={isCollapsed ? 'Expand Sidebar' : 'Collapse Sidebar'}
          >
            {isCollapsed ? <PanelLeftOpen className="w-5 h-5" /> : <PanelLeftClose className="w-5 h-5" />}
          </button>
        </div>

        {renderNavContent(isCollapsed)}

        <div className="p-3 border-t border-(--color-border)/60 flex items-center gap-3">
          <img
            src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80"
            alt="Ayan Profile"
            className="w-8 h-8 rounded-full object-cover border border-(--color-border) shrink-0"
          />
          {!isCollapsed && (
            <div className="flex flex-col truncate">
              <span className="text-xs font-sans font-bold">{currentUser?.fullName}</span>
              <span className="text-[10px] font-mono text-emerald-700 font-semibold">Signed in</span>
            </div>
          )}
          <button
            type="button"
            onClick={logout}
            aria-label="Sign out"
            title="Sign out"
            className={`rounded-lg p-2 text-(--color-text-secondary) hover:bg-(--color-surface-muted) hover:text-(--color-neutral) ${isCollapsed ? 'mx-auto' : 'ml-auto'}`}
          >
            <LogOut className="h-4 w-4" />
          </button>
        </div>
      </aside>

      {/* Main Content Container */}
      <div className="flex h-dvh min-w-0 flex-1 flex-col overflow-x-clip overflow-y-auto overscroll-y-contain">
        {/* Top Header */}
        <header className="sticky top-0 z-30 flex h-16 min-h-16 shrink-0 min-w-0 items-center justify-between gap-2 border-b border-(--color-border)/60 bg-(--color-bg)/80 px-3 backdrop-blur-md sm:px-6">
          <div className="flex min-w-0 items-center gap-2.5 text-xs font-mono text-(--color-text-secondary)">
            {/* Mobile HamburgerButton */}
            <button
              type="button"
              onClick={() => setIsMobileOpen(true)}
              className="md:hidden p-1.5 hover:bg-(--color-surface-muted) rounded-lg text-(--color-neutral) cursor-pointer"
              title="Open Navigation"
            >
              <Menu className="w-5 h-5" />
            </button>

            {/* Desktop Collapse Toggle */}
            <button
              type="button"
              onClick={() => setIsCollapsed(!isCollapsed)}
              className="hidden md:block p-1 hover:bg-(--color-surface-muted) rounded-md text-(--color-neutral) cursor-pointer"
            >
              {isCollapsed ? <PanelLeftOpen className="w-4 h-4" /> : <PanelLeftClose className="w-4 h-4" />}
            </button>

            <span className="truncate hidden min-[450px]:inline text-[11px] sm:text-xs">CYCLE WEEK 8 • 4 DAYS TO MOCK REVIEW</span>
          </div>

          <div className="flex shrink-0 items-center gap-2">
            <span className="px-2.5 py-1 bg-emerald-500/10 text-emerald-800 border border-emerald-500/20 rounded-full text-[10px] sm:text-xs font-mono font-semibold whitespace-nowrap">
              ● Target Pace
            </span>
          </div>
        </header>

        {/* Dynamic Page Content */}
        <main className="mx-auto w-full min-w-0 max-w-7xl flex-1 overflow-x-clip p-3 sm:p-6 lg:p-8">
          <Outlet />
        </main>
      </div>

    </div>
  );
};

export default MainLayout;