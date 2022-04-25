import {render, screen} from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom'
import Header from './components/layout/Header';



describe('Header', () => {
it('Should check the alt text for image in header', async () => {
    render(
        <MemoryRouter>
            <Header />
        </MemoryRouter>
    );

const headerAltText = screen.getAllByAltText('Alchemy Logo')

})
})
// test('Should check that name is present in header', async () => {
// render(<Header />)

// const selectElement = screen.findByText('Vonta')

// return selectElement


// })
