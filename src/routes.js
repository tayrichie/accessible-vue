import Home from "./pages/home";
import PageTitles from "./pages/page-titles";
import FocusManagement from "./pages/focus-management";
import ClickEvents from "./pages/click-events";
import AriaLive from "./pages/aria-live";
import Theming from "./pages/theming";

export default [
  {
    path: "/",
    component: Home,
    meta: {
      title: "Home Page",
      metaTags: [
        {
          name: "description",
          content: "The home page of our harness app."
        },
        {
          property: "og:description",
          content: "The home page of our harness app."
        }
      ]
    }
  },
  {
    path: "/page-titles",
    component: PageTitles,
    meta: {
      title: "Setting Page Titles in Vue",
      metaTags: [
        {
          name: "description",
          content: "Setting page titles in Vue"
        },
        {
          property: "og:description",
          content: "Setting page titles in Vue"
        }
      ]
    }
  },
  {
    path: "/focus-management",
    component: FocusManagement,
    meta: {
      title: "Focus and Focus Management in Vue",
      metaTags: [
        {
          name: "description",
          content: "Focus and Focus Management in Vue"
        },
        {
          property: "og:description",
          content: "Focus and Focus Management in Vue"
        }
      ]
    }
  },
  {
    path: "/click-events",
    component: ClickEvents,
    meta: {
      title: "Handling Click Events in Vue",
      metaTags: [
        {
          name: "description",
          content: "Click Events in Vue"
        },
        {
          property: "og:description",
          content: "Click Events in Vue"
        }
      ]
    }
  },
  {
    path: "/aria-live",
    component: AriaLive,
    meta: {
      title: "Aria-Live and Alert Regions in Vue",
      metaTags: [
        {
          name: "description",
          content: "Handling aria-live and alert regions in Vue"
        },
        {
          property: "og:description",
          content: "Handling aria-live and alert regions in Vue"
        }
      ]
    }
  },
  {
    path: "/theming",
    component: Theming,
    meta: {
      title: "Dark and Light Mode Theming in Vue",
      metaTags: [
        {
          name: "description",
          content: "Dark and Light Mode Theming in Vue"
        },
        {
          property: "og:description",
          content: "Dark and Light Mode Theming in Vue"
        }
      ]
    }
  }
];
