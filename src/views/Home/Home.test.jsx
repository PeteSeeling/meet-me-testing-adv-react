import { render, screen } from "@testing-library/react";
import Profile from "../../components/Profile/Profile";


test('Should render the user profile', async () => {
render(<Profile />)

const name = await screen.getByText('Meet');


})
