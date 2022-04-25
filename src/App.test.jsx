import {render, fireEvent, screen} from '@testing-library/react';
import Header from './components/layout/Header'


test('Should render the header', async () => {
render(<Header />)

fireEvent.onLoad(screen.getByAltText('Alchemy-Logo'))

expect(screen.getByAltText('Alt-Text')).toHaveTextContent('Alchemy-Logo')
})
