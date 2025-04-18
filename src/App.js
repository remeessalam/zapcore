import { Route, Routes } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { LandingPage } from "./pages/landingPages/LandingPage";
import LandingHeader from "./componets/landingPages/LandingHeader";
import LandingFooter from "./componets/landingPages/LandingFooter";
import WebsiteHeader from "./componets/website/WebsiteHeader";
import WebsiteFooter from "./componets/website/WebsiteFooter";
import { routes } from "./constant";
import { lazy, Suspense } from "react";
import { LoadingSpinner } from "./componets/common/LoadingSpinner";
import SpinnerContextProvider, {
  LoadingSpinnerContext,
} from "./componets/SpinnerContext";
import ScrollToTop from "./componets/common/ScrollToTop";
import BlogDetails from "./pages/website/BlogDetails";
import AiLandingPage from "./pages/landingPages/AiLandingPage";
import WhatsAppIconPopUp from "./componets/common/WhatsAppIconPopUp";
const Thankyou = lazy(() => import("./pages/Thankyou"));

AOS.init({
  once: true,
  duration: 500,
});
export default function App() {
  return (
    <SpinnerContextProvider>
      <LoadingSpinnerContext />
      <Suspense fallback={<LoadingSpinner />}>
        <ScrollToTop />
        <WhatsAppIconPopUp />
        <Routes>
          {/* Website Pages */}
          {routes.map(({ component, name, path }, index) => (
            <Route
              path={path}
              element={
                <>
                  <WebsiteHeader name={name} />
                  {component}
                  <WebsiteFooter />
                </>
              }
            />
          ))}
          {/* Thankyou page */}
          <Route
            path="/blogs/:id"
            element={
              <>
                <WebsiteHeader />

                <BlogDetails />
                <WebsiteFooter />
              </>
            }
          />
          <Route
            path="/thankyou"
            element={
              <>
                <Thankyou />
              </>
            }
          />

          {/* Landing Pages */}
          <Route
            path="/web-development"
            element={
              <>
                <LandingHeader />
                <LandingPage page={"web-development"} />
                <LandingFooter />
              </>
            }
          />
          <Route
            path="/app-development"
            element={
              <>
                <LandingHeader />
                <LandingPage page={"app-development"} />
                <LandingFooter />
              </>
            }
          />
          <Route
            path="/ai-services"
            element={
              <>
                <LandingHeader />
                <AiLandingPage page={"ai"} />
                <LandingFooter />
              </>
            }
          />
          <Route
            path="/game-development"
            element={
              <>
                <LandingHeader />
                <AiLandingPage page={"game development"} />
                <LandingFooter />
              </>
            }
          />
        </Routes>
      </Suspense>
    </SpinnerContextProvider>
  );
}
