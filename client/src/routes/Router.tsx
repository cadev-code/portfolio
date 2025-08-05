import { Home, Projects } from '@/pages';
import { Route, Routes, Navigate } from 'react-router';

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/projects" element={<Projects />} />

      <Route path="/*" element={<Navigate to="/" />} />
    </Routes>
  );
};
