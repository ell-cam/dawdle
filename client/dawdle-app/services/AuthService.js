// AuthService.js
import Config from '../utils/config';

class AuthService {
  async signup(user) {
    try {
      const response = await fetch(`${Config.apiUrl}/signup`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
      });

      if (response.ok) {
        const result = await response.json();
        return result;
      } else {
        const error = await response.json();
        throw new Error(error.message);
      }
    } catch (error) {
      throw new Error(`Signup failed: ${error.message}`);
    }
  }

  async login(credentials) {
    try {
      const response = await fetch(`${Config.apiUrl}/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(credentials),
      });

      if (response.ok) {
        const result = await response.json();
        return result;
      } else {
        const error = await response.json();
        throw new Error(error.message);
      }
    } catch (error) {
      throw new Error(`Login failed: ${error.message}`);
    }
  }

  // Additional methods for handling tokens, checking authentication, etc.
}

export default new AuthService();