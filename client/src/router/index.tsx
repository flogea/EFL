import React, { Children } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import { ContructorPage, HomePage, SignIn, SignUp, TestPage } from '../pages';
import { AddTest } from '../components/organisms/AddTest/AddTest';
import { AddSimpleTest } from '../components/organisms/AddSimpleTest/AddSimpleTest';
import { AddHardTest } from '../components/organisms/AddHardTest/AddHardTest';
import { Layout } from '../pages/Layout/Layout';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <HomePage />
      },
      {
        path: 'signin',
        element: <SignIn />
      },
      {
        path: 'signup',
        element: <SignUp />
      },
      {
        path: 'hardtest',
        element: <AddHardTest />
      },
      {
        path: 'simpletest',
        element: <AddSimpleTest />
      },
      {
        path: 'test',
        element: <TestPage />,
        children: [
          {
            path: 'addtest',
            element: <AddTest />,
            children: [
              // {
              //   path: 'simpletest',
              //   element: <AddSimpleTest />
              // },
              {
                path: 'filetest',
                element: <AddHardTest />
              },
            ]
          }
        ]
      },
      {
        path: 'lab',
        element: <HomePage />,
        children: [
          {
            path: 'addlab',
            element: <ContructorPage />
          }
        ]
      },
      {
        path: 'constructor',
        element: <ContructorPage />
      },
      {
        path: 'test/addtest/simpletest',
        element: <AddSimpleTest />
      }
    ]
  },
  {
    path: '*',
    element: <div>404</div>
  }
]);
