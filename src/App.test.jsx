import {render, screen} from '@testing-library/react';
import Header from './components/layout/Header'


test('Should check the alt text for image in header', async () => {
render(<Header />)

const headerAltText = screen.getAllByAltText('Alchemy Logo')

})

test('Should check that name is present in header', async () => {
render(<Header />)

const selectElement = screen.findByText('Vonta')

console.log(selectElement)
return selectElement


})
