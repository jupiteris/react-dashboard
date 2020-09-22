import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import SplashScreen from 'src/components/SplashScreen';
import { setUserData } from 'src/actions/accountActions';

function Auth({ children }) {
  const dispatch = useDispatch();
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    dispatch(
      setUserData({
        id: '5e86809283e28b96d2d38537',
        avatar: '/static/images/avatars/avatar_6.png',
        bio: 'Sales Manager',
        canHire: false,
        country: 'USA',
        email: 'katarina.smith@devias.io',
        username: 'admin',
        password: 'admin',
        firstName: 'Katarina',
        isPublic: true,
        lastName: 'Smith',
        phone: '+40 777666555',
        role: 'admin',
        state: 'New York',
        timezone: '4:32PM (GMT-4)'
      })
    );
    setLoading(false);
  }, [dispatch]);

  if (isLoading) {
    return <SplashScreen />;
  }

  return children;
}

Auth.propTypes = {
  children: PropTypes.any
};

export default Auth;
