export interface RegisterPayload {
  name: string;
  email: string;
  mobile: string;
  password: string;
  confirmPassword?: string;
}

export interface LoginPayload {
  email: string;
  password: string;
  isEmail?: string;
}

export interface RememberMePayload {
  email?: string;
  mobile?: string;
  password?: string;
  isEmail?: string;
}

export interface AuthState {
  currentUser?: any;
}
