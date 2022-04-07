import { expect, test } from '@jest/globals'
import { render } from '@testing-library/react'
import { App } from '../../components/app/index'

test('app component renders h1 heading', () => {
  const app = render(<App />)
  expect(app.findByTestId('app__header')).toBeTruthy()
})
