import React from "react";
import { useRoutes } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
import AIHumanity from "pages/AIHumanity";

const ProjectRoutes = () => {
  let element = useRoutes([
    { path: "/", element: <AIHumanity /> },
    { path: "*", element: <NotFound /> },
    {
      path: "aihumanity",
      element: <AIHumanity />,
    },
  ]);

  return element;
};

export default ProjectRoutes;
