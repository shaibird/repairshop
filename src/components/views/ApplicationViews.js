import { Outlet, Route, Routes } from "react-router-dom"
import { TicketList } from "../tickets/TicketList"

export const ApplicationViews = () => {
	return (
		<Routes>
			<Route path="/" element={
				<>
					<h1>Honey Rae Repairs</h1>
					<div>Your one-stop shop for repairing your tech</div>

					<Outlet />
				</>
			}>
				<Route path="tickets" element={<TicketList />} />
			</Route>
		</Routes>
	)
}

