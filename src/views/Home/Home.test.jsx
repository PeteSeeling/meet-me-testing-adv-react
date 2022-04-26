import { render, screen } from "@testing-library/react";
import Header from "../../components/layout/Header";
import Profile from "../../components/Profile/Profile";


test('Should test that Vonta is displayed', async () => {
render(<Profile />)

const name = await screen.getByText('Vonta');
})

test('Should test that the motto is displayed', async () => {
  render(<Profile />)
  
  const motto = await screen.getByText('Res Non Verba');
  })

  test('Should test that interest heading is displayed', async () => {
    render(<Profile />)
    
    const interestHeading= await screen.getByText('Interests');
    })

    test('Should test that the avatar is properly displayed', async () => {
      render(<Profile />)
      
      const avatarAltText= await screen.getByAltText('avatar');
      })

      test('Should test that the header image is present', () => {
        render(<Header />)
        
        const headerAltText =  screen.getByAltText('Alchemy Logo');
        })

        // test('Should return an index of 6 for the interests')
        //   render(<Profile />)

        //   const list = screen.getAllByRole('list')
        // get by allbyrole list item
        // findAllbyrole list item
        // expect item.length to equal 6


