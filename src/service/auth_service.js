import { firebaseAuth, githubProvider, googleProvider } from './firebase';

class AuthService {
  login = (provider) => {
    const authPorvider = this.getProvider(provider);
    return firebaseAuth.signInWithPopup(authPorvider);
  };

  logout = () => {
    firebaseAuth.signOut();
  };

  onAuthChange = (onUserChanged) => {
    firebaseAuth.onAuthStateChanged((user) => {
      onUserChanged(user);
    });
  };

  getProvider = (provider) => {
    switch (provider) {
      case 'Google':
        return googleProvider;
      case 'Github':
        return githubProvider;
      default:
        throw new Error('not supported provider');
    }
  };
}

export default AuthService;
