import { Routes, Route } from 'react-router-dom';

import ContentPage from 'content/Content';
import HomePage from 'page/homePage/HomePage';
import Movies from 'page/SearcMovies/SearcMovies';

export const App = () => {
  return (
    <>
      <ContentPage />
      <Routes>
        <Route index element={<HomePage />}></Route>
        <Route path="movies" exact element={<Movies />} />
        <Route path="*" element={<HomePage />} />
      </Routes>
    </>
  );
};
