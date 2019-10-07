import React from 'react';
import { Redirect } from 'react-router-dom';

export const protectedRoute = isAutorized => Component => props =>
  isAutorized ? <Component {...props} /> : <Redirect to="/login" />;
