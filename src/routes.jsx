import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';
import Contact from './pages/Contact';
import Home from './pages/Home';
import ProductEdit from './pages/ProductEdit';
import ProductNew from './pages/ProductNew';
import Products from './pages/Products';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import ProtectRoute from './components/ProtectRoute';
import RootLayout from './layout/RootLayout';
import PassingProps from './learn/1-passing-props';
import LiftingStateUp from './learn/2-lifting-state-up';
import PropsDrillingIssue from './learn/3-props-drilling-issue';
import ReactContextAPI1 from './learn/4-1-react-context-api';
import ReactContextAPI2 from './learn/4-2-seperation-react-context';
import RefExampleMemoValues from './learn/5-ref-memo-values';
import RefExampleReferencingDOM from './learn/6-ref-referencing-dom';
import GSAP_Animation from './learn/7-1-ref-gsap-animation';
import GSAP_Context from './learn/7-2-ref-gsap-context';
import FramerMotion_Animation from './learn/8-framer-motion';
import ComponentPropTypes from './learn/9-component-prop-types';
import LocalStorage from './learn/10-local-storage';
import ReactContextIssue from './learn/11-context-problem';
import ZustandLibrary from './learn/12-zustand-library';
import DataFetchAndUX from './learn/13-data-fetch-and-ux';
import TanStackQueryLibrary from './learn/14-tanstack-query';
import PaginationQuery from './learn/15-pagination-query';
import InfineteQuery from './learn/16-infinite-query';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="signin" element={<SignIn />} />
      <Route path="signup" element={<SignUp />} />
      <Route path="products" element={<Products />} />
      <Route
        path="product/new"
        element={
          <ProtectRoute>
            <ProductNew />
          </ProtectRoute>
        }
      />
      <Route
        path="product/edit/:productId"
        element={
          <ProtectRoute>
            <ProductEdit />
          </ProtectRoute>
        }
      />
      <Route path="contact" element={<Contact />} />
      <Route path="*" element={<Home />} />

      {/* 학습 주제 */}
      <Route path="learn/01" element={<PassingProps />} />
      <Route path="learn/02" element={<LiftingStateUp />} />
      <Route path="learn/03" element={<PropsDrillingIssue />} />
      <Route path="learn/04/01" element={<ReactContextAPI1 />} />
      <Route path="learn/04/02" element={<ReactContextAPI2 />} />
      <Route path="learn/05" element={<RefExampleMemoValues />} />
      <Route path="learn/06" element={<RefExampleReferencingDOM />} />
      <Route path="learn/07/01" element={<GSAP_Animation />} />
      <Route path="learn/07/02" element={<GSAP_Context />} />
      <Route path="learn/08" element={<FramerMotion_Animation />} />
      <Route path="learn/09" element={<ComponentPropTypes />} />
      <Route path="learn/10" element={<LocalStorage />} />
      <Route path="learn/11" element={<ReactContextIssue />} />
      <Route path="learn/12" element={<ZustandLibrary />} />
      <Route path="learn/13" element={<DataFetchAndUX />} />
      <Route path="learn/14" element={<TanStackQueryLibrary />} />
      <Route path="learn/15" element={<PaginationQuery />} />
      <Route path="learn/16" element={<InfineteQuery />} />
    </Route>
  )
);

export default router;
