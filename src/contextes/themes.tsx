import React from 'react'

export enum ActionName {
  // TOGGLE_SIDEBAR_OPEN = 'TOGGLE_SIDEBAR_OPEN',
  UPDATE = 'UPDATE',
  LOGOUT = 'LOGOUT',
}

export type ThemeType = {
  isLogged: boolean
  user: {
    uid: string
    email: string
    photoURL: string
    displayName: string
    phoneNumber: string
    emailVerified: boolean
  }
}

type ContextType = {
  state: ThemeType
  dispatch: React.Dispatch<Action>
}

// END TYPESCRIPT ---------------

export type Action = {
  type: ActionName
  payload?: Partial<ThemeType>
}

// WORKING HERE ----
export const defaultTheme: ThemeType = {
  isLogged: false,
  user: {
    uid: null,
    email: '',
    emailVerified: false,
    photoURL: '',
    phoneNumber: '',
    displayName: '',
  },
}

function updateTheme(state: ThemeType, action: Action): ThemeType {
  const { type, payload } = action
  switch (type) {
    case 'UPDATE':
      return {
        ...state,
        ...payload,
      }
    case 'LOGOUT':
      return {
        ...state,
        isLogged: false,
      }
    default:
      return state
  }
}

// END WORKING HERE -----

// Create context by default -
export const ThemeContext = React.createContext<ContextType>({ state: defaultTheme, dispatch: () => undefined })

// Create Provider by default
export function ThemeProvider({ children }: { children: React.ReactNode }): JSX.Element {
  const [state, dispatch] = React.useReducer(updateTheme, defaultTheme)

  return <ThemeContext.Provider value={{ state, dispatch }}>{children}</ThemeContext.Provider>
}
