import '@testing-library/jest-dom'

jest.mock('react-i18next', () => ({
  // this mock makes sure any component using the translate hook can use it without a warning being shown
  useTranslation: () => {
    return {
      t: (str: string): string => str,
    }
  },
}))
