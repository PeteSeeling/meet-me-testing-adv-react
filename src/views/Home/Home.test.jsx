import { render, screen } from "@testing-library/react";
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
