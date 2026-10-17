import { createBrowserRouter, RouterProvider } from 'react-router'
import PublicLayout from '../app/layouts/PublicLayout'
import MainLayout from '../app/layouts/MainLayout'
import ProtectedRoutes from './secure/ProtectedRoutes'
import PublicRoutes from './secure/PublicRoutes'

import LoginPage from '../features/auth/ui/pages/LoginPage'
import RegisterPage from '../features/auth/ui/pages/RegisterPage'
import HomePage from '../features/tracker/ui/pages/HomePage'
import QuestionTrackerPage from '../features/tracker/ui/pages/QuestionTrackerPage'
import AddQuestionPage from '../features/tracker/ui/pages/AddQuestionPage'
import UpcomingFeaturePage from '../shared/ui/components/UpcomingFeaturePage'
import InterviewDrivesPage from '../features/drives/ui/pages/InterviewDrivesPage'
import AddInterviewDrivePage from '../features/drives/ui/pages/AddInterviewDrivePage'

import { Code2, GitBranch, Layers, Kanban } from 'lucide-react'

const AppRoutes = () => {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <PublicRoutes />,
      children: [
        {
          element: <PublicLayout />,
          children: [
            {
              index: true,
              element: <LoginPage />,
            },
            {
              path: 'register',
              element: <RegisterPage />,
            },
          ],
        },
      ],
    },
    {
      path: '/',
      element: <ProtectedRoutes />,
      children: [
        {
          element: <MainLayout />,
          children: [
            {
              path: 'dashboard',
              element: <HomePage />,
            },

        /* Question Repository Routes */
        { path: 'questions', element: <QuestionTrackerPage /> },
        { path: 'questions/add', element: <AddQuestionPage /> },


        /* Interview Drive Links Routes */
        { path: 'drives', element: <InterviewDrivesPage /> },
        { path: 'drives/add', element: <AddInterviewDrivePage /> },


        /* DSA Specific Routes */
        {
          path: 'dsa',
          element: (
            <UpcomingFeaturePage
              featureName="DSA practice"
              description="Weekly problem sets, solution snapshots, and clear approach notes are being brought together into a focused space for deliberate algorithm practice."
              icon={Code2}
            />
          ),
        },
        {
          path: 'dsa/add',
          element: (
            <UpcomingFeaturePage
              featureName="the DSA entry builder"
              description="A thoughtful workflow for capturing problem details, solution images, and the reasoning behind each approach is in the works."
              icon={Code2}
            />
          ),
        },

        /* Full-Stack Routes */
        {
          path: 'fullstack',
          element: (
            <UpcomingFeaturePage
              featureName="full-stack learning"
              description="Explore web fundamentals, architecture, and practical system concepts in a cleaner, more connected study experience."
              icon={Layers}
            />
          ),
        },
        {
          path: 'fullstack/add',
          element: (
            <UpcomingFeaturePage
              featureName="the full-stack question builder"
              description="A simple way to capture web concepts, architecture notes, and the details you want to revisit is being designed."
              icon={Layers}
            />
          ),
        },

        /* Git & GitHub Routes */
        {
          path: 'git',
          element: (
            <UpcomingFeaturePage
              featureName="Git & VCS drills"
              description="Practice version-control workflows and tricky repository scenarios with a calmer, more structured set of tools."
              icon={GitBranch}
            />
          ),
        },
        {
          path: 'git/add',
          element: (
            <UpcomingFeaturePage
              featureName="the Git scenario builder"
              description="Capture realistic Git situations, expected outcomes, and the commands that help you reason through them."
              icon={GitBranch}
            />
          ),
        },

        /* Machine Coding Build Routes */
        {
          path: 'machine-coding',
          element: (
            <UpcomingFeaturePage
              featureName="machine coding practice"
              description="A dedicated home for timed builds, reusable design decisions, and project progress is taking shape."
              icon={Kanban}
            />
          ),
        },
        {
          path: 'machine-coding/add',
          element: (
            <UpcomingFeaturePage
              featureName="the project builder"
              description="Plan a machine-coding build, record its key requirements, and keep implementation notes together."
              icon={Kanban}
            />
          ),
        },
          ],
        },
      ],
    },
  ])

  return <RouterProvider router={router} />
}

export default AppRoutes